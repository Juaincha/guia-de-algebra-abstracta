El grupo diedral consiste en el grupo de simetrías de un polígono regular de n lados. Consideremos un n-gono en el que nos fijamos en sus vértices. Luego, una simetría es una transformación del polígono que mantiene su forma general pero que varía la posición de sus vértices. Las dos simetrías básicas que cumplen esto son la rotación y la reflexión. Generalmente, nombramos los vértices del polígono en sentido antihorario alfabéticamente o numéricamente.

![[file_00000000c140820ea282cff9fd083d8a.png|400]]

 Para hacer múltiples simetrías, podemos considerar que cada simetría es una función que toma como entrada el polígono y da como salida el polígono con los vértices alterados. Por esto, la composición de simetrías se hace de derecha a izquierda, igual que la composición de funciones. Por ejemplo. hacer la simetría $a$ y después la simetría $b$ es igual a hacer la simetría $b \circ a$. Si llamamos $r$ a la rotación más pequeña en sentido antihorario que preserva la forma del polígono, notamos que esta mueve cada vértice 1 posición en sentido antihorario. Si hacemos dos veces esta rotación, $r \circ r=r^2$ mueve cada vértice 2 pocisiones en sentido antihorario. De esta forma, $r^k$ mueve cada vértice k posiciones en sentido antihorario. Como el polígono tiene n vértices, $r^n$ es equivalente a no hacer nada. Si llamamos $e$ a la simetría de no hacer nada, tenemos  $r^n=e$. Además, como rotar en sentido antihorario y rotar en sentido horario no hace nada, podemos decir que rotar en sentido horario es $r^{-1}$.

Ahora, si llamamos $s_A$ a la reflexión que pasa por el vértice $A$ y el centro, notamos que reflejar dos veces no hace nada. Es decir, $s_A^2=e$. Lo mismo para cada vértice, es decir $s_B^2=e$, $s_C^2=e$, etc. Ahora una observación importante es que reflejar a través de $B$ es equivalente reflejar a través de $A$ y rotar en sentido antihorario. Es decir: $s_B = s_A \circ r$. Para evitar trabajar con tantos símbolos, no se escribe la composición y se asume que si dos elementos están juntos es porque hay que hacer su composición. Luego tenemos $s_B=s_A \: r$. Con la misma lógica, obtenemos $s_C =s_A \: r^2$, etc. Por lo tanto todas las reflexiones se pueden escribir como combinación de rotaciones y $s_A$. Por lo tanto, lo que se suele hacer es olvidar el resto de reflexiones y llamar $s_A=s$.

Con todo esto, el conjunto de todas las rotaciones y reflexiones del n-gono es $\{r,r^2,...r^{n-1},s_A,s_B,...\}=\{r,r^2,...r^{n-1},s,sr,sr^2,...sr^{n-1}\}$. Las potencias de $r$ llegan hasta $r^{n-1}$ porque $r^n=e$ y luego para cualquier $k$ , $r^{n+k}=r^k$. Por lo que ir más allá de $r^{n-1}$ resulta en una potencia de $r$ que ya había aparecido en ele conjunto. 

Falta una propiedad fundamental del grupo diedral que es más fácil de explicar visualmente. 

![[b411bf87-e444-4119-8988-c20d0bfe6596.jpg|600]]

Al reflejar, rotar y volver a reflejar, obtenemos lo mismo que rotar en el sentido contrario. Con esto tenemos tres propiedades fundamentales del grupo diedral: $r^n=e$, $s^2=e$, y $srs=r^{-1}$. Con estas tres propiedades se puede describir completamente el grupo diedral.

Hasta ahora no se ha demostrado ninguna de estas afirmaciones. Para demostrar las tres propiedades fundamentales hay varias formas de hacerlo, pero prefiero hacerlo utilizando números complejos:

>[!teorema] Teorema
> Sea $P$ un polígono regular de $n$ lados en el plano. Luego:
> 1. $(R_{360º/n})^n=e$
> 2. $S^2=e$
> 3. $SR_{360º/n}S=(R_{360º/n})^{-1}$ <br>
>
> Donde $R_{360º/n}$ corresponde a la rotación en sentido antihorario de $\frac{360º}{n}$ grados, $S$ a la reflexión respecto al eje formado por un vértice y el origen, $e$ a la transformación que mantiene constantes todos los vértices, y la operación es la composición de simetrías.

>[!demostracion] Demostración
> Representemos $P$ en el plano complejo. Situemos un vértice, al cual llamaremos vértice principal, en $1$. Representaremos el polígono de manera tal que todos sus vértices yacen en el círculo unitario con fórmula  $z=e^{i\theta}$, donde $\theta$ es de la forma $\frac{2\pi k}{n}$, con $0 \leq k \leq n-1$. Decimos que la posición del vértice es $k$. Definimos $R_{360º/n}: \mathbb{C} \rightarrow \mathbb{C}$ tal que para todo $z \in \mathbb{C}$,  $R_{360º/n}(z)=z·e^{2\pi i/n}$. Esto efectivamente es una rotación, ya que si $z=e^{2\pi ik/n}$, entonces $R_{360º/n}=e^{2\pi ik/n}·e^{2\pi i/n}=e^{2\pi(k+1) i/n}$. Para  $0 \leq k \leq n-2$, cada $k+1$ representa el vértice en la siguiente posición. Para $k=n-1$, $e^{2\pi(k+1) i/n}=e^{2\pi n i/n}=e^{2\pi i}=e^{0i}$, por lo que va a $k=0$. Es decir, cada vértice va a la posición siguiente en sentido antihorario. <br>
> Ahora, definimos $S: \mathbb{C} \rightarrow \mathbb{C}$ como para todo $z \in \mathbb{C}$, $S(z)=e^{-i\theta}$, donde donde $\theta$ es el ángulo polar de $z$. Esto corresponde a una reflexión a través del eje formado por el vértice principal y el origen, es decir el eje horizontal, porque:  $e^{-i\theta}=cos(-\theta)+isen(-\theta)=cos(\theta)-isen(\theta)$. Como obtenemos el negativo del componente imaginario, estamos reflejando respecto al eje real. Con estas dos funciones:  <br>
>1. Sea $P(s): ({R_{360º/n}})^s=z·e^{2\pi is/n}$. $P(1): ({R_{360º/n}})=z·e^{2\pi i/n}$, por lo que $P(1)$ es verdadera. Sea $P(s)$ verdadera. Luego, $({R_{360º/n}})^s=z·e^{2\pi is/n}$. Multiplicando ambos lados por $R_{360º/n}$, obtenemos  $({R_{360º/n}})^{s+1}=z·e^{2\pi is/n}·e^{2\pi i/n}=z·e^{2\pi i(s+1)/n}$, por lo tanto $({R_{360º/n}})^{s+1}=z·e^{2\pi i(s+1)/n}$, que es igual a $P(s+1)$. Como $P(1)$ es verdadera y $P(s) \implies P(s+1)$, por inducción, para todo $s\in \mathbb{N}$, $({R_{360º/n}})^s=z·e^{2\pi is/n}$. Con esta identidad, tenemos: $({R_{360º/n}})^n=z·e^{2\pi in/n}=z·e^{2\pi i}=z$. Luego $({R_{360º/n}})^n$ deja constante cada vértice, por lo que $({R_{360º/n}})^n=e$.
><br>
>2. $S^2=S \circ S(z)$. Sea $z=e^{i\theta}$. Luego, $S(z)=e^{-i\theta}=S(z)=e^{i(-\theta)}$. Como $S(z)$ es de la forma $e^{i\alpha}$ con $\alpha=-\theta$, $S \circ S(z)=e^{-i\alpha}=e^{-i(-\theta)}=e^{i\theta}=z$. Como $S^2$ deja constante cada vértice, $S^2=e$.
><br>
>3.  $SR_{360º/n}S=S \circ R_{360º/n} \circ S(z)$. Sea $z=e^{i\theta}$. Luego, $S \circ R_{360º/n} \circ S(z) = S \circ R_{360º/n}(e^{-i\theta})=S(e^{-i\theta}·e^{2\pi i/n})=S(e^{i((2\pi /n)-\theta)})$$=e^{-i((2\pi /n)-\theta)}=e^{i((\theta-2\pi /n))}$. 


$S(e^{-i\theta}·e^{2\pi i/n})=S(e^{}$

