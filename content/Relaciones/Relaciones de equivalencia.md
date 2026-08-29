>[!definicion] Relación de equivalencia
>Una relación de equivalencia en un conjunto no vacío $A$ es una relación binaria $\sim$ que satisface:
>1. Para todo $a \in A$ $a \sim a$. Esta propiedad se conoce como **reflexividad.**
>2. Para todo $a,b \in A$, $a \sim b \implies b \sim a$. Esta propiedad se conoce como **simetría.**
>3. Para todo $a,b,c \in A$, ($a \sim b$ y $b \sim c) \implies a \sim c$. Esta propiedad se conoce como **transitividad**.

La relación de equivalencia permite decir que dos cosas son equivalentes en ciertos contextos. La más evidente es la igualdad, ya que si $x=2$ entonces $x$ equivale a 2. Otro ejemplo es la semejanza de triángulos:

![[Pasted image 20260823140032.png]]

Pese a que los primeros tres triángulos son diferentes, ya sea por orientación o tamaño, preservan las mismas relaciones entre sus lados. Por lo tanto, son semejantes. En este caso, preguntar $X \sim \triangle ABC$ para un triángulo $\triangle ABC$ dado tiene infinitas respuestas para $X$, y todos estos son equivalentes a $\triangle ABC$. Un último ejemplo tiene que ver con aritmética modular: si $x≡2\ (mod\ 3)$ entonces $x$ puede ser 5, 8, 11, etc. Todas estas son relaciones de equivalencia, y se demuestra a continuación:

>[!general] Igualdad $=$
>
>>[!teorema] Teorema
>>La igualdad $=$ en $\mathbb{R}$ es una relación de equivalencia.
>
>>[!demostracion] Demostración
>>Sea $a,b,c \in a$. Por las propiedades definitorias de la igualdad, obtenemos directamente $a= a$, $a=b \implies b=a$, y  $(a=b$ y $b=c) \implies b=c$. No se puede trabajar mucho más.


>[!general] Semejanza de triángulos $\sim$
>
>>[!teorema] Teorema
>>La semejanza de triángulos $\sim$ en el conjunto de triángulos en el plano es una relación de equivalencia.
>
>>[!demostracion] Demostración
>>Definamos la semejanza de triángulos como $\triangle ABC \sim \triangle A'B'C' \Longleftrightarrow \alpha = \alpha', \beta = \beta', \gamma = \gamma'$ como se muestra en la imagen.
>>![[Pasted image 20260823154241.png]]
>>1. Sea $\triangle ABC$ triángulo en el plano. Sea $\alpha$ el ángulo en $A$, $\beta$ el ángulo en $B$ y $\gamma$ el ángulo en $C$. Como $\alpha = \alpha, \beta = \beta, \gamma = \gamma$, por definición de la relación $\triangle ABC \sim \triangle ABC$.
>>
>>2. Sean $\triangle ABC$, $\triangle DEF$ triángulos en el plano. Sea $\alpha$ el ángulo en $A$, $\beta$ el ángulo en $B$, $\gamma$ el ángulo en $C$, $\delta$ el ángulo en $D$, $\varepsilon$ el ángulo en $E$ y $\eta$ el ángulo en $F$. Dejemos que $\triangle ABC \sim \triangle DEF$ sea cierto. Luego por definición: $\alpha = \delta, \beta = \varepsilon, \gamma = \eta$. Por **simería** de la igualdad, lo cual se justifica porque la igualdad es una relación de equivalencia, tenemos: $\delta =\alpha, \varepsilon=\beta, \eta=\gamma$. Por último, nuevamente por definición obtenemos $\triangle DEF \sim \triangle ABC.$ Luego $\triangle ABC \sim \triangle DEF \implies \triangle DEF \sim \triangle ABC.$
>>
>>3. Sean $\triangle ABC$, $\triangle DEF$, $\triangle GHI$ triángulos en el plano. Sea $\alpha$ el ángulo en $A$, $\beta$ el ángulo en $B$, $\gamma$ el ángulo en $C$, $\delta$ el ángulo en $D$, $\varepsilon$ el ángulo en $E$, $\eta$ el ángulo en $F$, $\theta$ el ángulo en $G$, $\lambda$ el ángulo en $H$ y $\iota$ el ángulo en $I$. Dejemos que $\triangle ABC \sim \triangle DEF$ sea cierto y $\triangle DEF \sim \triangle HIJ$ sea cierto. Luego por definición:  $\alpha = \delta, \beta = \varepsilon, \gamma = \eta$, $\delta =\theta, \varepsilon=\lambda, \eta=\iota$. Por **transitividad** de la igualdad, lo cual se justifica porque la igualdad es una relación de equivalencia, tenemos: $(\alpha = \delta, \delta =\theta) \implies \alpha=\theta$, $(\beta = \varepsilon, \varepsilon=\lambda) \implies \beta=\lambda$, $(\gamma = \eta, \eta=\iota) \implies \gamma=\iota$. Luego tenemos $\alpha=\theta, \beta=\lambda$ y $\gamma=\iota$. Por definición, $\triangle ABC \sim \triangle GHI$. Luego ( $\triangle ABC \sim \triangle DEF$, $\triangle DEF \sim \triangle GHI$)$\implies \triangle ABC \sim \triangle GHI$.
>>
>>Reunidas las tres condiciones, la semejanza de triángulos en el plano es una relación de equivalencia.

>[!general] Congruencia módulo n $≡\ (mod\ n)$
>
>>[!teorema] Teorema
>>La congruencia módulo n, $≡\ (mod\ n)$, en $\mathbb{Z}$ es una relación de equivalencia.
>
>>[!demostracion] Demostración
>>Sean $a,b,n \in \mathbb{Z}$. Definimos $≡\ (mod\ n)$ como $a≡b\ (mod\ n) \Longleftrightarrow b-a=kn$, con $k \in \mathbb{Z}$. Luego:
>>1. Sea $a\in \mathbb{Z}$. Como $a-a=0$ y $0=kn$ con $k=0$, luego $a≡a\ (mod\ n)$.
>>
>>2. Sean $a,b\in \mathbb{Z}$. Dejemos que $a≡b\ (mod\ n)$ sea cierto. Luego existe un $k \in \mathbb{Z}$ tal que $b-a=kn$. Dejemos $c=-k$. Como $k \in \mathbb{Z}$, $c \in \mathbb{Z}$. Sustituyendo $k=-c$ en $b-a=kn$, obtenemos $b-a=-cn$. Multiplicando por $-1$ a ambos lados se obtiene $a-b=cn$, con $c \in \mathbb{Z}$. Por definición, $b≡a\ (mod\ n)$. Luego $a≡b\ (mod\ n) \implies b≡a\ (mod\ n)$.
>>
>>3. Sean $a,b,c\in \mathbb{Z}$. Dejemos que $a≡b\ (mod\ n)$ sea cierto y que $b≡c\ (mod\ n)$ sea cierto. Por definición, existen $p,q \in \mathbb{Z}$ tal que $b-a=pn$ y $c-b=qn$. Despejando $b$ en la primera ecuación, obtenemos $b=a+pn$. Sustituyendo en la segunda ecuación, obtenemos $c-a-pn=qn$. Sumando a ambos lados $pn$ y factorizando por $n$, obtenemos. $c-a=(p+q)n$. Sea $k=p+q$. Como $p,q \in \mathbb{Z}$, luego $k \in \mathbb{Z}$. Sustituyendo, obtenemos $c-a=kn$. Luego por definición $a≡c\ (mod\ n)$. Es decir, ($a≡b\ (mod\ n), b≡c\ (mod\ n)$) $\implies a≡c\ (mod\ n)$.
>>
>>Reunidas las tres condiciones, la congruencia módulo n es una relación de equivalencia.

Como estas hay muchas más relaciones de equivalencias. A continuación hay algunas relaciones de equivalencias propuestas para demostrar.

>[!ejercicio] Ejercicio
>Demostrar que la paridad es una relación de equivalencia. Es decir, se define ~ como: para todo $a,b \in \mathbb{Z}$, $a \sim b$ $\iff$ ($a$ es par y $b$ es par) o ($a$ es impar y $b$ es impar), luego ~ es una relación de equivalencia.

>[!ejercicio] Ejercicio
>Demostrar que $d(x,y)$ es una relación de equivalencia, donde se define $d(P,Q)$ como: para todo par de puntos $P,Q \in \mathbb{R}^2$ con $P=(p_1,p_2)$, $Q=(q_1,q_2)$, $d(P,Q) \iff \sqrt{p_1^2+p_2^2}= \sqrt{q_1^2+q_2^2}$.
