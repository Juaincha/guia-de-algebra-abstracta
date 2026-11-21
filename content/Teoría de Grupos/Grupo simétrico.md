---
description: El grupo simétrico, formado por todas las permutaciones de un conjunto de n elementos, con su notación en matrices y en ciclos.
---
El grupo simétrico $(S_n,\circ)$ consiste en el grupo de todas las permutaciones de un conjunto de $n$ elementos. Por ejemplo, si tenemos tres figuras:

![[grupo-simetrico-tres-objetos.svg|Seis filas con un triángulo rojo, un cuadrado azul y un rombo verde, cada una en un orden distinto|560]]

*Las seis formas de ordenar en fila un triángulo rojo, un cuadrado azul y un rombo verde.*

Este es el conjunto de todas las permutaciones del conjunto. Por combinatoria, sabemos que un conjunto de $n$ elementos tiene $n!$ permutaciones, por lo que $S_n$ tiene $n!$ elementos. Pero realmente los elementos de $S_n$ no son las formas en que se ordenan las figuras, sino los movimientos que las reordenan. Por ejemplo, si elegimos el primer orden de las figuras como el estado base, la acción de no alterar esa combinación es un elemento de $S_n$. La acción de intercambiar la primera figura con la segunda es otro elemento de $S_n$. La acción de mover cada figura una posición a la derecha, de manera que la última vuelve al inicio, también es un elemento de $S_n$. De este modo, las figuras sirven solo para visualizar las acciones, pero realmente cada elemento de $S_n$ es una forma de reordenar los elementos de cualquier conjunto de $n$ elementos. Como no importa qué conjunto estamos reordenando, por simplicidad se prefiere trabajar con números naturales. Por ejemplo, podemos decir que el grupo $S_3$ mueve los elementos de $\{1,2,3\}$.

## Notación de matrices y de funciones

Existen muchas notaciones para representar los elementos de $S_n$. La primera que utilizaremos los representa mediante matrices de $2 \times n$. Para representar el estado inicial del conjunto, escribimos los elementos de $\{1,2,\dots,n\}$ en la primera fila. Para representar el nuevo ordenamiento, los escribimos reordenados en la segunda fila. De este modo, $\sigma = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}$ representa la permutación que mueve todos los elementos de $\{1,2,3\}$ una posición a la derecha.

Otra notación que se puede utilizar es representar las permutaciones como funciones con entrada y salida. Una permutación $\sigma$ que toma un ordenamiento $A$ y devuelve otro ordenamiento $B$ se puede representar como $\sigma(A)=B$. Luego podemos decir que $\sigma = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}$ equivale a $\sigma(1,2,3)=(3,1,2)$.

## Composición

Para la composición de permutaciones, las escribimos de derecha a izquierda, de modo que $\beta \circ \alpha$ significa hacer primero la permutación $\alpha$ y después la permutación $\beta$. Por ejemplo, sean $\alpha=\begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}$ y $\beta=\begin{pmatrix} 1 & 2 & 3 \\ 1 & 3 & 2 \end{pmatrix}$, y calculemos $\beta \circ \alpha$. La forma más segura es seguir a cada elemento, de derecha a izquierda. $\alpha$ manda el $1$ al $3$, y luego $\beta$ manda el $3$ al $2$, así que $\beta \circ \alpha$ manda el $1$ al $2$. Del mismo modo, $\alpha$ manda el $2$ al $1$ y $\beta$ deja el $1$ en su lugar, así que el $2$ va al $1$. Por último, $\alpha$ manda el $3$ al $2$ y $\beta$ manda el $2$ al $3$, así que el $3$ vuelve al $3$. Por lo tanto, $\beta \circ \alpha=\begin{pmatrix} 1 & 2 & 3 \\ 2 & 1 & 3 \end{pmatrix}$.

![[grupo-simetrico-composicion-por-elementos.svg|Los números 1, 2 y 3 en tres columnas, unidos por flechas de colores que siguen a cada número en dos pasos|400]]

*Para calcular $\beta \circ \alpha$ se sigue a cada elemento, primero con $\alpha$ y después con $\beta$. El $1$ termina en el $2$, el $2$ en el $1$ y el $3$ en el $3$.*

Para componer permutaciones con la notación de funciones, es mucho más simple. Tengamos el mismo ejemplo. Sean $\alpha(1,2,3) = (3,1,2)$ y $\beta(1,2,3) = (1,3,2)$. Como la función no depende del nombre de las variables, podemos decir $\beta(x,y,z) = (x,z,y)$. Luego, reordenar primero con $\alpha$ y después con $\beta$ queda como $\beta(\alpha(1,2,3))= \beta (3,1,2)=(3,2,1)$.

Cambiando un poco la perspectiva, podemos ya sea tratar una permutación como una función que toma un ordenamiento y devuelve otro, o podemos tratarla como una función que toma los elementos del conjunto y los modifica. Por ejemplo, en la permutación $\alpha(1,2,3) = (3,1,2)$ podemos decir que el $1$ se convirtió en $3$, el $2$ se convirtió en $1$ y el $3$ se convirtió en $2$. Luego, $\alpha(1)=3$, $\alpha(2)=1$ y $\alpha(3)=2$. Esta visión es contraria a reordenar, ya que decir que el $1$ se convirtió en $3$ es lo mismo que decir que el $3$ se movió a la posición del $1$. Lo importante es que de ambas maneras obtenemos el mismo orden resultante. Usando ambas notaciones, podemos decir que $\alpha(1,2,3) = (\alpha(1),\alpha(2),\alpha(3))=(3,1,2)$. Eso sí, al componer las dos visiones dan resultados distintos. Como vimos, reordenar primero con $\alpha$ y después con $\beta$ da $(3,2,1)$, mientras que $\beta \circ \alpha$, siguiendo a cada elemento, da $(\beta(\alpha(1)),\beta(\alpha(2)),\beta(\alpha(3)))=(\beta(3),\beta(1),\beta(2))=(2,1,3)$. De ahora en adelante usaremos la visión de elementos, que es la que usa la notación de ciclos.

## Notación de ciclos

Por último, la notación más utilizada es la notación de ciclos. Escribimos $\sigma = (132)$ cuando queremos representar una permutación cíclica. Esto significa que cada elemento va al que lo sigue dentro del paréntesis, y el último va al primero, cerrando el ciclo. En este caso, $\sigma=(132)$ significa que el $1$ se transforma en $3$, el $3$ se transforma en $2$, y el $2$ se transforma en $1$, por lo que se cierra el ciclo. En notación de función, $\sigma(1,2,3) = (\sigma(1),\sigma(2),\sigma(3))=(3,1,2)$. Si es que hay elementos no mencionados, se asume que no se mueven. Por ejemplo, $(13)$ significa que el $1$ se transforma en $3$, el $3$ en $1$ y el $2$ se mantiene constante.

![[grupo-simetrico-ciclos.svg|Los números 1, 3 y 2 unidos por flechas en un ciclo y, al lado, el 1 y el 3 unidos por flechas en ambos sentidos con el 2 aparte|440]]

*En $(132)$, el $1$ va al $3$, el $3$ al $2$ y el $2$ al $1$. En $(13)$, el $1$ y el $3$ se intercambian y el $2$ no se mueve.*

Cuando trabajamos con esta notación es importante declarar en qué conjunto estamos trabajando. Por ejemplo, si trabajamos en $S_3$, $(132)$ equivale a $\begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}$, mientras que en $S_4$, $(132)$ equivale a $\begin{pmatrix} 1 & 2 & 3 & 4\\ 3 & 1 & 2 & 4\end{pmatrix}$. Con las otras dos notaciones siempre está claro el tamaño del conjunto, pero con la notación de ciclos hay que aclararlo. La ventaja principal que ofrece la notación de ciclos es que es muy compacta.

Hay un teorema llamado el **teorema de descomposición fundamental**, que establece que toda permutación puede escribirse como una composición de ciclos que no comparten elementos, y que esa composición es única salvo el orden de los ciclos. Por ejemplo, $\begin{pmatrix} 1 & 2 & 3 & 4\\ 2 & 1 & 4 & 3\end{pmatrix}$ se puede escribir como $(12) \circ (34)$, ya que el $4$ va al $3$ y el $3$ va al $4$, y luego el $2$ va al $1$ y el $1$ va al $2$. Como los ciclos no comparten elementos, no importa el orden. Es decir, $(12) \circ (34)=(34) \circ (12)$, lo cual significa que conmutan. En cambio, para ciclos que comparten elementos, y para permutaciones en general, el orden sí puede importar.

![[grupo-simetrico-ciclos-disjuntos.svg|Los números 1 y 2 unidos por flechas en ambos sentidos y, aparte, el 3 y el 4 unidos de la misma forma|330]]

*$(12)\circ(34)$ intercambia el $1$ con el $2$ y el $3$ con el $4$. Como los ciclos no comparten elementos, el orden no importa.*

Falta añadir que la permutación que no mueve a ningún elemento, o, dicho de otro modo, que transforma cada elemento a sí mismo, se llama identidad y se escribe $\mathrm{id}$.

## Ejercicio

>[!ejercicio] Ejercicio
>Simplifica:
> 1. $(123)(123)$
> 2. $(123)(132)$
> 3. $(12)(23)(12)$
> 4. $(12)(23)(34)$
>>[!demostracion]- Solución
>> 1. $(123)(123)$. Sea $\sigma=(123)$, es decir, $\sigma(1,2,3)=(2,3,1)$. Cambiando las variables: $\sigma(x,y,z)=(y,z,x)$. Ahora: $(123)(123)=\sigma \circ \sigma(1,2,3)=\sigma(2,3,1)=(3,1,2)$. Luego $\sigma \circ \sigma(1,2,3)=\sigma^2(1,2,3)=(3,1,2)$. Como $1\mapsto 3$, $3\mapsto 2$ y $2\mapsto 1$, obtenemos $\sigma^2=(132)$. Por lo tanto $(123)(123)=(123)^2=(132)$.
>>
>> 2. $(123)(132)$. $(132)$ representa $1\mapsto 3$, $3\mapsto 2$ y $2\mapsto 1$. $(123)$ representa $1\mapsto 2$, $2\mapsto 3$ y $3\mapsto 1$. Aplicando $(132)$ y luego $(123)$, obtenemos $1\mapsto 3\mapsto 1$, $2\mapsto 1\mapsto 2$ y $3\mapsto 2\mapsto 3$. Como transforma cada elemento a sí mismo, $(123)(132)=\mathrm{id}$. Como por el resultado anterior $(132)=(123)^2$, obtenemos $(123)(123)^2=(123)^3=\mathrm{id}$.
>>
>> 3. $(12)(23)(12)$. De derecha a izquierda, $(12)$ representa $1 \mapsto 2$, $2\mapsto 1$. $(23)$ representa $2 \mapsto 3$, $3 \mapsto 2$. Componiendo $(12) \circ (23) \circ (12)$: $1\mapsto 2 \mapsto 3\mapsto 3$, $2\mapsto 1 \mapsto 1 \mapsto 2$, $3 \mapsto 3 \mapsto 2 \mapsto 1$. Por lo tanto, $(12)(23)(12)$ representa $1\mapsto3$, $2\mapsto2$, $3\mapsto1$. De esta manera, $(12)(23)(12)=(13)$.
>>
>> 4. $(12)(23)(34)$. De derecha a izquierda, $(34)$ representa $3\mapsto4$, $4\mapsto3$, $(23)$ representa $2\mapsto3$, $3\mapsto2$ y $(12)$ representa $1\mapsto2$, $2\mapsto1$. Componiendo: $1\mapsto1 \mapsto1 \mapsto2$, $2\mapsto 2\mapsto 3\mapsto 3$, $3\mapsto4 \mapsto4 \mapsto4$, $4\mapsto 3 \mapsto2 \mapsto1$. De este modo, $1\mapsto 2$, $2 \mapsto 3$, $3 \mapsto 4$ y $4 \mapsto1$. Por lo tanto $(12)(23)(34)=(1234)$.

## Por qué es un grupo

Luego de esta introducción, es momento de interpretar las permutaciones de un conjunto como un grupo.

>[!teorema]
> Sea $(S_n,\circ)$ el conjunto de todas las permutaciones de un conjunto de $n$ elementos junto a la operación de composición de funciones. Luego, $(S_n, \circ)$ es un grupo.

>[!demostracion]
> Tengamos el conjunto $A=\{1,2,3,\dots,n\}$. Sea $S_n$ el conjunto de las permutaciones del conjunto. Sean $\alpha, \beta, \gamma \in S_n$. Luego:
>
> 1. Como $\beta$ reordena los elementos de $A$ sin repetir ni perder ninguno, y luego $\alpha$ hace lo mismo con el resultado, $\alpha \circ \beta$ también reordena los elementos de $A$ sin repetir ni perder ninguno. Es decir, $\alpha \circ \beta$ es una permutación de $A$, y por lo tanto $\alpha \circ \beta \in S_n$. Por lo tanto hay clausura.
>
> 2. Como las permutaciones del conjunto son funciones, $(\alpha \circ \beta) \circ \gamma=\alpha \circ (\beta \circ \gamma)$. Por lo tanto hay asociatividad.
>
> 3. Tengamos la identidad $\mathrm{id}$, de forma que para todo $x\in A$, $\mathrm{id}(x)=x$. Luego, para todo $x \in A$, $(\mathrm{id} \circ \alpha)(x)=\mathrm{id}(\alpha(x))=\alpha(x)$, ya que $\alpha(x) \in A$. Por lo tanto $\mathrm{id} \circ \alpha = \alpha$. Como $\alpha$ es arbitrario, para todo $\alpha \in S_n$, $\mathrm{id} \circ \alpha = \alpha$. Luego hay un elemento neutro.
>
> 4. Sea $\alpha \in S_n$. Supongamos primero que $\alpha$ es un ciclo, $\alpha = (abc\dots k)$. Luego, $\alpha$ equivale a $a \mapsto b$, $b\mapsto c$, etc. hasta $k\mapsto a$. Tengamos $\beta = (k\dots cba)$. Luego, $\beta$ equivale a $a\mapsto k$, $b\mapsto a$, $c\mapsto b$, etc. Luego la composición $\beta \circ \alpha$ equivale a $a\mapsto b \mapsto a$, $b \mapsto c \mapsto b$, etc. hasta $k\mapsto a \mapsto k$. Luego $\beta \circ \alpha$ corresponde a $a\mapsto a$, $b \mapsto b$, $c \mapsto c$, etc. Por lo tanto, $\beta \circ \alpha= \mathrm{id}$. Si $\alpha$ no es un ciclo, por el **teorema de descomposición fundamental** $\alpha=\alpha_1 \circ \alpha_2 \circ \dots \circ \alpha_m$, donde los $\alpha_i$ son ciclos que no comparten elementos. Sea $\beta_i$ el ciclo $\alpha_i$ escrito al revés, y sea $\beta=\beta_1 \circ \beta_2 \circ \dots \circ \beta_m$. Como los ciclos que no comparten elementos conmutan, podemos reordenar $\beta \circ \alpha$ como $(\beta_1 \circ \alpha_1) \circ (\beta_2 \circ \alpha_2) \circ \dots \circ (\beta_m \circ \alpha_m)$. Por el caso anterior, cada $\beta_i \circ \alpha_i=\mathrm{id}$, y por lo tanto $\beta \circ \alpha=\mathrm{id}$. Como $\alpha$ es arbitrario, para cada $\alpha \in S_n$ existe un $\beta$ tal que $\beta \circ \alpha = \mathrm{id}$. Por lo tanto hay inversos.
>
> Reunidos los cuatro axiomas, $(S_n,\circ)$ es un grupo.

Esta demostración arroja luces sobre cómo encontrar el inverso de permutaciones escritas en su notación de ciclos.
