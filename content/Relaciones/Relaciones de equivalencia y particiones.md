>[!definicion] Relación de equivalencia
>Una relación de equivalencia en un conjunto no vacío $A$ es una relación binaria ~ que satisface:
>1. Para todo $a \in A$ $a \sim a$. Esta propiedad se conoce como **reflexividad.**
>2. Para todo $a,b \in A$, $a \sim b \implies b \sim a$. Esta propiedad se conoce como **simetría.**
>3. Para todo $a,b,c \in A$, ($a \sim b$ y $b \sim c) \implies a \sim c$. Esta propiedad se conoce como **transitividad**.

La relación de equivalencia permite decir que dos cosas son equivalentes en ciertos contextos. La más evidente es la igualdad, ya que si $x=2$ entonces el único x que satisface esto es 2. Otro ejemplo es la semejanza de triángulos:

![[Pasted image 20260823140032.png]]

Pese a que los primeros tres triángulos son diferentes, ya sea por orientación o tamaño, preservan las mismas relaciones entre sus lados. Por lo tanto, son semejantes. En este caso, preguntar $X \sim \triangle ABC$ para un triángulo $\triangle ABC$ dado tiene infinitas respuestas para $X$. Un último ejemplo tiene que ver con aritmética modular: si $x≡2\ (mod\ 3)$ entonces x puede ser 5, 8, 11, etc. Todas estas son relaciones de equivalencia, y se demuestra a continuación:

>[!general] Igualdad
>
>>[!teorema] Teorema
>>La igualdad $=$ en $\mathbb{R}$ es una relación de equivalencia.
>
>>[!demostracion] Demostración
>>Sea $a,b,c \in a$. Por las propiedades definitorias de la igualdad, obtenemos directamente $a= a$, $a=b \implies b=a$, y  $(a=b$ y $b=c) \implies b=c$. No se puede trabajar mucho más.


>[!general] Semejanza de triángulos
>
>>[!teorema] Teorema
>>La semejanza de triángulos $\sim$ en el conjunto de triángulos en el plano es una relación de equivalencia.
>
>>[!demostracion] Demostración
>>Definamos la semejanza de triángulos como $\triangle ABC \sim \triangle A'B'C' \Longleftrightarrow \alpha = \alpha', \beta = \beta', \gamma = \gamma'$ como se muestra en la imagen. ![[Pasted image 20260823154241.png]]
>>1. Sea $\triangle ABC$ triángulo en el plano. Sea $\alpha$ el ángulo en $A$, $\beta$ el ángulo en $B$ y $\gamma$ el ángulo en $C$. Como $\alpha = \alpha, \beta = \beta, \gamma = \gamma$, por definición de la relación $\triangle ABC \sim \triangle ABC$.
>><br>
>>2. Sean $\triangle ABC$, $\triangle DEF$ triángulos en el plano. Sea $\alpha$ el ángulo en $A$, $\beta$ el ángulo en $B$, $\gamma$ el ángulo en $C$, $\delta$ el ángulo en $D$, $\varepsilon$ el ángulo en $E$ y $\eta$ el ángulo en $F$. Dejemos que $\triangle ABC \sim \triangle DEF$ sea cierto. Luego por definición: $\alpha = \delta, \beta = \varepsilon, \gamma = \eta$. Por **simería** de la igualdad, lo cual se justifica porque la igualdad es una relación de equivalencia, tenemos: $\delta =\alpha, \varepsilon=\beta, \eta=\gamma$. Por último, nuevamente por definición obtenemos $\triangle DEF \sim \triangle ABC.$ Luego $\triangle ABC \sim \triangle DEF \implies \triangle DEF \sim \triangle ABC.$
>><br>
>>3. Sean $\triangle ABC$, $\triangle DEF$, $\triangle GHI$ triángulos en el plano. Sea $\alpha$ el ángulo en $A$, $\beta$ el ángulo en $B$, $\gamma$ el ángulo en $C$, $\delta$ el ángulo en $D$, $\varepsilon$ el ángulo en $E$, $\eta$ el ángulo en $F$, $\theta$ el ángulo en $G$, $\lambda$ el ángulo en $H$ y $\iota$ el ángulo en $I$. Dejemos que $\triangle ABC \sim \triangle DEF$ sea cierto y $\triangle DEF \sim \triangle HIJ$ sea cierto. Luego por definición:  $\alpha = \delta, \beta = \varepsilon, \gamma = \eta$, $\delta =\theta, \varepsilon=\lambda, \eta=\iota$. Por **transitividad** de la igualdad, lo cual se justifica porque la igualdad es una relación de equivalencia, tenemos: $(\alpha = \delta, \delta =\theta) \implies \alpha=\theta$, $(\beta = \varepsilon, \varepsilon=\lambda) \implies \beta=\lambda$, $(\gamma = \eta, \eta=\iota) \implies \gamma=\iota$. Luego tenemos $\alpha=\theta, \beta=\lambda$ y $\gamma=\iota$. Por definición, $\triangle ABC \sim \triangle GHI$. Luego ( $\triangle ABC \sim \triangle DEF$, $\triangle DEF \sim \triangle GHI$)$\implies \triangle ABC \sim \triangle GHI$.
>><br>
>>Reunidas las tres condiciones, la semejanza de triángulos en el plano es una relación de equivalencia.

>[!general] Congruencia módulo n
>
>>[!teorema] Teorema
>>La congruencia módulo n, $≡\ (mod\ n)$, en $\mathbb{Z}$ es una relación de equivalencia.
>
>>[!demostracion] Demostración
>>Sean $a,b,n \in \mathbb{Z}$. Definimos $≡\ (mod\ n)$ como $a≡b\ (mod\ n) \Longleftrightarrow b-a=kn$, con $k \in \mathbb{Z}$. Luego:
>>1. Sea $a\in \mathbb{Z}$. Como $a-a=0$ y $0=kn$ con $k=0$, luego $a≡a\ (mod\ n)$.
>><br>
>>2. Sean $a,b\in \mathbb{Z}$. Dejemos que $a≡b\ (mod\ n)$ sea cierto. Luego existe un $k \in \mathbb{Z}$ tal que $b-a=kn$. Dejemos $c=-k$. Como $k \in \mathbb{Z}$, $c \in \mathbb{Z}$. Sustituyendo $k=-c$ en $b-a=kn$, obtenemos $b-a=-cn$. Multiplicando por $-1$ a ambos lados se obtiene $a-b=cn$, con $c \in \mathbb{Z}$. Por definición, $b≡a\ (mod\ n)$. Luego $a≡b\ (mod\ n) \implies b≡a\ (mod\ n)$.
>><br>
>>3. Sean $a,b,c\in \mathbb{Z}$. Dejemos que $a≡b\ (mod\ n)$ sea cierto y que $b≡c\ (mod\ n)$ sea cierto. Por definición, existen $p,q \in \mathbb{Z}$ tal que $b-a=pn$ y $c-b=qn$. Despejando $b$ en la primera ecuación, obtenemos $b=a+pn$. Sustituyendo en la segunda ecuación, obtenemos $c-a-pn=qn$. Sumando a ambos lados $pn$ y factorizando por $n$, obtenemos. $c-a=(p+q)n$. Sea $k=p+q$. Como $p,q \in \mathbb{Z}$, luego $k \in \mathbb{Z}$. Sustituyendo, obtenemos $c-a=kn$. Luego por definición $a≡c\ (mod\ n)$. Es decir, ($a≡b\ (mod\ n), b≡c\ (mod\ n)$) $\implies a≡c\ (mod\ n)$.<br>
>>Reunidas las tres condiciones, la congruencia módulo n es una relación de equivalencia.

Como estas hay muchas más relaciones de equivalencias. A continuación hay algunas relaciones de equivalencias propuestas para demostrar.

>[!ejercicio] Ejercicio
>Demostrar que la paridad es una relación de equivalencia. Es decir, se define ~ como: para todo $a,b \in \mathbb{Z}$, $a \sim b$ $\iff$ ($a$ es par y $b$ es par) o ($a$ es impar y $b$ es impar), luego ~ es una relación de equivalencia.

>[!ejercicio] Ejercicio
>Demostrar que la igualdad en la distancia de dos puntos en el plano al origen es una relación de equivalencia. Es decir, se define $d(P,Q)$ como: para todo par de puntos $P,Q \in \mathbb{R}^2$ con $P=(p_1,p_2)$, $Q=(q_1,q_2)$, $d(P,Q) \iff \sqrt{p_1^2+p_2^2}= \sqrt{q_1^2+q_2^2}$.

## Partición
Un concepto muy relevante para las relaciones de equivalencia son las particiones. Se definen de la siguiente forma:

>[!definicion] Definición
>Una partición $P$ de un conjunto $A$ es una colección de subconjuntos no vacíos de $A$ donde cada elemento de $A$ pertenece a un único miembro de $P$.

De esta forma, una partición subdivide a $A$ en conjuntos disjuntos. Por ejemplo, una partición de $A= \{a,b,c,d\}$ es $P_1=\{\{a,b\},\{c,d\} \}$. Otra partición posible de $A$ es $P_2=\{\{a\},\{b\},\{c\},\{d\} \}$. Un último ejemplo es $P_3 = \{\{a,b,c\},\{d\}\}$. 
![[Pasted image 20260823185527.png|500]]
Podemos reducir esta definición lingüística de partición a tres condiciones:

>[!teorema] Teorema
>Un conjunto $P$ es partición de un conjunto $A$ si y solo si:
>1. $\emptyset \notin P$
>2. $\bigcup\limits_{S \in P} S = A$
>3. Para todo $M,N \in P$, $M \neq N \implies M \cap N = \emptyset$

El punto 2 significa la unión de todos los conjuntos que hay dentro de $P$ es igual a $A$.

>[!demostracion] Demostración
>- _Sentido $\Leftarrow$_: Sea $P$ partición de $A$. Luego, como la definición dice que $P$ es una colección de subconjuntos no vacíos de $A$, obtenemos el punto 1. Como cada elemento de $A$ pertenece a algún miembro de $P$, la unión de todos los miembros de $P$ incluye a todos los elementos de $A$. Esto es, $A \subseteq \bigcup\limits_{S \in P} S$. Como la definición exige que cada miembro $S$ en $P$ sea subconjunto de $A$, obtenemos $\bigcup\limits_{S \in P} S \subseteq A$. Por ambas relaciones, obtenemos $\bigcup\limits_{S \in P} S = A$. Por último, como cada elemento de $A$ pertenece a un único miembro de $P$, no existe ningún $a \in A$ tal que existan $M,N \in P$ distintos tal que $a \in M$ y $a \in N$. Por las leyes de negación, esto es lo mismo que decir que para todo $a \in A$ y para todo $M,N \in P$ distintos no se cumple $a \in M$ y $a \in N$. Esto es,  para todo $a \in A$ y para todo $M,N \in P$ distintos tenemos $a \notin M \cap N$. Como $M$ y $N$ son subconjuntos de $A$, decir que para todo $a \in A$ $a \notin M \cap N$ es equivalente a $M \cap N = \emptyset$. Luego para todo $M,N \in P$ $M \neq N \implies M \cap N = \emptyset$. Luego si $P$ es partición de $A$, se cumplen las tres propiedades.
><br>
>- _Sentido $\Rightarrow$:_ Sean las tres propiedades verdaderas. Por la propiedad 2, $\bigcup\limits_{S \in P} S = A$. Con la notación de constructor de conjuntos, podemos escribir $\bigcup\limits_{S \in P} S$ como $\{ a \ |\ a \in S  \text{ para algún } S \in P \}$. Además, podemos escribir $A$ como $\{a\ |\ a \in A \}$. Luego $\{ a \ |\ a \in S  \text{ para algún } S \in P \}=\{a\ |\ a \in A \}$. Por propiedades de los constructores de conjuntos, si la primera condición es idéntica, entonces la segunda es equivalente. Por lo tanto, $a \in S  \text{ para algún } S \in P$ es equivalente a $a \in A$. Particularmente, si $a \in S_0$, luego $a \in A$. Es decir, $S_0\subseteq A$. Como aplica para cada $a \in S$ en cualquier $S \in P$, para todo $S \in P$ $S\subseteq A$. En conjunto con la primera propiedad, $\emptyset \notin P$, recuperamos la primera parte de la definición: "una colección de subconjuntos no vacíos de $A$". Para recuperar la parte de "cada elemento de $A$ pertenece a un único miembro de $P$", se utiliza la propiedad 3. Esta dice que para todo $M,N \in P$, $M \neq N \implies M \cap N = \emptyset$. En lenguaje natural, esto significa que dos subconjuntos distintos de $A$ tienen intersección vacía, lo cual es equivalente a que no comparten elementos en común. Como la unión de todos los miembros de $P$ es igual a $A$, cada elemento de $A$ está en algún miembro de $P.$ Como ningún par de miembros de $P$ comparte elementos, cada elemento de $A$ está en un único miembro de $P$. Con esto se recupera la definición completa.
>Habiendo verificado las dos direcciones, la definición de partición se cumple si y solo si se verifican las tres propiedades.

Te preguntarás, ¿qué relevancia tienen las particiones en un artículo de relaciones de equivalencia? Bueno, ahora viene la parte interesante. Este es el teorema de correspondencia.

>[!teorema] Teorema
>Sea $A$ un conjunto no vacío. Luego:
>1. Toda relación de equivalencia $\sim$ en $A$ determina una partición única $P_{\sim}$ de $A$.
>2. Toda partición $P$ de $A$ determina una relación de equivalencia única $\sim_P$ en $A$.

Este teorema tiene muchas capas, ya que hay que demostrar que una relación de equivalencia determina una partición en el mismo conjunto y además demostrar que esta es única, para luego hacer lo mismo en sentido contrario. Pero ingeniosamente, se encontró una forma de verificar la unicidad de ambos puntos a la vez.

>[!demostracion] Demostración
>1. Sea $A$ un conjunto no vacío, y $\sim$ una relación de equivalencia en el conjunto. Definimos la **clase de equivalencia** de x como $[x]\coloneqq \{y\in A |\ x \sim y \}$. Sea $P_\sim=\{[x]\ |\ x \in A \}$. <br>
>**1.1.** Para todo $x \in A$, $[x] \neq \emptyset$, ya que como $\sim$ es relación de equivalencia, $x \sim x$ y por definición de $[x]$, $x \in [x]$ y por lo tanto $[x]$ no es vacío.<br>
>**1.2.** Para todo $x \in A$, $x \in [x]$. Luego $x \in A \implies x \in [x]$, lo que es equivalente a $A \subseteq [x]$. Como se cumple para cada $[x] \in P_\sim$, $A \subseteq \bigcup\limits_{[x] \in P_\sim} [x]$. Además para cada $[x] \in P_\sim$, como la primera condición del constructor de conjuntos exige $y \in A$, tenemos $[x] \subseteq A$. Como aplica para cada $[x]$, $\bigcup\limits_{[x] \in P_\sim} [x] \subseteq A$. Por ambas propiedades, $\bigcup\limits_{[x] \in P_\sim} [x] = A$.<br>
>**1.3.** Sean $M,N \in P_\sim$. Luego pueden escribirse como $M=[m]$, $N=[n]$ para algunos $m,n \in A$. Supongamos $a \in [m]$ y $a \in [n]$. Luego por definición, $m \sim a$ y $n \sim a$. Por simetría y transitividad, $m \sim n$ y $n \sim m$. Ahora, $[n]= \{ k \in A \ | \ k \sim n\}$. Como $k\sim n$ y $n \sim m$, por transitividad $k \sim m$. Luego para todo $k \in A$, $k \sim n \iff k \sim m$. Luego $[m]=[n]$. es decir, si existe un $a \in A$ tal que $a \in [m]$ y $a \in [n]$, luego $[m]=[n]$. Por ley del contrarrecíproco, si  $[m]=[n]$, luego no existe un $a \in A$ tal que $a \in [m]$ y $a \in [n]$. Es decir, $[m] \cap [n] = \emptyset$. Sustituyendo con $M$ y $N$: para todo $M,N \in P_\sim$,  $M \neq N \implies  [m] \cap [n] = \emptyset$.<br>
>Verificadas las tres condiciones, $P_\sim$ es una partición.
><br>
>2. Sea $A$ un conjunto no vacío, y $P=\{A_1,A_2,...A_n\}$ una partición del conjunto. Definimos: para todo $x,y \in A$ $x\sim_P y \iff \text{existe un } A_i \in P \text{ tal que } x \in A_i, y \in A_i$.<br>
>**2.1.** Como $P$ es partición, para todo $x \in A$ existe un $A_i \in P$ tal que $x \in A_i$. Por idempotencia, $x \in A_i$ y $x \in A_i$. Por definición de la relación, $x\sim_P x$. <br>
>**2.2.** Sean $x,y \in A$. Dejemos que $x\sim_P y$ sea cierto. Luego existe un $A_i \in P$ tal que $x \in A_i$,$y \in A_i$. Por conmutatividad, $y \in A_i$,$x \in A_i$. Por definición de la relación,  $y\sim_P x$. Luego  $x\sim_P y \implies  y\sim_P x$. <br>
>**2.3.** Sean $x,y,z \in A$. Dejemos que $x\sim_P y$ sea cierto y que $y\sim_P z$ sea cierto. Luego existen $A_i,A_j \in P$ tal que $(x\in A_i, y\in A_i)$ y $(y\in A_j, z\in A_j)$. Como $P$ es partición, cada $k\in A$ pertenece a un único $A_l \in P$. Como $y\in A_i, y\in A_j$ entonces $A_i = A_j$. Llamemos $A_i=A_j=N$. Luego $(x\in N, y\in N)$ y $(y\in N, z\in N)$ lo cual es equivalente a $x,y,z \in N$. Esto implica $x \in N$, $z\in N$. Por definición de la relación, $x\sim_P z$. Luego $(x\sim_P y, y\sim_P z) \implies x\sim_P z$. <br>
>Verificadas las tres condiciones, $\sim_P$ es una relación de equivalencia.
>
>> Ahora viene la parte ingeniosa.
>
>3. Sea $\mathcal{R}$ el conjunto de todas las relaciones de equivalencia en un conjunto no vacío $A$, y $\mathcal{P}$ el conjunto de todas las particiones posibles de $A$. Sea $f: \mathcal{R} \to \mathcal{P}$ definida tal que a cada relación de equivalencia $\sim$ le asigna la partición $P_\sim = \{ [x] \ |\ x \in A\}$ de forma que $f(\sim)=P_\sim$. Sea $g: \mathcal{P} \to \mathcal{R}$ definida tal que a cada partición $P$ le asigna la relación $\sim_P$, donde $x \sim_P y \iff$ existe un $A_i \in P$ tal que $x \in A_i, y \in A_i$, de manera que $g(P)=\sim$. En el punto 1 se demostró que $f$ induce una partición para cada relación de equivalencia $\sim$ y en el punto 2 se demostró que $g$ induce una relación de equivalencia para cada partición $P$. Ahora: <br>
>Consideremos $g \circ f(\sim)$. En primer lugar, $f(\sim) = \{[x] \mid x \in A\} = P_\sim$. Ahora, $g \circ f(\sim) = g(P_\sim)$, lo que establece que $x \sim_{P_\sim} y \iff$ existe un $A_i \in P$ tal que $x \in A_i, y \in A_i$. Sabemos que para todo $x \in A$, $x \in [x]$. Como $P_\sim$ es una partición, $x$ pertenece a un único conjunto en $P_\sim$. Dado que $x \in A_i$ y $x \in [x]$, se tiene que $A_i = [x]$. Luego, $y \in [x]$. Por definición de clase de equivalencia, $y \in [x] \iff x \sim y$. Por lo tanto, $x \sim_{P_\sim} y \implies x \sim y$. Ahora, si $x \sim y$, entonces existe un $[x] \in P_\sim$ tal que $x \in [x] \land y \in [x]$. Luego, $x \sim y \implies x \sim_{P_\sim} y$. Por doble implicación, $x \sim_{P_\sim} y \iff x \sim y$. Es decir, $(g \circ f)(\sim) = \, \sim$.

Con esta intuición, podemos hablar de la relación de equivalencia determinada por una partición, o por la partición determinada por la relación de equivalencia. En la demostración anterior, se definió el concepto de **clase de equivalencia.** Como se demostró que el conjunto de todas las clases de equivalencia de $A$ define la partición de $A$ determinada por una cierta relación de equivalencia, ahora podemos afirmar:

>[!definicion] Definición
>Sea $A$ un conjunto no vacío con $x \in A$ y con una relación de equivalencia $\sim$. Luego, la clase de equivalencia $[x]$ de $\sim$ es el miembro de la partición $P_\sim$ determinada por $\sim$ que incluye a $x$. Es decir: <br>
> $[x]\coloneqq \{y\in A |\ x \sim y \}$ de manera que $P_\sim=\{[x]\ |\ x \in A \}$.

Para aterrizar esto, podemos pensar en la relación de equivalencia $≡\ (mod\ 5)$. Como $0≡5\ (mod\ 5)$, $0≡10\ (mod\ 5)$, $0≡15\ (mod\ 5)$, etc., podemos establecer: $[0]= \{0,5,10,15,...\}$. Además, $0≡5k\ (mod\ 5)$ , $1≡5k+1\ (mod\ 5)$, $2≡5k+2\ (mod\ 5)$, $3≡5k+3\ (mod\ 5)$ y $4≡5k+4\ (mod\ 5)$ para todo $k\in \mathbb{Z}$, y todo número entero se puede escribir como una de estas cinco formas. Luego todo entero pertenece a $[0],[1],[2],[3]$ o $[4]$. Con esto concluimos que la partición determinada por $≡\ (mod\ 5)$ es $\{ [0],[1],[2],[3],[4] \}$.



