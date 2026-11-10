---
description: Qué es una relación de equivalencia (reflexiva, simétrica y transitiva), con la igualdad, la semejanza de triángulos y la congruencia módulo n como ejemplos.
---
>[!definicion] Relación de equivalencia
>Una relación de equivalencia en un conjunto no vacío $A$ es una relación binaria $\sim$ que satisface:
>1. Para todo $a \in A$, $a \sim a$. Esta propiedad se conoce como **reflexividad**.
>2. Para todo $a,b \in A$, $a \sim b \implies b \sim a$. Esta propiedad se conoce como **simetría**.
>3. Para todo $a,b,c \in A$, $(a \sim b$ y $b \sim c) \implies a \sim c$. Esta propiedad se conoce como **transitividad**.

![[relaciones-de-equivalencia-transitividad.svg|Tres puntos a, b y c en triángulo: a está unido con b, b con c, y una línea punteada une a con c|360]]

*Transitividad: si $a \sim b$ y $b \sim c$, entonces también $a \sim c$ (línea punteada).*

La relación de equivalencia permite decir que dos cosas son equivalentes en ciertos contextos. La más evidente es la igualdad, ya que si $x=2$ entonces $x$ equivale a 2. Otro ejemplo es la semejanza de triángulos:

![[relaciones-de-equivalencia-triangulos-semejantes.svg|Tres triángulos de distinto tamaño y orientación que tienen los mismos ángulos, marcados con arcos de colores, y un cuarto con ángulos distintos|600]]

*Tres triángulos semejantes y uno que **no** lo es. Los arcos del mismo color marcan ángulos iguales.*

Pese a que los tres primeros triángulos son diferentes, ya sea por orientación o tamaño, tienen los mismos ángulos. Por lo tanto, son semejantes. El cuarto, en cambio, no lo es. En este caso, preguntar $X \sim \triangle ABC$ para un triángulo $\triangle ABC$ dado tiene infinitas respuestas para $X$, y todos ellos son equivalentes a $\triangle ABC$. Un último ejemplo tiene que ver con aritmética modular: si $x \equiv 2 \pmod{3}$ entonces $x$ puede ser $\dots, -4, -1, 2, 5, 8, 11, \dots$. Las tres son relaciones de equivalencia, ¡y lo demostramos a continuación!

![[relaciones-de-equivalencia-modulo-3.svg|Una recta numérica en la que se destacan menos 4, menos 1, 2, 5, 8 y 11, cada uno a un salto de 3 del anterior|640]]

*Los enteros $x$ con $x \equiv 2 \pmod{3}$ están separados por saltos de $3$.*

>[!general] Igualdad $=$
>
>>[!teorema] Teorema
>>La igualdad $=$ en $\mathbb{R}$ es una relación de equivalencia.
>
>>[!demostracion] Demostración
>>Sean $a,b,c \in \mathbb{R}$. Por las propiedades definitorias de la igualdad, obtenemos directamente $a= a$, $a=b \implies b=a$, y $(a=b$ y $b=c) \implies a=c$. No se puede trabajar mucho más.


>[!general] Semejanza de triángulos $\sim$
>
>>[!teorema] Teorema
>>La semejanza de triángulos $\sim$ en el conjunto de triángulos en el plano es una relación de equivalencia.
>
>>[!demostracion] Demostración
>>Definamos la semejanza de triángulos como $\triangle ABC \sim \triangle A'B'C' \Longleftrightarrow \alpha = \alpha', \beta = \beta', \gamma = \gamma'$ como se muestra en la imagen.
>>
>>![[relaciones-de-equivalencia-angulos-correspondientes.svg|Dos triángulos semejantes de distinto tamaño, ABC y A'B'C', con cada par de ángulos correspondientes marcado del mismo color|520]]
>>
>>*Ángulos correspondientes de $\triangle ABC$ y $\triangle A'B'C'$.*
>>
>>1. Sea $\triangle ABC$ triángulo en el plano. Sea $\alpha$ el ángulo en $A$, $\beta$ el ángulo en $B$ y $\gamma$ el ángulo en $C$. Por **reflexividad** de la igualdad, $\alpha = \alpha, \beta = \beta, \gamma = \gamma$. Luego, por definición de la relación, $\triangle ABC \sim \triangle ABC$.
>>
>>2. Sean $\triangle ABC$, $\triangle DEF$ triángulos en el plano. Sean $\alpha, \beta, \gamma$ los ángulos en $A, B, C$ y $\delta, \varepsilon, \eta$ los ángulos en $D, E, F$, respectivamente. Supongamos que $\triangle ABC \sim \triangle DEF$. Luego por definición: $\alpha = \delta, \beta = \varepsilon, \gamma = \eta$. Por **simetría** de la igualdad, lo cual se justifica porque la igualdad es una relación de equivalencia, tenemos: $\delta =\alpha, \varepsilon=\beta, \eta=\gamma$. Por último, nuevamente por definición obtenemos $\triangle DEF \sim \triangle ABC$. Luego $\triangle ABC \sim \triangle DEF \implies \triangle DEF \sim \triangle ABC$.
>>
>>3. Sean $\triangle ABC$, $\triangle DEF$, $\triangle GHI$ triángulos en el plano. Sean $\alpha, \beta, \gamma$ los ángulos en $A, B, C$; $\delta, \varepsilon, \eta$ los ángulos en $D, E, F$; y $\theta, \lambda, \iota$ los ángulos en $G, H, I$, respectivamente. Supongamos que $\triangle ABC \sim \triangle DEF$ y $\triangle DEF \sim \triangle GHI$. Luego por definición: $\alpha = \delta, \beta = \varepsilon, \gamma = \eta$, $\delta =\theta, \varepsilon=\lambda, \eta=\iota$. Por **transitividad** de la igualdad, lo cual se justifica porque la igualdad es una relación de equivalencia, tenemos: $(\alpha = \delta, \delta =\theta) \implies \alpha=\theta$, $(\beta = \varepsilon, \varepsilon=\lambda) \implies \beta=\lambda$, $(\gamma = \eta, \eta=\iota) \implies \gamma=\iota$. Luego tenemos $\alpha=\theta, \beta=\lambda$ y $\gamma=\iota$. Por definición, $\triangle ABC \sim \triangle GHI$. Luego ($\triangle ABC \sim \triangle DEF$, $\triangle DEF \sim \triangle GHI$)$\implies \triangle ABC \sim \triangle GHI$.
>>
>>Reunidas las tres condiciones, la semejanza de triángulos en el plano es una relación de equivalencia.

>[!general] Congruencia módulo $n$ $\equiv \pmod{n}$
>
>>[!teorema] Teorema
>>La congruencia módulo $n$, $\equiv \pmod{n}$, en $\mathbb{Z}$ es una relación de equivalencia.
>
>>[!demostracion] Demostración
>>Sea $n \in \mathbb{Z}$ fijo. Definimos $a \equiv b \pmod{n} \iff$ existe $k \in \mathbb{Z}$ tal que $b-a=kn$. Luego:
>>1. Sea $a\in \mathbb{Z}$. Como $a-a=0=0 \cdot n$ y $0 \in \mathbb{Z}$, por definición $a \equiv a \pmod{n}$.
>>
>>2. Sean $a,b\in \mathbb{Z}$. Supongamos que $a \equiv b \pmod{n}$. Luego existe un $k \in \mathbb{Z}$ tal que $b-a=kn$. Sea $c=-k$. Como $k \in \mathbb{Z}$, $c \in \mathbb{Z}$. Sustituyendo $k=-c$ en $b-a=kn$, obtenemos $b-a=-cn$. Multiplicando por $-1$ a ambos lados se obtiene $a-b=cn$, con $c \in \mathbb{Z}$. Por definición, $b \equiv a \pmod{n}$. Luego $a \equiv b \pmod{n} \implies b \equiv a \pmod{n}$.
>>
>>3. Sean $a,b,c\in \mathbb{Z}$. Supongamos que $a \equiv b \pmod{n}$ y $b \equiv c \pmod{n}$. Por definición, existen $p,q \in \mathbb{Z}$ tales que $b-a=pn$ y $c-b=qn$. Despejando $b$ en la primera ecuación, obtenemos $b=a+pn$. Sustituyendo en la segunda ecuación, obtenemos $c-a-pn=qn$. Sumando a ambos lados $pn$ y factorizando por $n$, obtenemos $c-a=(p+q)n$. Sea $k=p+q$. Como $p,q \in \mathbb{Z}$, $k \in \mathbb{Z}$. Sustituyendo, obtenemos $c-a=kn$. Luego por definición $a \equiv c \pmod{n}$. Es decir, ($a \equiv b \pmod{n}, b \equiv c \pmod{n}$) $\implies a \equiv c \pmod{n}$.
>>
>>Reunidas las tres condiciones, la congruencia módulo $n$ es una relación de equivalencia.

Hay muchas otras relaciones de equivalencia. ¡Aquí te dejamos algunas para que las demuestres por tu cuenta!

>[!ejercicio] Ejercicio
>Demostrar que la paridad es una relación de equivalencia. Es decir, si para todo $a,b \in \mathbb{Z}$ definimos $a \sim b \iff$ ($a$ es par y $b$ es par) o ($a$ es impar y $b$ es impar), entonces $\sim$ es una relación de equivalencia.

>[!ejercicio] Ejercicio
>Demostrar que la relación $\sim$ en $\mathbb{R}^2$, definida para todo par de puntos $P=(p_1,p_2)$, $Q=(q_1,q_2)$ por $P \sim Q \iff \sqrt{p_1^2+p_2^2}= \sqrt{q_1^2+q_2^2}$, es una relación de equivalencia. Pista: $P \sim Q$ significa que $P$ y $Q$ están a la misma distancia del origen.
