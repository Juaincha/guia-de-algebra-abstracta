---
description: Qué estudia la teoría de grupos, a partir de las simetrías de un triángulo equilátero y las cuatro propiedades que tienen en común.
---
La teoría de grupos es un área de las matemáticas que estudia estructuras llamadas **grupos**, que son interesantes porque pueden representar conjuntos de simetrías y sus composiciones.

Por ejemplo, al estudiar las simetrías de un triángulo equilátero notamos que podemos rotarlo 120° en sentido antihorario, rotarlo 840° en sentido horario, reflejarlo respecto al eje vertical, etc. Todas estas transformaciones son simetrías porque, después de aplicarlas, el triángulo vuelve a ocupar exactamente el mismo lugar. Aun así, podemos distinguir una transformación de otra si numeramos los vértices.

En general, nos gusta ponerle nombre a las transformaciones válidas. En este caso, llamamos $r$ a la rotación de 120° en sentido antihorario y $s$ a la reflexión respecto al eje vertical. Se puede demostrar que todas las simetrías posibles del triángulo equilátero se pueden escribir como una combinación de $s$ y $r$. De hecho, son exactamente seis: no hacer nada, $r$, $r^2$, $s$, $rs$ y $r^2s$, como muestra la imagen. En [[Grupo diedral]] profundizaremos en este tipo de grupos.

![[introduccion-simetrias-del-triangulo.svg|Seis triángulos equiláteros con los vértices 1, 2 y 3 en distintas posiciones, dos con una flecha de giro y tres con un eje punteado|560]]

*Las seis simetrías del triángulo equilátero. La acción de no hacer nada se conoce como $e$.*

Lo central en los grupos es que tienen cuatro propiedades:
1. Hacer dos simetrías seguidas equivale a hacer una sola simetría, que también está en el grupo. Por ejemplo, en el triángulo rotar 120° en sentido antihorario y nuevamente rotar 120° en sentido antihorario equivale a rotar 240° en sentido antihorario. Esta propiedad se conoce como **clausura**.
2. La composición de transformaciones es asociativa. Por ejemplo, en el triángulo, rotar 120° en sentido antihorario y después hacer "reflejar verticalmente y luego rotar 120° en sentido horario" es lo mismo que primero hacer "rotar 120° en sentido antihorario y luego reflejar verticalmente" y después rotar 120° en sentido horario. Esto se simplifica mucho con la notación $a\circ (b\circ c) = (a\circ b) \circ c$. Esta propiedad se conoce como **asociatividad**.
3. Tienen un elemento que deja todo como estaba. Por ejemplo, en el triángulo es la simetría de no hacer nada. A este elemento se le conoce como **elemento neutro**.
4. Cada elemento tiene un inverso que deshace la transformación. Por ejemplo, en el triángulo el inverso de una rotación de 120° en sentido antihorario es una rotación de 120° en sentido horario. A este elemento se le conoce como **inverso**.

Cualquier conjunto que tenga una operación y cumpla estas cuatro propiedades es un grupo, aunque no sea tan evidente que tenga que ver con simetrías.

Otro grupo es el de los movimientos posibles en el cubo de Rubik. Según la notación del cubo de Rubik, podemos girar cualquiera de las seis caras en sentido horario aplicando $L$, $R$, $U$, $D$, $F$ y $B$. Además, podemos girar cualquiera de las seis caras en sentido antihorario aplicando $L'$, $R'$, $U'$, $D'$, $F'$ y $B'$. Naturalmente, $R$ y $R'$ se cancelan, ya que hacer uno y luego el otro equivale a no hacer nada. De este modo, $R'$ es el inverso de $R$. Componer giros de las caras siempre da otra transformación del cubo. Con todo esto, y como la composición de transformaciones siempre es asociativa, el conjunto de todas las transformaciones del cubo de Rubik forma un grupo.

![[introduccion-cubo-giro-y-su-inverso.svg|Tres cubos de tres por tres en fila, unidos por flechas, en los que el del medio tiene la capa derecha girada|570]]

*Al girar la cara derecha con $R$, cambia una columna de la cara de arriba y otra de la cara frontal. Al girarla con $R'$, el cubo vuelve a como estaba.*

¡Ya es hora de entender los grupos desde una perspectiva algebraica! Más adelante la volveremos a conectar con esta noción de simetría.