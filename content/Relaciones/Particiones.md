Un concepto muy relevante para las relaciones de equivalencia son las particiones. Se definen de la siguiente forma:

>[!definicion] Definición
>Una **partición** $P$ de un conjunto $A$ es una colección de subconjuntos no vacíos de $A$ donde cada elemento de $A$ pertenece a un único miembro de $P$.

De esta forma, una partición subdivide a $A$ en conjuntos disjuntos. Por ejemplo, una partición de $A= \{a,b,c,d\}$ es $P_1=\{\{a,b\},\{c,d\} \}$. Otra partición posible de $A$ es $P_2=\{\{a\},\{b\},\{c\},\{d\} \}$. Un último ejemplo es $P_3 = \{\{a,b,c\},\{d\}\}$.

![[particiones-tres-ejemplos.svg|520]]

*El conjunto $A$ y tres de sus particiones.*

Podemos reducir esta definición, escrita en palabras, a tres condiciones:

>[!teorema] Teorema
>Un conjunto $P$ es partición de un conjunto $A$ si y solo si:
>1. $\emptyset \notin P$
>2. $\bigcup\limits_{S \in P} S = A$
>3. Para todo $M,N \in P$, $M \neq N \implies M \cap N = \emptyset$

El punto 2 significa que la unión de todos los conjuntos que hay dentro de $P$ es igual a $A$.

![[particiones-no-ejemplos.svg|640]]

*Colecciones de subconjuntos de $A=\{a,b,c,d\}$ que **no** son particiones: la primera contiene a $\emptyset$, la segunda deja a $d$ fuera de todos sus miembros y en la tercera $b$ está en dos miembros.*

>[!demostracion] Demostración
>- _Sentido $\Rightarrow$_: Sea $P$ partición de $A$. Luego, como la definición dice que $P$ es una colección de subconjuntos no vacíos de $A$, obtenemos el punto 1. Como cada elemento de $A$ pertenece a algún miembro de $P$, la unión de todos los miembros de $P$ incluye a todos los elementos de $A$. Esto es, $A \subseteq \bigcup\limits_{S \in P} S$. Como la definición exige que cada miembro $S$ en $P$ sea subconjunto de $A$, obtenemos $\bigcup\limits_{S \in P} S \subseteq A$. Por ambas relaciones, obtenemos $\bigcup\limits_{S \in P} S = A$.
>
>Por último, como cada elemento de $A$ pertenece a un único miembro de $P$, no existe ningún $a \in A$ tal que existan $M,N \in P$ distintos tales que $a \in M$ y $a \in N$. Por las leyes de negación, esto es lo mismo que decir que para todo $a \in A$ y para todo $M,N \in P$ distintos no se cumple $a \in M$ y $a \in N$. Esto es, para todo $a \in A$ y para todo $M,N \in P$ distintos tenemos $a \notin M \cap N$. Como $M$ y $N$ son subconjuntos de $A$, decir que para todo $a \in A$, $a \notin M \cap N$ es equivalente a $M \cap N = \emptyset$. Luego para todo $M,N \in P$, $M \neq N \implies M \cap N = \emptyset$. Por lo tanto, si $P$ es partición de $A$, se cumplen las tres propiedades.
>
>- _Sentido $\Leftarrow$_: Supongamos que se cumplen las tres propiedades. Por la propiedad 2, $\bigcup\limits_{S \in P} S = A$. Sea $S \in P$ y sea $a \in S$. Entonces $a$ pertenece a la unión de todos los miembros de $P$, que es igual a $A$. Es decir, $a \in A$. Como esto aplica para todo $a \in S$, tenemos $a \in S \implies a \in A$, y por definición de subconjunto, $S \subseteq A$. Como $S$ era un miembro cualquiera de $P$, para todo $S \in P$, $S \subseteq A$. En conjunto con la primera propiedad, $\emptyset \notin P$, recuperamos la primera parte de la definición: "una colección de subconjuntos no vacíos de $A$". 
>
>Para recuperar la parte de "cada elemento de $A$ pertenece a un único miembro de $P$", se utiliza la propiedad 3. Esta dice que para todo $M,N \in P$, $M \neq N \implies M \cap N = \emptyset$. En lenguaje natural, esto significa que dos miembros distintos de $P$ tienen intersección vacía, es decir, no tienen elementos en común. Como la unión de todos los miembros de $P$ es igual a $A$, cada elemento de $A$ está en algún miembro de $P$. Como ningún par de miembros de $P$ comparte elementos, cada elemento de $A$ está en un único miembro de $P$. Con esto se recupera la definición completa.
>
>Habiendo verificado las dos direcciones, la definición de partición se cumple si y solo si se verifican las tres propiedades.

Te preguntarás, ¿qué relevancia tienen las particiones en un artículo de relaciones de equivalencia? Bueno, ahora viene la parte interesante. Este es el teorema de correspondencia.

>[!teorema] Teorema
>Sea $A$ un conjunto no vacío. Luego:
>1. Toda relación de equivalencia $\sim$ en $A$ determina una partición única $P_{\sim}$ de $A$.
>2. Toda partición $P$ de $A$ determina una relación de equivalencia única $\sim_P$ en $A$.

![[particiones-correspondencia.svg|620]]

*Teorema de correspondencia en $A=\{1,2,\dots,9\}$.*

Este teorema tiene muchas capas, ya que hay que demostrar que una relación de equivalencia determina una partición en el mismo conjunto y además demostrar que esta es única, para luego hacer lo mismo en sentido contrario. Pero ingeniosamente, se encontró una forma de verificar la unicidad de ambos puntos a la vez.

>[!demostracion] Demostración
> 1. Sea $A$ un conjunto no vacío y $\sim$ una relación de equivalencia en el conjunto. Definimos la **clase de equivalencia** de $x$ como $[x]\coloneqq \{y\in A \mid x \sim y \}$. Sea $P_\sim=\{[x] \mid x \in A \}$.
>
> 1.1. Para todo $x \in A$, $[x] \neq \emptyset$, ya que, como $\sim$ es reflexiva, $x \sim x$. Por definición de $[x]$, esto significa que $x \in [x]$, y por lo tanto $[x]$ no es vacío.
>
> 1.2. Sea $x \in A$. Por 1.1, $x \in [x]$, y $[x] \in P_\sim$, así que $x$ pertenece a la unión de los miembros de $P_\sim$. Como esto vale para todo $x \in A$, $A \subseteq \bigcup\limits_{[x] \in P_\sim} [x]$. Además para cada $[x] \in P_\sim$, como la primera condición del constructor de conjuntos exige $y \in A$, tenemos $[x] \subseteq A$. Como aplica para cada $[x]$, $\bigcup\limits_{[x] \in P_\sim} [x] \subseteq A$. Por ambas inclusiones, $\bigcup\limits_{[x] \in P_\sim} [x] = A$.
>
> 1.3. Sean $M,N \in P_\sim$. Luego pueden escribirse como $M=[m]$, $N=[n]$ para algunos $m,n \in A$. Supongamos $a \in [m]$ y $a \in [n]$. Luego por definición, $m \sim a$ y $n \sim a$. Por simetría y transitividad, $m \sim n$ y $n \sim m$. Ahora, sea $k \in [n]$, es decir, $n \sim k$. Como $m \sim n$, por transitividad $m \sim k$, así que $k \in [m]$. Luego $[n] \subseteq [m]$ y, intercambiando los papeles de $m$ y $n$, $[m] \subseteq [n]$. Luego $[m]=[n]$. Es decir, si existe un $a \in A$ tal que $a \in [m]$ y $a \in [n]$, entonces $[m]=[n]$. Por ley del contrarrecíproco, si $[m] \neq [n]$, entonces no existe un $a \in A$ tal que $a \in [m]$ y $a \in [n]$. Es decir, $[m] \cap [n] = \emptyset$. Sustituyendo con $M$ y $N$: para todo $M,N \in P_\sim$, $M \neq N \implies M \cap N = \emptyset$.
>
> Verificadas las tres condiciones, $P_\sim$ es una partición.
>
> 2. Sea $A$ un conjunto no vacío y $P$ una partición del conjunto. Definimos: para todo $x,y \in A$, $x\sim_P y \iff$ existe un $A_i \in P$ tal que $x \in A_i, y \in A_i$.
>
> 2.1. Como $P$ es partición, para todo $x \in A$ existe un $A_i \in P$ tal que $x \in A_i$. Por idempotencia, $x \in A_i$ y $x \in A_i$. Por definición de la relación, $x\sim_P x$.
>
> 2.2. Sean $x,y \in A$. Supongamos que $x\sim_P y$. Luego existe un $A_i \in P$ tal que $x \in A_i$, $y \in A_i$. Por conmutatividad, $y \in A_i$, $x \in A_i$. Por definición de la relación, $y\sim_P x$. Luego $x\sim_P y \implies  y\sim_P x$.
>
> 2.3. Sean $x,y,z \in A$. Supongamos que $x\sim_P y$ y $y\sim_P z$. Luego existen $A_i,A_j \in P$ tales que $(x\in A_i, y\in A_i)$ y $(y\in A_j, z\in A_j)$. Como $P$ es partición, cada $k\in A$ pertenece a un único $A_l \in P$. Como $y\in A_i, y\in A_j$ entonces $A_i = A_j$. Llamemos $A_i=A_j=N$. Luego $(x\in N, y\in N)$ y $(y\in N, z\in N)$ lo cual es equivalente a $x,y,z \in N$. Esto implica $x \in N$, $z\in N$. Por definición de la relación, $x\sim_P z$. Luego $(x\sim_P y, y\sim_P z) \implies x\sim_P z$.
>
> Verificadas las tres condiciones, $\sim_P$ es una relación de equivalencia.
>
>> Ahora viene la parte ingeniosa.
>
>3. Sea $\mathcal{R}$ el conjunto de todas las relaciones de equivalencia en un conjunto no vacío $A$, y $\mathcal{P}$ el conjunto de todas las particiones posibles de $A$. Sea $f: \mathcal{R} \to \mathcal{P}$ definida tal que a cada relación de equivalencia $\sim$ le asigna la partición $P_\sim = \{ [x] \mid x \in A\}$ de forma que $f(\sim)=P_\sim$. Sea $g: \mathcal{P} \to \mathcal{R}$ definida tal que a cada partición $P$ le asigna la relación $\sim_P$, donde $x \sim_P y \iff$ existe un $A_i \in P$ tal que $x \in A_i, y \in A_i$, de manera que $g(P)=\sim_P$. En el punto 1 se demostró que $f(\sim)$ es efectivamente una partición, y en el punto 2, que $g(P)$ es efectivamente una relación de equivalencia. Es decir, $f$ y $g$ están bien definidas. Ahora:
>
> Consideremos $g \circ f(\sim)$. En primer lugar, $f(\sim) = \{[x] \mid x \in A\} = P_\sim$. Ahora, $g \circ f(\sim) = g(P_\sim)$, lo que establece que $x \sim_{P_\sim} y \iff$ existe un $A_i \in P_\sim$ tal que $x \in A_i, y \in A_i$. Supongamos que $x \sim_{P_\sim} y$, es decir, que existe un $A_i \in P_\sim$ tal que $x \in A_i, y \in A_i$. Sabemos que para todo $x \in A$, $x \in [x]$. Como $P_\sim$ es una partición, $x$ pertenece a un único conjunto en $P_\sim$. Dado que $x \in A_i$ y $x \in [x]$, se tiene que $A_i = [x]$. Luego, $y \in [x]$. Por definición de clase de equivalencia, $y \in [x] \iff x \sim y$. Por lo tanto, $x \sim_{P_\sim} y \implies x \sim y$. Recíprocamente, si $x \sim y$, entonces $y \in [x]$. Como también $x \in [x]$ y $[x] \in P_\sim$, por definición $x \sim_{P_\sim} y$. Luego, $x \sim y \implies x \sim_{P_\sim} y$. Por doble implicación, $x \sim_{P_\sim} y \iff x \sim y$. Es decir, $g \circ f(\sim) = \, \sim$.
>
> Ahora consideremos $f \circ g(P)$. Tenemos que $g(P)= \: \sim_P$ de forma que $x \sim_P y \iff$ existe un $A_i \in P$ tal que $x \in A_i, y \in A_i$. Luego, $f(\sim_P)=\{[x]_{\sim_P} \mid x \in A\}$, donde $[x]_{\sim_P} = \{y \in A \mid x \sim_P y \}$. Como $P$ es partición, $x$ pertenece a un único miembro de $P$, al que llamaremos $A_x$. Entonces $x \sim_P y \iff y \in A_x$ (por la unicidad de $A_x$), así que $[x]_{\sim_P} = \{y \in A \mid y \in A_x\} = A_x$. Luego $f(\sim_P)=\{A_x \mid x \in A\}$. Este conjunto es exactamente $P$: cada $A_x$ es un miembro de $P$ y, como cada miembro de $P$ es no vacío, contiene algún $x$ y es igual a $A_x$. Por lo tanto, $f \circ g(P)=P$.
>
> Como $g \circ f(\sim) = \, \sim$ para toda $\sim \in \mathcal{R}$ y $f \circ g(P)=P$ para toda $P \in \mathcal{P}$, $f$ es una biyección entre $\mathcal{R}$ y $\mathcal{P}$, con inversa $g$. Es decir, hay una correspondencia uno a uno entre relaciones de equivalencia y particiones. Por lo tanto, cada relación de equivalencia determina una única partición y cada partición determina una única relación de equivalencia.



Con esta intuición, podemos hablar de la relación de equivalencia determinada por una partición, o de la partición determinada por una relación de equivalencia. En la demostración anterior, se definió el concepto de **clase de equivalencia**. Como se demostró que el conjunto de todas las clases de equivalencia de $A$ define la partición de $A$ determinada por una cierta relación de equivalencia, ahora podemos afirmar:

>[!definicion] Definición
>Sean $A$ un conjunto no vacío, $\sim$ una relación de equivalencia en $A$ y $x \in A$. La clase de equivalencia $[x]$ de $x$ es el miembro de la partición $P_\sim$ determinada por $\sim$ que incluye a $x$. Es decir:
>
> $[x]\coloneqq \{y\in A \mid x \sim y \}$ de manera que $P_\sim=\{[x] \mid x \in A \}$.

Para aterrizar esto, podemos pensar en la relación de equivalencia $\equiv \pmod{5}$. Como $0 \equiv 5 \pmod{5}$, $0 \equiv 10 \pmod{5}$, $0 \equiv 15 \pmod{5}$, etc., podemos establecer: $[0]= \{\dots,-10,-5,0,5,10,15,\dots\}$. Además, $0 \equiv 5k \pmod{5}$, $1 \equiv 5k+1 \pmod{5}$, $2 \equiv 5k+2 \pmod{5}$, $3 \equiv 5k+3 \pmod{5}$ y $4 \equiv 5k+4 \pmod{5}$ para todo $k\in \mathbb{Z}$, y todo número entero se puede escribir de una de estas cinco formas. Luego todo entero pertenece a $[0],[1],[2],[3]$ o $[4]$. Con esto concluimos que la partición determinada por $\equiv \pmod{5}$ es $\{ [0],[1],[2],[3],[4] \}$.

Por último, es relevante hablar del conjunto cociente.

>[!definicion] Definición
> Sea $A$ un conjunto no vacío y $\sim$ una relación de equivalencia en el conjunto. El conjunto cociente $A/\sim$ está dado por: $A/\sim \ \coloneqq \{ [x] \mid x \in A \}$

Luego $A/\sim$ es la partición de $A$ que corresponde a $\sim$. En el ejemplo anterior, $\mathbb{Z} /\equiv_5 \ = \{ [0],[1],[2],[3],[4] \}$, donde $\equiv_n$ significa $\equiv \pmod{n}$.

![[particiones-modulo-5.svg|420]]

*El conjunto cociente $\mathbb{Z}/\equiv_5\ = \{[0],[1],[2],[3],[4]\}$.*
