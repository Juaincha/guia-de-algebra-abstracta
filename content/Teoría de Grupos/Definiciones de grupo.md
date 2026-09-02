> [!definicion] Definición
> Un grupo es un conjunto $G$ junto a una operación binaria $·$ en $G$ que satisface:
> 1.  Para todo $a,b \in G$ tenemos $a·b \in G$. Esta propiedad se conoce como **clausura.**
> 2. Para todo $a,b,c \in G$ se cumple$(a·b)·c=a·(b·c)$. Esta propiedad se llama **asociatividad.**
> 3. Existe un $e \in G$ para todo $a \in G$ tal que $e·a=a$. A $e$ se le conoce como **elemento neutro.**
> 4. Para todo $a \in G$ existe un $b \in G$ tal que $b·a=e$, donde $e$ está dado por el axioma anterior. $b$ se denota $a^{-1}$ y se conoce como **inverso.**

Una operación binaria es simplemente una operación que toma dos elementos y devuelve un tercero. Cuando el grupo es $G$ y la operación es ·, el grupo se denota $(G,·)$. Generalmente cuando el grupo es abstracto · se llama multiplicación o simplemente operación. Tomando esta definición, se desprenden varias propiedades. Es muy importante considerar que si $a=b$, entonces podemos aplicar la regla de sustitución ya que son exactamente el mismo objeto, y también podemos realizar la misma operación a ambos lados. Ahora, las propiedades fundamentales de los grupos son:

>[!general] Bilateralidad del inverso
>>[!teorema] Teorema
>> Para todo $a \in G$ existe un $a^{-1} \in G$ tal que $a^{-1}·a=a·a^{-1}=e$.
>
>>[!demostracion] Demostración
>>Por el axioma de **neutro,** existe un $e_1 \in G$ tal que para todo $a \in G$, $e_1·a=a$. Luego el axioma de **inverso** asegura que para todo $a \in G$ existe un $b\in G$ tal que $b·a=e_1$. Tengamos $(b·a)·b$, que existe por el axioma de **clausura.** Como $b·a=e_1$, sustituyendo obtenemos $(b·a)·b= e_1·b=b$. Por lo tanto $(b·a)·b=b$. Por el axioma de **inverso,** existe un $c \in G$ tal que $c·b=e_1$. Multiplicando a ambos lados de $(b·a)·b=b$ por $c$ por la izquierda, obtenemos $c·((b·a)·b)=c·b$. Por el axioma de **asociatividad,** $c·((b·a)·b)=(c·(b·a))·b=((c·b)·a)·b$. Como $c·b=e_1$, sustituyendo obtenemos $((c·b)·a)·b=(e_1·a)·b=a·b$, lo cual todo era igual a $c·b$. Luego, $a·b=c·b$. Como $c·b=e_1$, $a·b=e_1$. Además ya habíamos establecido que $b·a=e_1$. Por lo tanto existe un $e \in G$ tal que $a·b=b·a=e$.

>[!general] Bilateralidad del neutro
>>[!teorema] Teorema
>> Existe un $e \in G$ para todo $a \in G$ tal que $e·a=a·e=a$.
>
>>[!demostracion] Demostración
>> Sea $a \in G$. Por el axioma de **inverso,** existe un $b\in G$ tal que $b·a=e_1$, tal que según el axioma del **neutro,** $e_1 \in G$ existe y satisface $e_1·a=a$. Tengamos $a·e_1$. Sustituyendo $e_1=b·a$, $a·e_1=a·(b·a)$. Por axioma de **asociatividad,** $a·(b·a)=(a·b)·a$. Por el teorema de **bilateralidad del inverso,** $a·b=e_1$. Sustituyendo, $(a·b)·a=e_1·a=a$. Por transitividad, $a·e_1=a$. Además, por axioma del **neutro** $e_1·a=a$. Como $a\in G$ es arbitrario, existe un $e_1 \in G$ tal que para todo $a\in G$, $e_1·a=a·e_1=a$.

En la definición de grupo presentada anteriormente, se definió el inverso y el nuetro lateralmente. Acabamos de mostrar que con esa definición se puede demostrar la bilateralidad de tanto el inverso como del neutro, y es trivial que dado la bilateralidad del inverso y del neutro se obtiene la propiedad lateral del inverso y del neutro. Luego, podemos afirmar que definir los grupos con inverso y neutro lateral es **equivalente** a definir los grupos con inverso y neutro bilateral.

Hasta ahora, estoy asumiendo que la axiomatización con inverso y neutro por la derecha puede demostrar la bilateralidad. Si quieres mayor rigurosidad, ¡te encargo a demostrarlo tú mismo! *Pista: el argumento es idéntico pero haciendo todo en espejo.*

>[!ejercicio] Ejercicio
> Defínase un grupo como un conjunto $G$ junto a una operación binaria $·$ en $G$ que satisface:
> 1.  Para todo $a,b \in G$, $a·b \in G$.
> 2. Para todo $a,b,c \in G$, $(a·b)·c=a·(b·c)$.
> 3. Existe un $e \in G$ para todo $a \in G$ tal que $a·e=a$.
> 4. Para todo $a \in G$ existe un $b \in G$ tal que $a·b=e$.
>
 >Demuestra que bajo esta definición se puede demostrar la bilateralidad del inverso y del neutro.

Una vez sacado esto de encima, podemos establecer lo siguiente: estas tres definiciones de grupo son equivalentes:

> [!definicion] Definición lateral izquierda
> Un grupo es un conjunto $G$ junto a una operación binaria $·$ en $G$ que satisface:
> 1.  Para todo $a,b \in G$, $a·b \in G$.
> 2. Para todo $a,b,c \in G$, $(a·b)·c=a·(b·c)$.
> 3. Existe un $e \in G$ para todo $a \in G$ tal que $e·a=a$.
> 4. Para todo $a \in G$ existe un $b \in G$ tal que $b·a=e$.

> [!definicion] Definición lateral derecha
> Un grupo es un conjunto $G$ junto a una operación binaria $·$ en $G$ que satisface:
> 1.  Para todo $a,b \in G$, $a·b \in G$.
> 2. Para todo $a,b,c \in G$, $(a·b)·c=a·(b·c)$.
> 3. Existe un $e \in G$ para todo $a \in G$ tal que $a·e=a$.
> 4. Para todo $a \in G$ existe un $b \in G$ tal que $a·b=e$.

> [!definicion] Definición bilateral
> Un grupo es un conjunto $G$ junto a una operación binaria $·$ en $G$ que satisface:
> 1.  Para todo $a,b \in G$, $a·b \in G$.
> 2. Para todo $a,b,c \in G$, $(a·b)·c=a·(b·c)$.
> 3. Existe un $e \in G$ para todo $a \in G$ tal que $e·a=a·e=a$.
> 4. Para todo $a \in G$ existe un $b \in G$ tal que $b·a=a·b=e$.

A veces puede ser útil usar ya sea la definición por la izquierda o la definición por la derecha para identificar un grupo, ya que en ocasiones puede ser más fácil identificar propiedades por un lado que por el otro.

Ahora vamos a practicar demostrar que ciertos conjuntos con operaciones son grupos o no. Para demostrar que una estructura es un grupo se deben verificar los 4 axiomas, y para demostrar que no es un grupo se debe refutar al menos un axioma.

>[!ejercicio] Ejercicio
> Demostrar si $(\mathbb{N}_0,+)$ es un grupo o no.
>
>>[!demostracion]- Solución
>>Sabemos que los números naturales con el cero son cerrados bajo suma, ya que la suma de números positivos y el cero siempre resulta en un número positivo o cero. También, sabemos que la suma es asociativa, ya que $(a+b)+c=a+(b+c)$. Además, existe un $e\in  \mathbb{N}_0$ para todo $a \in \mathbb{N}_0$ tal que $a+e=a$, con $e=0$ ya que $a+0=a$. Pero el último axioma falla: no para todo $a \in \mathbb{N}_0$ existe un $b \in \mathbb{N}_0$ tal que $a+b=0$. Sabemos que el único $b \in \mathbb{R}$ que cumple esto es $b=-a$, pero si $a>0$, entonces $-a<0$ y por lo tanto no está en $\mathbb{N}_0$. El único que tiene inverso es $0$, ya que $0+0=0$. Pero como no todos tienen inverso, $(\mathbb{N}_0,+)$ no es un grupo.

>[!ejercicio] Ejercicio
> Demostrar si $(\mathbb{Q},·)$ es un grupo o no. 
>>[!demostracion]- Solución
>> Primero, sabemos que el producto de dos números racionales resulta en otro número racional. Luego, sabemos que en los racionales $(a·b)·c=a·(b·c)$. Ahora, sabemos que existe un $e \in \mathbb{Q}$ para todo $a \in \mathbb{Q}$ tal que $e·a=a$, con $e=1$ ya que $1·a=a$. Pero nuevamente falla el inverso. Sabemos que para todo $a \in \mathbb{Q} \setminus \{0\}$ existe un $b \in \mathbb{Q}$ tal que $b·a=1$, donde $b=\frac{1}{a}$.  El problema es $0$: no existe un $b \in \mathbb{Q}$ tal que $b·0=1$. De hecho, sabemos que para todo $b \in \mathbb{Q}$ tenemos $b·0=0$. Como $0$ no tiene inverso multiplicativo, $(\mathbb{Q},·)$ no es un grupo.

>[!ejercicio] Ejercicio
> Demostrar si $(\mathbb{N},\wedge)$ es un grupo o no.
>>[!demostracion]- Solución
>> Primero, para todo $a,b\in \mathbb{N}$ tenemos $a^b \in \mathbb{N}$. Pero probemos la asociatividad: por un lado, $(a^b)^c=a^{bc}$. Por otro lado, $a^{(b^c)}= a^{b^c}$. Pero además $a^{bc} \neq a^{b^c}$. Como falla la asociatividad, $(\mathbb{N},\wedge)$ no es un grupo.

>[!ejercicio] Ejercicio
> Demostrar si $(\mathbb{Z},+)$ es un grupo o no.
>>[!demostracion]- Solución
>> Sabemos que si $a,b,c \in \mathbb{Z}$ tenemos $a+b \in \mathbb{Z}$, por lo que se cumple la clausura, y $(a+b)+c=a+(b+c)$, por lo que hay asociatividad. Ahora al igual que con $\mathbb{N}_0$, existe un $e \in \mathbb{Z}$ para todo $a \in \mathbb{Z}$ tal que $a+e=a$ con $e=0$. De este modo, existe el neutro. Por último, para todo $a \in \mathbb{Z}$, $-a \in \mathbb{Z}$ por lo que para todo $a \in \mathbb{Z}$ existe un $b \in \mathbb{Z}$ tal que $a+b=0$, con $b=-a$, de modo que existe el inverso. Al satisfacer los axiomas, $(\mathbb{Z},+)$ es un grupo.

