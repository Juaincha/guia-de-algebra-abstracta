El grupo simétrico $(S_n,\circ)$ consiste en el grupo de todas las permutaciones de un conjunto de n elementos. Por ejemplo, si tenemos un conjunto de 3 pelotas:

![[grok_1788357790189.jpg|550]]

Este es el conjunto de todas las permutaciones del conjunto. Por combinatoria, sabemos que el grupo simétrico de $n$ elementos tiene $n!$ permutaciones, por lo que $S_n$ tiene $n!$ elementos. Pero realmente los elementos de $S_n$ no son las formas en que se organizan las pelotas: son los movimientos que se realizaron. Por ejemplo, si elegimos la primera combinación de pelotas como el estado base, la acción de no alterar esa combinación es un elemento de $S_n$. La acción de intercambiar la primera pelota con la segunda es otro elemento de $S_n$. La accón de intercambiar una posición a la derecha cada pelota, de manera que la última vuelve al inicio, también es un elemento de $S_n$. De este modo, las pelotas sirven solo para visualizar las acciones, pero realmente cada elemento de $S_n$ es una forma de reordenar los elementos de cualquier conjunto de $n$ elementos. Como no importa qué conjunto estamos reordenando, por simplicidad se prefiere trabajar con números naturales. Por ejemplo, podemos decir que el grupo $S_3$ mueve los elementos de $\{1,2,3\}$.

Existen muchas notaciones para representar los elementos de $S_n$. La primera que utilizaremos los representa mediante matrices de $2\text{ x }n$. Para representar el estado inicial del conjunto, escribirmos los elementos de $\{1,2,...n\}$ en la primera fila. Para representar el nuevo ordenamiento, los escribimos reordenados en la segunda fila. De este modo, $\sigma = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}$ reprersenta la permutación que mueve todos los elementos de $\{1,2,3\}$ una posición a la derecha.

Otra notación que se puede utilizar es representar las permutaciones como funcionees con entrada y salida. Una permutación $\sigma$ que mueve un conjunto $A$ y devuelve un conjunto $B$ se puede representar como $\sigma(A)=B$. Luego podemos decir que $\sigma = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}$ equivale a $\sigma(\{1,2,3\})=\{3,1,2\}$.

Para la composición de permutaciones, las escribirmos de derecha izquierda, de modo que $\beta \circ \alpha$ significa hacer primero la permutación $\alpha$ y después la permutación $\beta$. Con la notación de matrices, para componer permutaciones, tengamos: $\begin{pmatrix} 1 & 2 & 3 \\ 1 & 3 & 2 \end{pmatrix} \begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}$. Pensemos que estamos reordenando el conjunto {rojo,azul,verde}. Primero, con la permutación de la derecha el rojo quedó en la segunda posición, el azul en la tercera y el verde en la primera, de esta manera: $\begin{pmatrix} 1 & 2 & 3 \\ 1 & 3 & 2 \end{pmatrix} \begin{pmatrix} \textcolor{red}{1} & \textcolor{blue}{2} & \textcolor{green}{3} \\ \textcolor{green}{3} & \textcolor{red}{1} & \textcolor{blue}{2} \end{pmatrix}$. Ahora, la segunda permutación reordena el conjunto final de la permutación anterior, {verde,rojo,azul}.El verde queda en la primera posición, el rojo en la tercera y el azul en la segunda, de este modo: $\begin{pmatrix} \textcolor{green}{1} & \textcolor{red}{2} & \textcolor{blue}{3} \\ \textcolor{green}{1} & \textcolor{blue}{3} & \textcolor{red}{2} \end{pmatrix} \begin{pmatrix} \textcolor{red}{1} & \textcolor{blue}{2} & \textcolor{green}{3} \\ \textcolor{green}{3} & \textcolor{red}{1} & \textcolor{blue}{2} \end{pmatrix}$. El conjunto final es entonces {verde,azul,rojo}. Como el conjunto pasa de {rojo,azul,verde} a {verde,azul,rojo}, podemos representar la nueva permutación como $\begin{pmatrix} \textcolor{green}{1} & \textcolor{red}{2} & \textcolor{blue}{3} \\ \textcolor{green}{1} & \textcolor{blue}{3} & \textcolor{red}{2} \end{pmatrix} \begin{pmatrix} \textcolor{red}{1} & \textcolor{blue}{2} & \textcolor{green}{3} \\ \textcolor{green}{3} & \textcolor{red}{1} & \textcolor{blue}{2} \end{pmatrix}=\begin{pmatrix} \textcolor{red}{1} & \textcolor{blue}{2} & \textcolor{green}{3} \\ \textcolor{green}{3} & \textcolor{blue}{2} & \textcolor{red}{1} \end{pmatrix}$. Quitando los colores, obtenemos $\begin{pmatrix} 1 & 2 & 3 \\ 1 & 3 & 2 \end{pmatrix} \begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}= \begin{pmatrix} 1 & 2 & 3 \\ 3 & 2 & 1 \end{pmatrix}$. Esta notación puede ser confusa, pero la ventaja es que es más compacta que la de funciones.

Para componer simetrías con la notación de funciones, es mucho más simple. Tengamos el mismo ejemplo. Sea $\alpha(\{1,2,3\}) = \{3,1,2\}$ y $\beta(\{1,2,3\}) = \{1,3,2\}$. Como la función no depende del nombre de las variables, podemos decir $\beta(\{x,y,z\}) = \{x,z,y\}$. Luego, la composición $\beta \circ \alpha$ queda como $\beta \circ \alpha(\{1,2,3\})= \beta (\{3,1,2\})=\{3,2,1\}$. Luego $(\beta \circ \alpha)(\{1,2,3\})=\{3,2,1\}$.

Cambiando un poco la perspectiva, podemos ya sea tratar una permutación como una función que toma un ordenamiento y devuelve otro, o podemos tratarla como una función que toma los elementos del conjunto y los modifica. Por ejemplo, En la permutación $\alpha(\{1,2,3\}) = \{3,1,2\}$ podemos decir que el $1$ se convirtió en $3$, el $2$ se convirtió en $1$ y el $3$ se convirtió en $2$. Luego, $\alpha(1)=3$, $\alpha(2)=1$ y $\alpha(3)=2$. Esta visión es contraria a reordenar, ya que decir que el $1$ se convirtió en $3$ es lo mismo que decir que el $3$ se movió a la posición del $1$. Lo importante es que de ambas maneras obtenemos el mismo conjunto resultante. Usando ambas notaciones, podemos decir que $\alpha(\{1,2,3\}) = \{\alpha(1),\alpha(2),\alpha(3)\}=\{3,1,2\}$.

Por último, la notación más utilizada es la notación de ciclos. Escribimos $\sigma = (132)$ cuando queremos representar una permutación cíclica. Esto significa que cada elemento va al siguiente y el siguiente va a otro hasta que el último va al primero, cerrando el ciclo. En este caso, $\sigma=(132)$ significa que el $1$ se transforma en $3$, el $3$ se transforma en $2$, y el $2$ se transforma en $1$, por lo que se cierra el ciclo. En notación de función, $\alpha(\{1,2,3\}) = \{\alpha(1),\alpha(2),\alpha(3)\}=\{3,1,2\}$. Si es que hay elementos no mencionados, se asume que no se mueven. Por ejemplo, $(13)$ significa que el $1$ se transforma en $3$, el $3$ en $1$ y el $2$ se mantiene constante.

Cuando trabajamos con esta notación es importante declarar en qué conjunto estamos trabajando. Por ejemplo, si trabajamos en $S_3$, $(132)$ equivale a $\begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}$, mientras que en $S_4$ $(132)$ equivale a $\begin{pmatrix} 1 & 2 & 3 & 4\\ 3 & 1 & 2 & 4\end{pmatrix}$. Con las otras dos notaciones siempre está claro el tamaño del conjunto, pero con la notación de ciclos hay que clarificarlo. La ventaja principal que ofrece la notación de ciclos es que es muy compacta.

Hay un teorema llamado el **teorema de descomposición fundamental,** que establece que toda permutación puede escribirse como una única composición de ciclos que no comparten elementos. Por ejemplo, $\begin{pmatrix} 1 & 2 & 3 & 4\\ 2 & 1 & 4 & 3\end{pmatrix}$ se puede escribir como $(12) \circ (34)$, ya que el $4$ va al $3$ y el $3$ va al $4$, y luego el $2$ va al $1$ y el $1$ va al $2$. Como los ciclos no comparten elementos, no importa el orden. Es decir, $(12) \circ (34)=(34) \circ (12)$. En cambio, en general esto no es cierto ni para ciclos que comparten elementos ni para permutaciones en general.

Falta añadir que la permutación que no mueve a ningún elemento, o dicho de otro modo que transforma cada elemento a sí mismo, se llama identidad y se escribe $id$.

>[!ejercicio] Ejercicio
>Simplifica:
> 1. $(123)(123)$
> 2. $(123)(132)$
> 3. $(12)(23)(12)$
> 4. $(12)(23)(34)$
>>[!demostracion]- Solución
>> 1. $(123)(123)$. Sea $\sigma(\{1,2,3\})=\{2,3,1\}=(123)$. Cambiando las variables: $\sigma(\{x,y,z\})=\{y,z,x\}$. Ahora: $(123)(123)=\sigma \circ \sigma(\{1,2,3\})=\sigma(\{2,3,1\})=\{3,1,2\}$. Luego $\sigma \circ \sigma(\{1,2,3\})=\sigma^2(\{1,2,3\})=\{3,1,2\}$. Como $1\mapsto 3$, $3\mapsto 2$ y $2\mapsto 1$, obtenemos $\sigma^2(\{1,2,3\})=\{3,1,2\}=(132)$. Por lo tanto $(123)(123)=(123)^2=(132)$.
>>
>> 2. $(123)(132)$. $(132)$ representa $1\mapsto 3$, $3\mapsto 2$ y $2\mapsto 1$. $(123)$ representa $1\mapsto 2$, $2\mapsto 3$ y $3\mapsto 1$. Aplicando $(132)$ y luego $(123)$, obtenemos $1\mapsto 3\mapsto 1$, $3\mapsto 2\mapsto 2$ y $3\mapsto 2\mapsto 3$. Como transforma cada elemento a sí mismo, $(123)(132)=id$. Como por el resultado anterior $(132)=(123)^2$, obtenemos $(123)^2=id$.
>>
>> 3. $(12)(23)(12)$. De derecha a izquierda, $(12)$ representa $1 \mapsto 2$, $2\mapsto 1$. $(23)$ representa $2 \mapsto 3$, $3 \mapsto 1$. Componiendo $(12) \circ (23) \circ (12)$: $1\mapsto 2 \mapsto 3\mapsto 3$, $2\mapsto 1 \mapsto 1 \mapsto 2$, $3 \mapsto 3 \mapsto 2 \mapsto 1$. Por lo tanto, $(12)(23)(12)$ representa $1\mapsto3$, $2\mapsto2$, $3\mapsto1$. De esta manera, $(12)(23)(12)=(13)$.
>>
>> 4. $(12)(23)(34)$. De derecha a izquierda, $(34)$ representa $3\mapsto4$, $4\mapsto3$, $(23)$ representa $2\mapsto3$, $3\mapsto2$ y $(12)$ representa $1\mapsto2$, $2\mapsto1$. Componiendo: $1\mapsto1 \mapsto1 \mapsto2$, $2\mapsto 2\mapsto 3\mapsto 3$, $3\mapsto4 \mapsto4 \mapsto4$, $4\mapsto 3 \mapsto2 \mapsto1$. De este modo, $1\mapsto 2$, $2 \mapsto 3$, $3 \mapsto 4$ y $4 \mapsto1$. Por lo tanto $(12)(23)(34)=(1234)$. 

Luego de esta introducción, es momento de interpretar las permutaciones de un conjunto como un grupo.

>[!teorema]
> Sea $(S_n,\circ)$ el conjunto de todas las permutaciones de un conjunto de $n$ elementos junto a la operación de composición de funciones. Luego, $(S_n, \circ)$ es un grupo.

>[!demostracion]
> Tengamos el conjunto ${1,2,3...n}$. Sea $S_n$ conjunto de las permutaciones del conjunto. Sean $\alpha, \beta, \gamma \in S_n$. Luego:
>
> 1. Como permutar dos veces el conjunto resulta en una permutación, $\alpha \circ \beta \in S_n$. Por lo tanto hay clausura.
>
> 2. Como las permutaciones del conjunto son funciones, $(\alpha \circ \beta) \circ \gamma=\alpha \circ (\beta \circ \gamma)$. Por lo tanto hay asociatividad.
>
> 3. Tengamos la identidad $id$, de forma que para todo $x\in A$, $id(x)=x$. Luego, $id \circ \alpha(x)=\alpha(x)$, por lo tanto $id \circ \alpha = \alpha$. Como $\alpha$ es arbitrario, para todo $\alpha \in S_n$, $id \circ \alpha = \alpha$. Luego hay un elemento neutro.
> 4. Sea $\alpha = (abc...k)$ en notación de ciclos. Luego, $\alpha$ equivale a $a \mapsto b$, $b\mapsto c$, etc. hasta $k\mapsto a$. Tengamos $\beta = (k...cba)$. Luego, $\beta$ equivale a $a\mapsto k$, $b\mapsto a$, $c\mapsto b$, etc. Luego la composición $\beta \circ \alpha$ equivale a $a\mapsto b \mapsto a$, $b \mapsto c \mapsto b$, etc. hasta $k\mapsto a \mapsto k$. Luego $\beta \circ \alpha$ corresponde a $a\mapsto a$, $b \mapsto b$, $c \mapsto c$, etc. Por lo tanto, $\beta \circ \alpha= id$. Como $\alpha$ es arbitrario, para cada $\alpha \in S_n$ existe un $\beta$ tal que $\beta \circ \alpha = id$. Por lo tanto hay inversos.
>
> Reunidos los cuatro axiomas $(S_n,\circ)$ es un grupo.

Esta demostración arroja luces sobre cómo encontrar el inverso de permutaciones escritas en su notación de ciclos.
