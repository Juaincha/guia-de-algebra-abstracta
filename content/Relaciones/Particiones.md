Un concepto muy relevante para las relaciones de equivalencia son las particiones. Se definen de la siguiente forma:

>[!definicion] Definición
>Una **partición** $P$ de un conjunto $A$ es una colección de subconjuntos no vacíos de $A$ donde cada elemento de $A$ pertenece a un único miembro de $P$.

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
>- _Sentido $\Leftarrow$_: Sea $P$ partición de $A$. Luego, como la definición dice que $P$ es una colección de subconjuntos no vacíos de $A$, obtenemos el punto 1. Como cada elemento de $A$ pertenece a algún miembro de $P$, la unión de todos los miembros de $P$ incluye a todos los elementos de $A$. Esto es, $A \subseteq \bigcup\limits_{S \in P} S$. Como la definición exige que cada miembro $S$ en $P$ sea subconjunto de $A$, obtenemos $\bigcup\limits_{S \in P} S \subseteq A$. Por ambas relaciones, obtenemos $\bigcup\limits_{S \in P} S = A$.
>
>Por último, como cada elemento de $A$ pertenece a un único miembro de $P$, no existe ningún $a \in A$ tal que existan $M,N \in P$ distintos tal que $a \in M$ y $a \in N$. Por las leyes de negación, esto es lo mismo que decir que para todo $a \in A$ y para todo $M,N \in P$ distintos no se cumple $a \in M$ y $a \in N$. Esto es,  para todo $a \in A$ y para todo $M,N \in P$ distintos tenemos $a \notin M \cap N$. Como $M$ y $N$ son subconjuntos de $A$, decir que para todo $a \in A$ $a \notin M \cap N$ es equivalente a $M \cap N = \emptyset$. Luego para todo $M,N \in P$ $M \neq N \implies M \cap N = \emptyset$. Luego si $P$ es partición de $A$, se cumplen las tres propiedades.
>
>- _Sentido $\Rightarrow$:_ Sean las tres propiedades verdaderas. Por la propiedad 2, $\bigcup\limits_{S \in P} S = A$. Con la notación de constructor de conjuntos, podemos escribir $\bigcup\limits_{S \in P} S$ como $\{ a \ |\ a \in S$ para algún $S \in P \}$. Además, podemos escribir $A$ como $\{a\ |\ a \in A \}$. Luego $\{ a \ |\ a \in S$ para algún $S \in P \}=\{a\ |\ a \in A \}$. Por propiedades de los constructores de conjuntos, si la primera condición es idéntica, entonces la segunda es equivalente. Por lo tanto, $a \in S$  para algún $S \in P$ es equivalente a $a \in A$. Particularmente, si $a \in S_0$, luego $a \in A$. Es decir, $S_0\subseteq A$. Como aplica para cada $a \in S$ en cualquier $S \in P$, para todo $S \in P$ $S\subseteq A$. En conjunto con la primera propiedad, $\emptyset \notin P$, recuperamos la primera parte de la definición: "una colección de subconjuntos no vacíos de $A$". 
>
>Para recuperar la parte de "cada elemento de $A$ pertenece a un único miembro de $P$", se utiliza la propiedad 3. Esta dice que para todo $M,N \in P$, $M \neq N \implies M \cap N = \emptyset$. En lenguaje natural, esto significa que dos subconjuntos distintos de $A$ tienen intersección vacía, lo cual es equivalente a que no comparten elementos en común. Como la unión de todos los miembros de $P$ es igual a $A$, cada elemento de $A$ está en algún miembro de $P.$ Como ningún par de miembros de $P$ comparte elementos, cada elemento de $A$ está en un único miembro de $P$. Con esto se recupera la definición completa.
>
>Habiendo verificado las dos direcciones, la definición de partición se cumple si y solo si se verifican las tres propiedades.

Te preguntarás, ¿qué relevancia tienen las particiones en un artículo de relaciones de equivalencia? Bueno, ahora viene la parte interesante. Este es el teorema de correspondencia.

>[!teorema] Teorema
>Sea $A$ un conjunto no vacío. Luego:
>1. Toda relación de equivalencia $\sim$ en $A$ determina una partición única $P_{\sim}$ de $A$.
>2. Toda partición $P$ de $A$ determina una relación de equivalencia única $\sim_P$ en $A$.

Este teorema tiene muchas capas, ya que hay que demostrar que una relación de equivalencia determina una partición en el mismo conjunto y además demostrar que esta es única, para luego hacer lo mismo en sentido contrario. Pero ingeniosamente, se encontró una forma de verificar la unicidad de ambos puntos a la vez.

>[!demostracion] Demostración
> 1. Sea $A$ un conjunto no vacío, y $\sim$ una relación de equivalencia en el conjunto. Definimos la **clase de equivalencia** de $x$ como $[x]\coloneqq \{y\in A |\ x \sim y \}$. Sea $P_\sim=\{[x]\ |\ x \in A \}$.
>
> 1.1. Para todo $x \in A$, $[x] \neq \emptyset$, ya que como $\sim$ es relación de equivalencia, $x \sim x$ y por definición de $[x]$, $x \in [x]$ y por lo tanto $[x]$ no es vacío.
>
> 1.2. Para todo $x \in A$, $x \in [x]$. Luego $x \in A \implies x \in [x]$, lo que es equivalente a $A \subseteq [x]$. Como se cumple para cada $[x] \in P_\sim$, $A \subseteq \bigcup\limits_{[x] \in P_\sim} [x]$. Además para cada $[x] \in P_\sim$, como la primera condición del constructor de conjuntos exige $y \in A$, tenemos $[x] \subseteq A$. Como aplica para cada $[x]$, $\bigcup\limits_{[x] \in P_\sim} [x] \subseteq A$. Por ambas propiedades, $\bigcup\limits_{[x] \in P_\sim} [x] = A$.
>
> 1.3. Sean $M,N \in P_\sim$. Luego pueden escribirse como $M=[m]$, $N=[n]$ para algunos $m,n \in A$. Supongamos $a \in [m]$ y $a \in [n]$. Luego por definición, $m \sim a$ y $n \sim a$. Por simetría y transitividad, $m \sim n$ y $n \sim m$. Ahora, $[n]= \{ k \in A \ | \ k \sim n\}$. Como $k\sim n$ y $n \sim m$, por transitividad $k \sim m$. Luego para todo $k \in A$, $k \sim n \iff k \sim m$. Luego $[m]=[n]$. es decir, si existe un $a \in A$ tal que $a \in [m]$ y $a \in [n]$, luego $[m]=[n]$. Por ley del contrarrecíproco, si  $[m]=[n]$, luego no existe un $a \in A$ tal que $a \in [m]$ y $a \in [n]$. Es decir, $[m] \cap [n] = \emptyset$. Sustituyendo con $M$ y $N$: para todo $M,N \in P_\sim$,  $M \neq N \implies  [m] \cap [n] = \emptyset$.
>
> Verificadas las tres condiciones, $P_\sim$ es una partición.
>
> 2. Sea $A$ un conjunto no vacío, y $P=\{A_1,A_2,...A_n\}$ una partición del conjunto. Definimos: para todo $x,y \in A$ $x\sim_P y \iff$ existe un $A_i \in P$ tal que $x \in A_i, y \in A_i$.
>
> 2.1. Como $P$ es partición, para todo $x \in A$ existe un $A_i \in P$ tal que $x \in A_i$. Por idempotencia, $x \in A_i$ y $x \in A_i$. Por definición de la relación, $x\sim_P x$.
>
> 2.2. Sean $x,y \in A$. Dejemos que $x\sim_P y$ sea cierto. Luego existe un $A_i \in P$ tal que $x \in A_i$,$y \in A_i$. Por conmutatividad, $y \in A_i$,$x \in A_i$. Por definición de la relación,  $y\sim_P x$. Luego  $x\sim_P y \implies  y\sim_P x$.
>
> 2.3. Sean $x,y,z \in A$. Dejemos que $x\sim_P y$ sea cierto y que $y\sim_P z$ sea cierto. Luego existen $A_i,A_j \in P$ tal que $(x\in A_i, y\in A_i)$ y $(y\in A_j, z\in A_j)$. Como $P$ es partición, cada $k\in A$ pertenece a un único $A_l \in P$. Como $y\in A_i, y\in A_j$ entonces $A_i = A_j$. Llamemos $A_i=A_j=N$. Luego $(x\in N, y\in N)$ y $(y\in N, z\in N)$ lo cual es equivalente a $x,y,z \in N$. Esto implica $x \in N$, $z\in N$. Por definición de la relación, $x\sim_P z$. Luego $(x\sim_P y, y\sim_P z) \implies x\sim_P z$.
>
> Verificadas las tres condiciones, $\sim_P$ es una relación de equivalencia.
>
>> Ahora viene la parte ingeniosa.
>
>3. Sea $\mathcal{R}$ el conjunto de todas las relaciones de equivalencia en un conjunto no vacío $A$, y $\mathcal{P}$ el conjunto de todas las particiones posibles de $A$. Sea $f: \mathcal{R} \to \mathcal{P}$ definida tal que a cada relación de equivalencia $\sim$ le asigna la partición $P_\sim = \{ [x] \ |\ x \in A\}$ de forma que $f(\sim)=P_\sim$. Sea $g: \mathcal{P} \to \mathcal{R}$ definida tal que a cada partición $P$ le asigna la relación $\sim_P$, donde $x \sim_P y \iff$ existe un $A_i \in P$ tal que $x \in A_i, y \in A_i$, de manera que $g(P)=\: \sim$. En el punto 1 se demostró que $f$ induce una partición para cada relación de equivalencia $\sim$ y en el punto 2 se demostró que $g$ induce una relación de equivalencia para cada partición $P$. Ahora:
>
> Consideremos $g \circ f(\sim)$. En primer lugar, $f(\sim) = \{[x] \mid x \in A\} = P_\sim$. Ahora, $g \circ f(\sim) = g(P_\sim)$, lo que establece que $x \sim_{P_\sim} y \iff$ existe un $A_i \in P$ tal que $x \in A_i, y \in A_i$. Sabemos que para todo $x \in A$, $x \in [x]$. Como $P_\sim$ es una partición, $x$ pertenece a un único conjunto en $P_\sim$. Dado que $x \in A_i$ y $x \in [x]$, se tiene que $A_i = [x]$. Luego, $y \in [x]$. Por definición de clase de equivalencia, $y \in [x] \iff x \sim y$. Por lo tanto, $x \sim_{P_\sim} y \implies x \sim y$. Ahora, si $x \sim y$, entonces existe un $[x] \in P_\sim$ tal que $x \in [x], y \in [x]$. Luego, $x \sim y \implies x \sim_{P_\sim} y$. Por doble implicación, $x \sim_{P_\sim} y \iff x \sim y$. Es decir, $g \circ f(\sim) = \, \sim$.
>
> Ahora consideremos $f \circ g(P)$. Tenemos que $g(P)= \: \sim_P$ de forma que $x \sim_P y \iff$ existe un $A_i \in P$ tal que $x \in A_i, y \in A_i$. Luego, $f(\sim_P)=\{{[x]_\sim}_P \mid x \in A\}$, donde ${[x]_\sim}_P = \{y \in A \mid x \sim_P y \}$. Como $x \sim_P y \iff x \in A_i, y \in A_i$, luego ${[x]_\sim}_P = \{y \in A \mid x \in A_i, y \in A_i \}$, por lo que $\{y \in A \mid x \in A_i, y \in A_i \}=\{y \in A \mid y \in A_i \}$ donde $x \in A_i$. Luego tenemos ${[x]_\sim}_P=\{y \in A \mid y \in A_i \}=A_i$, donde $x \in A_i$. Luego $\{{[x]_\sim}_P \mid x \in A\}=\{A_i \mid x \in A\}=\{A_1,A_2,... A_n\}=P$ y por lo tanto $f \circ g(P)=P$.
>
> Como $f: \mathcal{R} \to \mathcal{P}$, $g: \mathcal{P} \to \mathcal{R}$ y tenemos $g \circ f(\sim) = \, \sim$ y $f \circ g(P)=P$, luego existe una biyección entre $\mathcal{R}$ y $\mathcal{P}$, por lo que existe una correspondencia 1 a 1 entre relaciones de equivalencia y particiones. Por lo tanto, cada relación de equivalencia determina una única partición y cada partición determina una única relación de equivalencia.



Con esta intuición, podemos hablar de la relación de equivalencia determinada por una partición, o por la partición determinada por la relación de equivalencia. En la demostración anterior, se definió el concepto de **clase de equivalencia.** Como se demostró que el conjunto de todas las clases de equivalencia de $A$ define la partición de $A$ determinada por una cierta relación de equivalencia, ahora podemos afirmar:

>[!definicion] Definición
>Sea $A$ un conjunto no vacío con $x \in A$ y con una relación de equivalencia $\sim$. Luego, la clase de equivalencia $[x]$ de $\sim$ es el miembro de la partición $P_\sim$ determinada por $\sim$ que incluye a $x$. Es decir:
>
> $[x]\coloneqq \{y\in A |\ x \sim y \}$ de manera que $P_\sim=\{[x]\ |\ x \in A \}$.

Para aterrizar esto, podemos pensar en la relación de equivalencia $≡\ (mod\ 5)$. Como $0≡5\ (mod\ 5)$, $0≡10\ (mod\ 5)$, $0≡15\ (mod\ 5)$, etc., podemos establecer: $[0]= \{0,5,10,15,...\}$. Además, $0≡5k\ (mod\ 5)$ , $1≡5k+1\ (mod\ 5)$, $2≡5k+2\ (mod\ 5)$, $3≡5k+3\ (mod\ 5)$ y $4≡5k+4\ (mod\ 5)$ para todo $k\in \mathbb{Z}$, y todo número entero se puede escribir como una de estas cinco formas. Luego todo entero pertenece a $[0],[1],[2],[3]$ o $[4]$. Con esto concluimos que la partición determinada por $≡\ (mod\ 5)$ es $\{ [0],[1],[2],[3],[4] \}$.

Por último, es relevante hablar del conjunto cociente.

>[!definicion] Definición
> Sea $A$ un conjunto no vacío y $\sim$ una relación de equivalencia en el conjunto. El conjunto cociente $A/\sim$ está dado por: $A/\sim \ \coloneqq \{ [x]\ |\ x \in A \}$

Luego $A/\sim$ es la partición de $A$ que corresponde a $\sim$. En el ejemplo anterior, $\mathbb{Z} /≡_5 \ = \{ [0],[1],[2],[3],[4] \}$, donde $≡_n$ significa $≡ \ (mod \ n)$.

