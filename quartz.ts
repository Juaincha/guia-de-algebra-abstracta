import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { PageTypes } from "./quartz/plugins"
import { resolveRelative } from "@quartz-community/utils"
import type { FullSlug } from "@quartz-community/types"
import type { BuildCtx } from "./quartz/util/ctx"
import { h } from "preact"

const config = await loadQuartzConfig()
const layoutBase = await loadQuartzLayout()

// ════════════════════════════════════════════════════════════════════════
//  KaTeX autohospedado
//
//  El plugin `@quartz-community/latex` trae las URLs de jsDelivr a fuego en
//  su `externalResources()`: no hay opcion de configuracion para cambiarlas.
//  Si la red del lector bloquea ese CDN (firewall de colegio o universidad)
//  las formulas pierden las fuentes y quedan en sans-serif, ilegibles como
//  matematica. Asi que servimos KaTeX desde el propio sitio.
//
//  Los archivos viven en quartz/static/katex/ (copiados de node_modules a
//  mano, ver la devDependency `katex`, que DEBE ser la misma version que
//  pide el plugin: 0.16.11). quartz/static/ se copia entero a
//  public/static/ en el build.
//
//  La carpeta fonts/ tiene que quedar hermana del .css porque el CSS
//  referencia url(fonts/KaTeX_*.woff2) relativo a si mismo.
// ════════════════════════════════════════════════════════════════════════

const KATEX_CSS = "static/katex/katex.min.css"
const KATEX_COPY_TEX = "static/katex/copy-tex.min.js"

const latex = config.plugins.transformers.find((t) => t.name === "Latex")
if (latex) {
  latex.externalResources = (ctx: BuildCtx) => {
    // El href de un <link> se resuelve contra la URL de la PAGINA, no contra
    // la hoja de estilos, y hay paginas anidadas (/relaciones/particiones).
    // Una ruta relativa se romperia ahi, asi que armamos una absoluta con el
    // basePath, igual que quartz/components/renderPage.tsx. Con --serve el
    // servidor local sirve desde la raiz, sin la subruta de baseUrl.
    const cfg = ctx.cfg.configuration
    const basePath =
      ctx.argv.serve || !cfg.baseUrl
        ? ""
        : new URL(`https://${cfg.baseUrl}`).pathname.replace(/\/$/, "")

    return {
      css: [{ content: `${basePath}/${KATEX_CSS}` }],
      js: [
        {
          src: `${basePath}/${KATEX_COPY_TEX}`,
          loadTime: "afterDOMReady",
          contentType: "external",
        },
      ],
    }
  }
}

// ════════════════════════════════════════════════════════════════════════
//  Sub-puntos "n.m" dentro de los callouts
//
//  En una demostracion por casos hace falta un segundo nivel: 1.1, 1.2,
//  2.1... Escribirlo como sublista de Markdown funciona, pero es fragil:
//  depende de una sangria exacta de 4 espacios que el editor de Obsidian
//  convierte en tabulador en cuanto tocas la linea, y un tabulador mas
//  espacios pasa de 6 columnas y Markdown lo lee como BLOQUE DE CODIGO.
//  Asi es como se rompio la demostracion de Particiones.
//
//  Aqui la sangria la pone el sitio, no el archivo. Basta con escribir la
//  linea pegada al margen del callout:
//
//      > 1. Enunciado del paso
//      >
//      > 1.1. Primer sub-punto
//      >
//      > 1.2. Segundo sub-punto
//
//  Cualquier parrafo de un callout que EMPIECE por dos enteros separados
//  por un punto (1.1, 9.4, 2.18, con o sin punto final) se marca como
//  sub-punto: el numero se saca a un <span> propio y el parrafo recibe la
//  clase `subpunto`. La sangria y el numero colgante son CSS, en
//  quartz/styles/custom.scss.
//
//  `n.m` nunca es un marcador de lista para Markdown (un marcador exige
//  espacio despues del punto), asi que estas lineas llegan aqui como
//  parrafos normales y no hay nada que deshacer.
//
//  Solo actua dentro de callouts y nunca en su titulo, para no tocar un
//  parrafo del cuerpo que empiece por un decimal ("3.14 es una
//  aproximacion de pi").
// ════════════════════════════════════════════════════════════════════════

const RE_SUBPUNTO = /^(\d+\.\d+)\.?(?:[ \t]+|$)/
const RE_SUBPUNTO_SOLO = /^(\d+\.\d+)\.?$/

type NodoHast = {
  type: string
  tagName?: string
  value?: string
  properties?: Record<string, unknown>
  children?: NodoHast[]
}

function tieneClase(nodo: NodoHast | undefined, clase: string): boolean {
  const cls = nodo?.properties?.className
  return Array.isArray(cls) && cls.includes(clase)
}

function textoPlano(nodo: NodoHast): string {
  if (nodo.type === "text") return nodo.value ?? ""
  return (nodo.children ?? []).map(textoPlano).join("")
}

/** Devuelve la etiqueta ("1.1") si el parrafo empieza por n.m, y la consume. */
function extraerEtiqueta(parrafo: NodoHast): string | undefined {
  const hijos = parrafo.children ?? []
  const primero = hijos[0]
  if (!primero) return undefined

  // Caso normal: "1.1. texto"
  if (primero.type === "text") {
    const m = RE_SUBPUNTO.exec(primero.value ?? "")
    if (!m) return undefined
    primero.value = (primero.value ?? "").slice(m[0].length)
    if (primero.value === "") hijos.shift()
    return m[1]
  }

  // Caso en negrita: "**1.1.** texto"
  if (primero.type === "element" && primero.tagName === "strong") {
    const m = RE_SUBPUNTO_SOLO.exec(textoPlano(primero).trim())
    if (!m) return undefined
    hijos.shift()
    const siguiente = hijos[0]
    if (siguiente?.type === "text") siguiente.value = (siguiente.value ?? "").replace(/^[ \t]+/, "")
    return m[1]
  }

  return undefined
}

function marcarSubpuntos(nodo: NodoHast, dentroDeCallout: boolean): void {
  const hijos = nodo.children
  if (!Array.isArray(hijos)) return

  // El titulo del callout tambien lleva un <p>; ahi no se toca nada.
  if (tieneClase(nodo, "callout-title")) return

  const dentro = dentroDeCallout || tieneClase(nodo, "callout")

  for (const hijo of hijos) {
    if (dentro && hijo.type === "element" && hijo.tagName === "p") {
      const etiqueta = extraerEtiqueta(hijo)
      if (etiqueta !== undefined) {
        const props = (hijo.properties ??= {})
        const cls = props.className
        props.className = Array.isArray(cls) ? [...cls, "subpunto"] : ["subpunto"]
        hijo.children!.unshift({
          type: "element",
          tagName: "span",
          properties: { className: ["subpunto-num"] },
          children: [{ type: "text", value: `${etiqueta}.` }],
        })
      }
    }
    marcarSubpuntos(hijo, dentro)
  }
}

config.plugins.transformers.push({
  name: "SubPuntos",
  htmlPlugins() {
    return [() => (arbol: NodoHast) => marcarSubpuntos(arbol, false)]
  },
} as never)

// ════════════════════════════════════════════════════════════════════════
//  Puntuacion pegada a las formulas
//
//  KaTeX no marca la formula como indivisible, asi que entre el final de
//  un $...$ y el signo que viene detras hay un punto de corte valido. En
//  lineas estrechas el navegador lo aprovecha y manda la coma o el punto
//  solo a la linea siguiente. Medido sobre los articulos: pasaba en
//  decenas de anchuras distintas en cada uno.
//
//  La solucion NO puede ser hacer la formula entera indivisible: las
//  formulas largas SI deben poder partirse. Asi que se envuelve solo el
//  conjunto formula+signo en un <span class="formula-pegada"> que lleva
//  `white-space: nowrap`, y dentro se le devuelve `normal` a .katex (ver
//  quartz/styles/custom.scss). El unico corte que queda prohibido es el
//  de la juntura; por dentro la formula sigue partiendose igual.
//
//  Se hace tambien con el signo de apertura que va pegado por delante
//  ("($x$"), para que no se quede huerfano al final de la linea.
// ════════════════════════════════════════════════════════════════════════

const RE_CIERRE = /^[,.;:!?)\]}»”…]+/
const RE_APERTURA = /[([{«¿¡“]+$/

function pegarPuntuacion(nodo: NodoHast): void {
  const hijos = nodo.children
  if (!Array.isArray(hijos)) return

  for (const hijo of hijos) pegarPuntuacion(hijo)

  for (let i = 0; i < hijos.length; i++) {
    const formula = hijos[i]
    if (!tieneClase(formula, "katex")) continue

    const grupo: NodoHast[] = [formula]
    let desde = i
    let hasta = i

    const previo = hijos[i - 1]
    if (previo?.type === "text") {
      const m = RE_APERTURA.exec(previo.value ?? "")
      if (m) {
        grupo.unshift({ type: "text", value: m[0] })
        previo.value = (previo.value ?? "").slice(0, m.index)
        if (previo.value === "") desde = i - 1
      }
    }

    const siguiente = hijos[i + 1]
    if (siguiente?.type === "text") {
      const m = RE_CIERRE.exec(siguiente.value ?? "")
      if (m) {
        grupo.push({ type: "text", value: m[0] })
        siguiente.value = (siguiente.value ?? "").slice(m[0].length)
        if (siguiente.value === "") hasta = i + 1
      }
    }

    if (grupo.length === 1) continue

    const envoltura: NodoHast = {
      type: "element",
      tagName: "span",
      properties: { className: ["formula-pegada"] },
      children: grupo,
    }
    hijos.splice(desde, hasta - desde + 1, envoltura)
    i = desde
  }
}

config.plugins.transformers.push({
  name: "PuntuacionPegada",
  htmlPlugins() {
    return [() => (arbol: NodoHast) => pegarPuntuacion(arbol)]
  },
} as never)

// ════════════════════════════════════════════════════════════════════════
//  Componente de navegación entre artículos (anterior / siguiente)
//
//  El orden de lectura de cada sección son los wikilinks de su index.md.
//  Quartz guarda esos enlaces, ya ordenados por aparición, en `links` de
//  cada página, así que el "siguiente" se calcula EN EL BUILD: no hay
//  JavaScript en el navegador ni una lista que mantener aparte.
//
//  - Solo aparece en artículos, no en las páginas de índice de sección.
//  - El primer artículo de una sección no lleva "Anterior"; el último
//    no lleva "Siguiente".
//  - Se renderiza antes que los comentarios (ver el orden de afterBody).
//
//  Si reordenas los wikilinks de un index.md, los enlaces se reacomodan
//  solos en el próximo build.
// ════════════════════════════════════════════════════════════════════════

const ES_INDEX = /(^|\/)index$/

/** Los enlaces a carpeta llegan como "carpeta/"; su página real es "carpeta/index". */
function normalizarEnlace(enlace: string): string {
  return enlace.endsWith("/") ? `${enlace.slice(0, -1)}/index` : enlace
}

function tituloDe(archivo: Record<string, unknown> | undefined, slug: string): string {
  const fm = archivo?.frontmatter as { title?: string } | undefined
  const propio = archivo?.title as string | undefined
  return fm?.title ?? propio ?? slug.split("/").pop() ?? slug
}

const SiguienteArticulo = (props: Record<string, unknown>) => {
  const fileData = props.fileData as Record<string, unknown> | undefined
  const allFiles = (props.allFiles ?? []) as Record<string, unknown>[]

  const slug = (fileData?.slug as string | undefined) ?? ""
  if (!slug || ES_INDEX.test(slug)) return null

  const slugIndice = [...slug.split("/").slice(0, -1), "index"].join("/")
  const indice = allFiles.find((f) => f.slug === slugIndice)
  if (!indice) return null

  const orden = ((indice.links ?? []) as string[]).map(normalizarEnlace)
  const pos = orden.indexOf(slug)
  if (pos < 0) return null

  const buscar = (s: string | undefined) => (s ? allFiles.find((f) => f.slug === s) : undefined)
  const slugAnterior = orden[pos - 1]
  const slugSiguiente = orden[pos + 1]
  const anterior = buscar(slugAnterior)
  const siguiente = buscar(slugSiguiente)
  if (!anterior && !siguiente) return null

  const enlace = (
    destinoSlug: string,
    destino: Record<string, unknown>,
    sentido: "anterior" | "siguiente",
  ) => {
    const etiqueta = h(
      "span",
      { class: "nav-articulos-etiqueta" },
      sentido === "anterior" ? "Anterior" : "Siguiente",
    )
    const titulo = h("span", { class: "nav-articulos-titulo" }, tituloDe(destino, destinoSlug))
    const flecha = h(
      "span",
      { class: "nav-articulos-flecha", "aria-hidden": "true" },
      sentido === "anterior" ? "\u2190" : "\u2192",
    )
    return h(
      "a",
      {
        class: `nav-articulos-enlace nav-articulos-${sentido}`,
        href: resolveRelative(slug as FullSlug, destinoSlug as FullSlug),
      },
      // La flecha va del lado hacia donde apunta la navegacion.
      ...(sentido === "anterior" ? [flecha, etiqueta, titulo] : [etiqueta, titulo, flecha]),
    )
  }

  return h(
    "nav",
    { class: "nav-articulos", "aria-label": "Navegación entre artículos" },
    anterior ? enlace(slugAnterior, anterior, "anterior") : null,
    siguiente ? enlace(slugSiguiente, siguiente, "siguiente") : null,
  )
}

// Los estilos viven en quartz/styles/custom.scss, no aca: el CSS de los
// componentes se emite dentro de @layer quartz-base y el tema le gana.

// ════════════════════════════════════════════════════════════════════════
//  Comentarios plegados
//
//  El plugin `comments` no tiene opcion para arrancar cerrado, asi que
//  envolvemos su componente en un <details>. Su script inyecta el cliente
//  de giscus con data-loading="lazy", asi que dentro de un <details>
//  cerrado el iframe NI SIQUIERA se carga hasta que el lector lo abre.
//
//  Hay que reenviar css / beforeDOMLoaded / afterDOMLoaded del componente
//  original: si no, el script que carga giscus nunca se emite.
// ════════════════════════════════════════════════════════════════════════

type Componente = ((props: Record<string, unknown>) => unknown) & {
  css?: unknown
  beforeDOMLoaded?: unknown
  afterDOMLoaded?: unknown
}

function plegarComentarios(componentes: unknown[]): unknown[] {
  return componentes.map((componente) => {
    const original = componente as Componente
    if (original?.name !== "Comments") return componente

    const Plegado = (props: Record<string, unknown>) =>
      h(
        "details",
        { class: "comentarios" },
        h("summary", null, "Comentarios"),
        h(original as never, props as never),
      )

    Plegado.css = original.css
    Plegado.beforeDOMLoaded = original.beforeDOMLoaded
    Plegado.afterDOMLoaded = original.afterDOMLoaded
    return Plegado
  })
}

type Capa = Record<string, unknown>

function ajustarAfterBody(capa: Capa, conBoton: boolean): Capa {
  const previos = plegarComentarios((capa.afterBody ?? []) as unknown[])
  return { ...capa, afterBody: conBoton ? [SiguienteArticulo, ...previos] : previos }
}

// `loadQuartzConfig` ya construyo internamente el PageTypeDispatcher con el
// layout tal cual viene del YAML. En Quartz v5 el `export const layout` de este
// archivo NO se usa (es herencia de v4), asi que para inyectar un componente
// propio hay que reemplazar ese emitter por uno con el layout modificado.
const layoutConSiguiente = {
  defaults: ajustarAfterBody(layoutBase.defaults as Capa, true),
  byPageType: Object.fromEntries(
    Object.entries(layoutBase.byPageType).map(([tipo, capa]) => [
      tipo,
      // Los comentarios se pliegan en TODOS los tipos de pagina: las de
      // seccion y las de etiqueta tambien los llevan. El boton en cambio
      // solo tiene sentido en articulos.
      ajustarAfterBody(capa as Capa, tipo === "content"),
    ]),
  ),
}

config.plugins.emitters = config.plugins.emitters.filter((e) => e.name !== "PageTypeDispatcher")
config.plugins.emitters.push(PageTypes.PageTypeDispatcher(layoutConSiguiente as never))

export default config

// Quartz v5 no lee este export, pero `config-loader.ts` lo referencia en su
// rama de compatibilidad con v4 y `tsc --noEmit` falla si no existe.
export const layout = layoutConSiguiente as typeof layoutBase
