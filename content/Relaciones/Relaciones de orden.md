Las relaciones de orden permiten definir un sentido de orden en una estructura. Antes de la relación de orden, no se sabe bien qué va antes de qué. En general, se entiende que una relación de orden $\preceq$ relaciona dos elementos $a$ y $b$, de forma que $a \preceq b$ significa que $a$ precede a $b$, y que $b$ sucede a $a$. Por ejemplo, si establecemos que Max nació primero, Martina después y Nicolás último y los tres son hermanos, luego podemos establecer que Nicolás precede a Martina, Martina precede a Max y Nicolás precede a Max. Simbólicamente, Nicolás $\preceq$ Martina, Martina $\preceq$ Max y Nicolás $\preceq$ Max. Formalizando esta idea:

>[!definicion] Definicióń
> Un orden parcial en un conjunto $A$ es una relación $\preceq$ que satisface:
> 1. Para todo $a \in A$, $a\preceq a$. Esta propiedad se conoce como **reflexividad**.
> 2. Para todo $a,b \in A$, $(a \preceq b$ y $b \preceq a) \implies a=b$. Esta propiedad se llama **antisimetría**.
> 3. Para todo $a,b,c \in A$, $(a \preceq b$ y $b \preceq c) \implies a \preceq c$. Esto es **transitividad**.

La idea de que el orden sea parcial significa que no necesariamente todos los elementos son comparables. Manteniendo el ejemplo de la familia, si introducimos a Otto, que no es hermano del resto porque es un perro, no podemos establecer Otto $\preceq$ Max o Max $\preceq$ Otto. Aun así, Otto y Max viven en la misma familia.

Los órdenes parciales viven en amplias ramas de las matemáticas. Algunas de las más comunes son la relación "menor o igual" $\leq$, la relación "subconjunto" $\subseteq$ y la relación "divide a" $|$. Te invito a demostrar que son efectivamente relaciones de orden parcial, y la demostración está a continuación. 

>[!general] Menor o igual $\leq$
>
>>[!teorema] Teorema
>>La relación menor o igual $\leq$ en $\mathbb{Z}$ es una relación de orden parcial.
>
>>[!demostracion] Demostración
>>Definimos $a \leq b \iff$ existe un $k \in \mathbb{N}_0$ tal que $a+k=b$.
>>
>> 1. Sea $a\in \mathbb{Z}$. Luego, con $k=0$, existe un $k \in \mathbb{N}_0$ tal que $a+k=a$. Por lo tanto para todo $a\in \mathbb{Z}$, $a\leq a$.
>>
>>2. Sean $a,b\in \mathbb{Z}$. Dejemos que $a\leq b$ y $b\leq a$. Luego, existen $k_1,k_2 \in \mathbb{N}_0$ tales que $a+k_1=b$ y $b+k_2=a$. Sustituyendo $a$ de la segunda ecuación en la primera, obtenemos $b+k_2+k_1=b$, $k_1+k_2=0$. Como $k_1,k_2 \in \mathbb{N}_0$, la única forma de que su suma sea 0 es que $k_1=k_2=0$. Sustituyendo $k_1=0$ en la primera ecuación, obtenemos $a=b$. Por lo tanto para todo $a,b\in \mathbb{Z}$, $(a\leq b$ y $b\leq a) \implies a=b$.
>>
>> 3. Sean $a,b,c\in \mathbb{Z}$. Dejemos que $a\leq b$ y $b\leq c$. Luego, existen $k_1,k_2 \in \mathbb{N}_0$ tales que $a+k_1=b$ y $b+k_2=c$. Sustituyendo $b$ de la primera ecuación en la segunda, obtenemos $a+k_1+k_2=c$. Como $k_1,k_2 \in \mathbb{N}_0$, $k_3=k_1+k_2 \in \mathbb{N}_0$. Luego tenemos $a+k_3=c$ con $k_3 \in \mathbb{N}_0$. Por definición, $a \leq c$. Por lo tanto para todo $a,b,c\in \mathbb{Z}$, $(a\leq b$ y $b\leq c) \implies a \leq c$.
>>
>> Al cumplir las tres propiedades definitorias, $\leq$ es una relación de orden parcial en $\mathbb{Z}$.


>[!general] Subconjunto $\subseteq$
>
>>[!teorema] Teorema
>>La relación subconjunto $\subseteq$ en el conjunto de subconjuntos de $X$, $\mathcal{P}(X)$, es una relación de orden parcial.
>
>>[!demostracion] Demostración
>> Definimos $P \subseteq Q$ como $P \subseteq Q \iff$ para todo $x \in X$ se cumple $x \in P \implies x \in Q$.
>>
>>1. Sea $P \in \mathcal{P}(X)$. Como para todo $x \in X$ se cumple $x \in P \implies x \in P$, obtenemos para todo $P \in \mathcal{P}(X)$, $P \subseteq P$.
>>
>>2. Sean $P,Q \in \mathcal{P}(X)$. Dejemos que $P \subseteq Q$ y $Q \subseteq P$. Luego, para todo $x \in X$, $x \in P \implies x \in Q$ y $x \in Q \implies x \in P$. Es decir, para todo $x \in X$ se cumple $x \in P \iff x \in Q$. Luego $P=Q$. Por lo tanto para todo $P,Q \in \mathcal{P}(X)$, $(P \subseteq Q$ y $Q \subseteq P) \implies P=Q$.
>>
>> 3. Sean $P,Q,R \in \mathcal{P}(X)$. Dejemos que $P \subseteq Q$ y $Q \subseteq R$. Luego, para todo $x \in X$, $x \in P \implies x \in Q$ y $x \in Q \implies x \in R$. Por transitividad de la implicación lógica, para todo $x \in X$, $x \in P \implies x \in R$. Por definición, $P \subseteq R$. Por lo tanto para todo $P,Q \in \mathcal{P}(X)$, $(P \subseteq Q$ y $Q \subseteq R) \implies P \subseteq R$.
>> 
>> Reunidas las tres condicicones, $\subseteq$ es una relación de orden parcial en $\mathcal{P}(X)$.

>[!general] Divide a $|$
>
>>[!teorema] Teorema
>>La relación divide a $|$ en $\mathbb{N}$ es una relación de orden parcial.
>
>>[!demostracion] Demostración
>> Definimos $a|b$ como $a|b \iff$ existe un $k\in \mathbb{N}$ tal que $b=ak$.
>>
>>1. Sea $a \in \mathbb{N}$. Como $a=1a$ y $1\in \mathbb{N}$, existe un $k\in \mathbb{N}$ tal que $b=ak$, con $k=1$. Luego para todo $a\in \mathbb{N}$, $a|a$.
>>
>> 2. Sean $a,b \in \mathbb{N}$. Sea $a|b$ y $b|a$. Luego por definición, existen $k_1,k_2 \in \mathbb{N}$ tal que $b=ak_1$ y $a=bk_2$. Sustituyendo la segunda en la primera, obtenemos $b=bk_1k_2$. Como $b \in \mathbb{N}$, $b$ no es cero y por lo tanto podemos dividir a ambos lados, obteniendo $k_1k_2=1$, es decir $k_1=\frac{1}{k_2}$. Como $k_1 \in \mathbb{N}$, necesariamente $\frac{1}{k_2} \in \mathbb{N}$. Como el $k_2 \in \mathbb{N}$, el único valor para $k_2$ tal que la fracción sea un número natural es $k_2=1$, de lo cual obtenemos $k_1=1$. Volviendo a la ecuación original, obtenemos $a=b$. De este modo, para todo $a,b \in \mathbb{N}$, ($a|b$ y $b|a$) $\implies a=b$.
>>
>> 3. Sean $a,b,c \in \mathbb{N}$. Sea $a|b$ y $b|c$. Por definición, existen $k_1,k_2 \in \mathbb{N}$ tal que $b=ak_1$ y $c=bk_2$. Sustituyendo la primera en la segunda, obtenemos $c=ak_1k_2$. Como $k_1,k_2 \in \mathbb{N}$ y el producto de dos números naturales es natural, podemos llamar $k_3=k_1k_2$ con $k_3 \in \mathbb{N}$. De este modo, $c=ak_3$. Por definición, $a|c$. Por lo tanto para todo $a,b,c \in \mathbb{N}$, ($a|b$ y $b|c$) $\implies a|c$.
>> 
>> Reunidas las tres condiciones, $|$ es una relación de orden parcial en $\mathbb{N}$.

