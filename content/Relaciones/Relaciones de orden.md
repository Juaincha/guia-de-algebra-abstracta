A diferencia de la relación de equivalencia, tenemos múltiples relaciones de orden. En general, se entiende que una relación de orden $\preceq$ relaciona dos elementos $a$ y $b$, de forma que $a \preceq b$ significa que $a$ precede a $b$, y que $b$ sucede a $a$. Por ejemplo, si establecemos que Max nació primero, Martina después y Nicolás último y los tres son hermanos, luego podemos establecer que Nicolás precede a Martina, Martina precede a Max y Nicolás precede a Max. Simbólicamente, Nicolás $\preceq$ Martina, Martina $\preceq$ Max y Nicolás $\preceq$ Max. Formalizando esta idea:

>[!definicion] Definicióń
> Un orden parcial en un conjunto $A$ es una relación $\preceq$ que satisface:
> 1. Para todo $a \in A$, $a\preceq a$. Esta propiedad se conoce como **reflexividad.**
> 2. Para todo $a,b \in A$, $(a \preceq b$ y $b \preceq a) \implies a=b$. Esta propiedad se llama **antisimetría.**
> 3. Para todo $a,b,c \in A$, $(a \preceq b$ y $b \preceq c) \implies a \preceq c$. Esto es **transitividad.**

La idea de que el orden sea parcial es que no necesariamente todos los elementos son comparables. Manteniendo el ejemplo de los hermanos, si introducimos a Otto, que no es hermano del resto porque es un perro, no podemos establecer Otto $\preceq$ Max o Max $\preceq$ Otto. Aún así, todos viven en el conjunto de seres vivos.

Los órdenes parciales viven en amplias ramas de las matemáticas. El más evidente es la relación "menor o igual" $\leq$. También la relación "subconjunto" $\subseteq$, la relación "subespacio vectorial" $\leq$ y la relación "divide a" $|$. Te invito a comprobar que las tres propiedades se mantienen para todos estos casos. La demostración se encuentra a continuación.


>[!general] Menor o igual $\leq$
>
>>[!teorema] Teorema
>>La relación menor o igual $\leq$ en $\mathbb{Z}$ es una relación de orden parcial.
>
>>[!demostracion] Demostración
>>Definimos $a \leq b \iff$ existe un $k \in \mathbb{N}_0$ tal que $a+k=b$.
>>
>> 1. Sea $a\in \mathbb{Z}$. Luego, con $k=0$, existe un $k \in \mathbb{N}_0$ tal que $a+k=a$. Por lo tanto $a\leq a$.
>>
>>2. Sean $a,b\in \mathbb{Z}$. Dejemos que $a\leq b$ y $b\leq a$. Luego, existen $k_1,k_2 \in \mathbb{N}_0$ tal que $a+k_1=b$ y $b+k_2=a$. Sustituyendo $a$ de la segunda ecuación en la primera, obtenemos $b+k_2+k_1=b$, $k_1+k_2=0$. Como $k_1,k_2 \in \mathbb{N}_0$, la única forma de que su suma sea 0 es que $k_1=k_2=0$. Sustituyendo $k_1=0$ en la primera ecuación, obtenemos $a=b$. Por lo tanto $(a\leq b$ y $b\leq a) \implies a=b$.
>>
>> 3. Sean $a,b,c\in \mathbb{Z}$. Dejemos que $a\leq b$ y $b\leq c$. Luego, existen $k_1,k_2 \in \mathbb{N}_0$ tal que $a+k_1=b$ y $b+k_2=c$. Sustituyendo $b$ de la primera ecuación en la segunda, obtenemos $a+k_1+k_2=c$. Como  $k_1,k_2 \in \mathbb{N}_0$, $k_3=k_1+k_2 \in \mathbb{N}_0$. Luego tenemos $a+k_3=c$ con $k_3 \in \mathbb{N}_0$. Por definición, $a \leq c$. Por lo tanto $(a\leq b$ y $b\leq c) \implies a \leq c$.
>>
>> Al cumplir las tres propiedaddes definitorias, $leq$ es una relación de orden parcial.


>[!general] Subconjunto $\subseteq$
>
>>[!teorema] Teorema
>>La relación subconjunto $\subseteq$ en el el conjunto de subconjuntos de $X$, $\mathcal{P}(X)$, es una relación de orden parcial.
>
>>[!demostracion] Demostración
>> Definimos $P \subseteq Q$ como $P \subseteq Q \iff$ para todo $x \in X$, $x \in P \implies x \in Q$.
>>
>>1. Sea $P \in \mathcal{P}(X)$. Como para todo $x \in X$, $x \in P \implies x \in P$. Luego $P \subseteq P$.
>>
>>2. Sean $P,Q \in \mathcal{P}(X)$. Dejemos que $P \subseteq Q$ y $Q \subseteq P$. Luego, para todo $x \in X$, $x \in P \implies x \in Q$ y $x \in Q \implies x \in P$. Es decir, para todo $x \in X$, $x \in P \iff x \in Q$. Luego $P=Q$. Por lo tanto $(P \subseteq Q$ y $Q \subseteq P) \implies P=Q$.
>>
>> 3. Sean $P,Q,R \in \mathcal{P}(X)$. Dejemos que $P \subseteq Q$ y $Q \subseteq R$. Luego, para todo $x \in X$, $x \in P \implies x \in Q$ y $x \in Q \implies x \in R$. Por propiedades de la implicancia, para todo $x \in X$, $x \in P \implies x \in R$. Por definición, $P \subseteq R$. Por lo tanto $(P \subseteq Q$ y $Q \subseteq R) \implies P \subseteq R$.
>> 
>> Reunidas las tres condicicones, $\subseteq$ es una relación de orden parcial.
