import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { PageTypes } from "./quartz/plugins"
import { resolveRelative } from "@quartz-community/utils"
import type { FullSlug } from "@quartz-community/types"
import { h } from "preact"

const config = await loadQuartzConfig()
const layoutBase = await loadQuartzLayout()

// ════════════════════════════════════════════════════════════════════════
//  Componente "Siguiente artículo"
//
//  El orden de lectura de cada sección son los wikilinks de su index.md.
//  Quartz guarda esos enlaces, ya ordenados por aparición, en `links` de
//  cada página, así que el "siguiente" se calcula EN EL BUILD: no hay
//  JavaScript en el navegador ni una lista que mantener aparte.
//
//  - Solo aparece en artículos, no en las páginas de índice de sección.
//  - El último artículo de una sección no lleva enlace.
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

  const siguiente = orden[pos + 1]
  if (!siguiente) return null

  const destino = allFiles.find((f) => f.slug === siguiente)
  if (!destino) return null

  return h(
    "nav",
    { class: "siguiente-articulo", "aria-label": "Navegación entre artículos" },
    h(
      "a",
      { href: resolveRelative(slug as FullSlug, siguiente as FullSlug) },
      h("span", { class: "siguiente-articulo-etiqueta" }, "Siguiente"),
      h("span", { class: "siguiente-articulo-titulo" }, tituloDe(destino, siguiente)),
      h("span", { class: "siguiente-articulo-flecha", "aria-hidden": "true" }, "→"),
    ),
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

function conSiguiente(capa: Capa): Capa {
  const previos = plegarComentarios((capa.afterBody ?? []) as unknown[])
  return { ...capa, afterBody: [SiguienteArticulo, ...previos] }
}

// `loadQuartzConfig` ya construyo internamente el PageTypeDispatcher con el
// layout tal cual viene del YAML. En Quartz v5 el `export const layout` de este
// archivo NO se usa (es herencia de v4), asi que para inyectar un componente
// propio hay que reemplazar ese emitter por uno con el layout modificado.
const layoutConSiguiente = {
  defaults: conSiguiente(layoutBase.defaults as Capa),
  byPageType: Object.fromEntries(
    Object.entries(layoutBase.byPageType).map(([tipo, capa]) => [
      tipo,
      tipo === "content" ? conSiguiente(capa as Capa) : capa,
    ]),
  ),
}

config.plugins.emitters = config.plugins.emitters.filter((e) => e.name !== "PageTypeDispatcher")
config.plugins.emitters.push(PageTypes.PageTypeDispatcher(layoutConSiguiente as never))

export default config

// Quartz v5 no lee este export, pero `config-loader.ts` lo referencia en su
// rama de compatibilidad con v4 y `tsc --noEmit` falla si no existe.
export const layout = layoutConSiguiente as typeof layoutBase
