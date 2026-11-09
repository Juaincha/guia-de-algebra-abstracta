La teoría de grupos es un área de las matemáticas que estudia estructuras llamadas **grupos**, que son interesantes porque pueden representar conjuntos de simetrías y sus composiciones.

![[Pasted image 20260824150534.png|500]]

Por ejemplo, al estudiar las simetrías de un triángulo equilátero notamos que podemos rotarlo 120° en sentido antihorario, rotarlo 840° en sentido horario, reflejarlo respecto al eje vertical, etc. Todas estas transformaciones son simetrías porque no alteran la forma general del triángulo. Aun así, podemos distinguir entre triángulos transformados al fijarnos en sus vértices.

En general, nos gusta ponerle nombre a las transformaciones válidas. En este caso, llamamos una rotación de 120° $r$, y una simetría vertical $s$. Se puede demostrar que todas las simetrías posibles del triángulo equilátero son iguales a una combinación de $s$ y $r$. Más adelante profundizaremos en este grupo.

Lo central en los grupos es que tienen cuatro propiedades:
1. Hacer dos simetrías seguidas equivale a hacer una tercera simetría particular. Por ejemplo, en el triángulo rotar 120° en sentido antihorario y nuevamente rotar 120° en sentido antihorario equivale a rotar 240° en sentido antihorario.
2. Existe la asociatividad de transformaciones. Por ejemplo, en el triángulo rotar por 120° en sentido antihorario y después hacer la acción que equivale a reflejar verticalmente y rotar 120° en sentido horario, es lo mismo que primero hacer la acción que equivale a rotar por 120° en sentido antihorario y reflejar verticalmente, para luego rotar 120° en sentido horario. Esto se simplifica mucho con la notación $a\circ (b\circ c) = (a\circ b) \circ c$.
3. Tienen un elemento que deja todo como estaba. Por ejemplo, en el triángulo es la simetría de no hacer nada.
4. Cada elemento tiene un inverso que deshace la transformación. Por ejemplo, en el triángulo el inverso de una rotación de 120° en sentido antihorario es una rotación de 120° en sentido horario.

Cualquier conjunto que tenga una operación y cumpla estas cuatro propiedades es un grupo, aunque no sea tan evidente que tenga que ver con simetrías.

![[Pasted image 20260824153003.jpg|400]]

Otro grupo es el de los movimientos posibles en el cubo de Rubik. Según la notación del cubo de Rubik, podemos girar cualquiera de las 6 caras en sentido horario aplicando L, R, U, D, F y B. Además, podemos girar cualquiera de las 6 caras en sentido antihorario aplicando L', R', U', D', F' y B'. Naturalmente, R y R' se cancelan, llevando a la acción de no hacer nada. De este modo, R' es el inverso de R. Es evidente que la composición de giros de las caras del cubo de Rubik siempre corresponde a una transformación del cubo de Rubik. Con todo esto, queda en evidencia que el conjunto de todas las transformaciones del cubo de Rubik forma un grupo.

Ya es hora de entender los grupos desde una perspectiva algebraica, lo cual luego se vuelve a conectar con esta noción de simetría.