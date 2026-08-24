Teoría de grupos es un área de las matemáticas que estudia estructuras llamadas **grupos**, que son interesantes porque pueden representar conjuntos de simetrías y sus composiciones.  

![[Pasted image 20260824150534.png|500]]

Por ejemplo, al estudiar las simetrías de un triángulo equilátero notamos que podemos rotarlo 120º en sentido antihorario, rotarlo 840º en sentido antihorario, reflejarlo verticalmente, etc. Todas estas transformaciones son simetrías porque no alteran la forma general del triángulo. Aún así, podemos distinguir entre triángulos transformados al fijarnos en sus vértices. 

En general, nos gusta ponerle nombre a las transformaciones válidas. En este caso, llamamos una rotación de 120º $r$, y una simetría vertical $s$. Se puede demostrar que todas las simetrías posibles del triángulo equilátero son iguales a una combinación de $s$ y $r$. Más adelante profundizaremos en este grupo.

Lo central en los grupos es que tienen cuatro propiedades:
1. Hacer dos simetrías seguidas equivale a hacer una tercera simetría particular. Por ejemplo, en el tríangulo rotar 120º en sentido antihorario y nuevamente rotar 120º en sentido antihoriario equivale a rotar 240º en sentido antihorario.
2.  Existe la asociatividad de transformaciones. Por ejemplo, en el triángulo rotar por 120º en sentido antihorario y después hacer la acción que equivale a reflejar verticalmente y rotar 120º en sentido horario, es lo mismo que primero hacer la acción que equivale a rotar por 120º en sentido antihorario y reflejar verticalmente, para luego rotar 120º en sentido horario.
3. Tienen un elemento que no hace nada. Por ejemplo, en el triángulo es la simetría de no hacer nada.
4. Cada elemento tiene un inverso que deshace la transformación. Por ejemplo, en el triángulo el inverso de una rotación de 120º en sentido antihorario es una rotación de 120º en sentido horario.

Cualquier conjunto que tenga una operación y cumpla estas 4 propiedades es un grupo, aunque no sea tan evidente que tenga que ver con simetrías.

![[Pasted image 20260824153003.jpg|400]]

Otro grupo es el de los movimientos posibles en el cubo Rubik. Según la notación de cubo Rubik, podemos girar cualquiera de las 6 caras en sentido horario aplicando L,R,U,D,F y B. Además, podemos girar cualquiera de las 6 caras en sentido antihorario aplicando L',R',U',D',F' y B'. Naturalmente, R y R' se cancelan, llevando a la acción de no hacer nada. De este modo, R' es el inverso de R. Es evidente que la composición de giros de las caras del cubo Rubik siempre corresponde a una transformación del cubo Rubik. Con todo esto, queda en evidencia que el conjunto de todas las transformaciones del cubo Rubik forma un grupo. 

Ya es hora de entender los grupos desde una perspectiva algebraica, lo cual luego se vuelve a conectar con esta noción de simetría.