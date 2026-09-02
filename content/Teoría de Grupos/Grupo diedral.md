El grupo diedral $(D_n,\circ)$ consiste en el grupo de simetrías de un polígono regular de n lados. Consideremos un n-gono en el que nos fijamos en sus vértices. Luego, una simetría es una transformación del polígono que mantiene su forma general pero que varía la posición de sus vértices. Las dos simetrías básicas que cumplen esto son la rotación y la reflexión. Generalmente, nombramos los vértices del polígono en sentido antihorario alfabéticamente o numéricamente.

![[file_00000000c140820ea282cff9fd083d8a.png|400]]

 Para hacer múltiples simetrías, podemos considerar que cada simetría es una función que toma como entrada el polígono y da como salida el polígono con los vértices alterados. Por esto, la composición de simetrías se hace de derecha a izquierda, igual que la composición de funciones. Por ejemplo. hacer la simetría $a$ y después la simetría $b$ es igual a hacer la simetría $b \circ a$. Si llamamos $r$ a la rotación más pequeña en sentido antihorario que preserva la forma del polígono, notamos que esta mueve cada vértice 1 posición en sentido antihorario. Si hacemos dos veces esta rotación, $r \circ r=r^2$ mueve cada vértice 2 pocisiones en sentido antihorario. De esta forma, $r^k$ mueve cada vértice k posiciones en sentido antihorario. Como el polígono tiene n vértices, $r^n$ es equivalente a no hacer nada. Si llamamos $e$ a la simetría de no hacer nada, tenemos  $r^n=e$. Además, como rotar en sentido antihorario y rotar en sentido horario no hace nada, podemos decir que rotar en sentido horario es $r^{-1}$. Pero como $r^n=e$, $r^{n-1}\circ r=e$ y por lo tanto $r^{-1}=r^{n-1}$.

Ahora, si llamamos $s_A$ a la reflexión que pasa por el vértice $A$ y el centro, notamos que reflejar dos veces no hace nada. Es decir, $s_A^2=e$. Lo mismo para cada vértice, es decir $s_B^2=e$, $s_C^2=e$, etc. Ahora una observación importante es que reflejar a través de $B$ es equivalente reflejar a través de $A$ y rotar en sentido antihorario. Es decir: $s_B = s_A \circ r$. Para evitar trabajar con tantos símbolos, no se escribe la composición y se asume que si dos elementos están juntos es porque hay que hacer su composición. Luego tenemos $s_B=s_A \: r$. Con la misma lógica, obtenemos $s_C =s_A \: r^2$, etc. Por lo tanto todas las reflexiones se pueden escribir como combinación de rotaciones y $s_A$. Por lo tanto, lo que se suele hacer es olvidar el resto de reflexiones y llamar $s_A=s$.

Con todo esto, el conjunto de todas las rotaciones y reflexiones del n-gono es $\{r,r^2,...,s_A,s_B,...\}=\{r,r^2,...r^{n-1},s,sr,sr^2,...sr^{n-1}\}$. Las potencias de $r$ llegan hasta $r^{n-1}$ porque $r^n=e$ y luego para cualquier $k$ , $r^{n+k}=r^k$. Por lo que ir más allá de $r^{n-1}$ resulta en una potencia de $r$ que ya había aparecido en el conjunto. 

Falta una propiedad fundamental del grupo diedral que es más fácil de explicar visualmente. 

![[b411bf87-e444-4119-8988-c20d0bfe6596.jpg|600]]

Al reflejar, rotar y volver a reflejar, obtenemos lo mismo que rotar en el sentido contrario. Es decir, $srs=r^{-1}$. Con esto tenemos tres propiedades fundamentales de las rotaciones y reflexiones: $r^n=e$, $s^2=e$, y $srs=r^{-1}$, con las cuales se puede describir completamente el grupo diedral.

Hasta ahora no se ha demostrado ninguna de estas afirmaciones. Para demostrar las tres propiedades fundamentales hay varias formas de hacerlo, pero prefiero hacerlo utilizando números complejos:

>[!teorema] Teorema
> Sea $P$ un polígono regular de $n$ lados en el plano. Luego:
> 1. $(R_{360º/n})^n=e$
> 2. $S^2=e$
> 3. $SR_{360º/n}S=(R_{360º/n})^{-1}$
>
> Donde $R_{360º/n}$ corresponde a la rotación en sentido antihorario de $\frac{360º}{n}$ grados, $S$ a la reflexión respecto al eje formado por un vértice y el origen, $e$ a la transformación que mantiene constantes todos los vértices, y la operación es la composición de simetrías.

>[!demostracion] Demostración
> Representemos $P$ en el plano complejo. Situemos un vértice, al cual llamaremos vértice principal, en $1$. Representaremos el polígono de manera tal que todos sus vértices yacen en el círculo unitario con fórmula  $z=e^{i\theta}$, donde $\theta$ es de la forma $\frac{2\pi k}{n}$, con $0 \leq k \leq n-1$. Decimos que la posición del vértice es $k$. Definimos $R_{360º/n}: \mathbb{C} \rightarrow \mathbb{C}$ tal que para todo $z \in \mathbb{C}$,  $R_{360º/n}(z)=z·e^{2\pi i/n}$. Esto efectivamente es una rotación, ya que si $z=e^{2\pi ik/n}$, entonces $R_{360º/n}=e^{2\pi ik/n}·e^{2\pi i/n}=e^{2\pi(k+1) i/n}$. Para  $0 \leq k \leq n-2$, cada $k+1$ representa el vértice en la siguiente posición. Para $k=n-1$, $e^{2\pi(k+1) i/n}=e^{2\pi n i/n}=e^{2\pi i}=e^{0i}$, por lo que va a $k=0$. Es decir, cada vértice va a la posición siguiente en sentido antihorario.
>
> Luego, si definimos $R_i$
> Ahora, definimos $S: \mathbb{C} \rightarrow \mathbb{C}$ como para todo $z \in \mathbb{C}$, $S(z)=e^{-i\theta}$, donde donde $\theta$ es el ángulo polar de $z$. Esto corresponde a una reflexión a través del eje formado por el vértice principal y el origen, es decir el eje horizontal, porque:  $e^{-i\theta}=cos(-\theta)+isen(-\theta)=cos(\theta)-isen(\theta)$. Como obtenemos el negativo del componente imaginario, estamos reflejando respecto al eje real. Con estas dos funciones: 
>
>1. Sea $P(s): ({R_{360º/n}})^s=z·e^{2\pi is/n}$. $P(1): ({R_{360º/n}})=z·e^{2\pi i/n}$, por lo que $P(1)$ es verdadera. Sea $P(s)$ verdadera. Luego, $({R_{360º/n}})^s=z·e^{2\pi is/n}$. Multiplicando ambos lados por $R_{360º/n}$, obtenemos  $({R_{360º/n}})^{s+1}=z·e^{2\pi is/n}·e^{2\pi i/n}=z·e^{2\pi i(s+1)/n}$, por lo tanto $({R_{360º/n}})^{s+1}=z·e^{2\pi i(s+1)/n}$, que es igual a $P(s+1)$. Como $P(1)$ es verdadera y $P(s) \implies P(s+1)$, por inducción, para todo $s\in \mathbb{N}$, $({R_{360º/n}})^s=z·e^{2\pi is/n}$. Con esta identidad, tenemos: $({R_{360º/n}})^n=z·e^{2\pi in/n}=z·e^{2\pi i}=z$. Luego $({R_{360º/n}})^n$ deja constante cada vértice, por lo que $({R_{360º/n}})^n=e$.
>
>2. $S^2=S \circ S(z)$. Sea $z=e^{i\theta}$. Luego, $S(z)=e^{-i\theta}=S(z)=e^{i(-\theta)}$. Como $S(z)$ es de la forma $e^{i\alpha}$ con $\alpha=-\theta$, $S \circ S(z)=e^{-i\alpha}=e^{-i(-\theta)}=e^{i\theta}=z$. Como $S^2$ deja constante cada vértice, $S^2=e$.
>
>3.  $SR_{360º/n}S=S \circ R_{360º/n} \circ S(z)$. Sea $z=e^{i\theta}$. Luego, $S \circ R_{360º/n} \circ S(z) = S \circ R_{360º/n}(e^{-i\theta})=S(e^{-i\theta}·e^{2\pi i/n})=S(e^{i((2\pi /n)-\theta)})=e^{-i((2\pi /n)-\theta)}=e^{i((\theta-2\pi /n))}=z·e^{-i2\pi /n}$. Para verificar que es el inverso, podemos componer con $R_{360º/n}$.  $SR_{360º/n}S \circ R_{360º/n}(z)=SR_{360º/n}S(e^{i\theta}·e^{2\pi i/n})= SR_{360º/n} S(e^{i((2\pi /n)+\theta)})=e^{i((2\pi /n)+\theta)}·e^{-i2\pi /n}=e^{i((2\pi /n)+\theta -(2\pi /n))}=e^{i\theta}=z$. Luego $(SR_{360º/n}S) R_{360º/n}=e$, por lo que $SR_{360º/n}S=(R_{360º/n})^{-1}$.
>
> Con esto, se obtiene $({R_{360º/n}})^n=e$, $S^2=e$ y $SR_{360º/n}S=(R_{360º/n})^{-1}$.

Ahora viene la parte más importante: demostrar que con estas tres propiedades es suficiente para describir completamente el grupo diedral.

>[!teorema] Teorema
> Sea $D_n=\{e,r,r^2,...r^{n-1},s,sr,sr^2,...sr^{n-1}\}$ tal que se cumple:
> 1. Existe una operación asociativa en $D_n$, denotada $\circ$ o por yuxtaposición (escribir dos elementos juntos).
> 2. Para todo $a\in D_n$, $ea=a$.  
> 3. $r^n=e$, $s^2=e$, $srs=r^{n-1}$ y la operación es la composición.
> Luego, $(D_n,\circ)$ es un grupo.

>[!demostracion] Demostración
> Sea $D_n=\{e,r,r^2,...r^{n-1},s,sr,sr^2,...sr^{n-1}\}$ y $r^n=e$, $s^2=e$, $srs=r^{n-1}$ bajo composición. Queremos mostrar que se cumplen los 4 axiomas de grupo. Para efectos de esta demostración, $x\in [0,n-1]$ asume que $x$ es entero.
> 
> 1. Por hipótesis, la operación $\circ$ es asociativa. Por lo tanto se cumple el axioma de asociatividad en $(D_n,\circ)$.
> 2. Para el neutro, por hipótesis $e$ es el neutro. Por lo tanto se cumple el axioma de neutro en $(D_n,\circ)$.
> 3. Para el inverso, como todo elemento de $D_n$ se puede escribir como $r^k$ o $sr^k$ con $k \in [0,n-1]$, podemos separar el problema en dos casos:
>
> 3.1. Sea $k \in [0,n-1]$. Tengamos $r^k$. Sea $P(t): (r^t)^{-1}=r^{n-t}$. $P(0): (r^0)^{-1}=r^{n-0}$ equivale a $e^{-1}=r^n$. Como $ee=e$, $e^{-1}=e$. Por lo tanto es equivalente a $r^n=e$, por lo que $P(0)$ es verdadera. Ahora, sea $P(x)$ verdadera para algún $x \in [0,n-2]$. Luego, $(r^x)^{-1}=r^{n-x}$. Multiplicando por $r^{-1}$ por la izquierda a ambos lados: $r^{-1}(r^x)^{-1}=r^{-1}r^{n-x}$. Por propiedades, $r^{-1}(r^{-1})^x=r^{-1}r^{n-x}$, luego $(r^{-1})^{x+1}=r^{n-(x+1)}$. Luego $P(x+1)$ es verdadera. Como $x \in [0,n-2]$, $x+1 \in [1,n-1]$ recorre todo el resto de casos. Luego por inducción, para todo $t \in [0,n-1]$ se cumple $(r^t)^{-1}=r^{n-t}$. Como $t \in [0,n-1]$, $-t \in [1-n,0]$ y por lo tanto $n-t \in [1,n]$. Como $r^n=e=r^0$, entonces $r^{n-t}$ se puede escribir como $r^w$ con $w \in [0,n-1]$. De este modo, $r^{n-t}=(r^t)^{-1} \in D_n$.
>
> Antes del siguiente caso, demostraremos una propiedad que será útil en un momento. Como  $r^n=e$, obtenemos $rr^{n-1}=e$ por lo que $r^{-1}=r^{n-1}$. Ahora, como $srs=r^{-1}$, multiplicando por $s$ a la izquierda y a la derecha a ambos lados, $s^2rs^2=sr^{-1}s$, por lo tanto $r=sr^{-1}s$. Sea $P(t):r^t=sr^{-t}s$. $P(0): r^0=sr^{0}s$, luego $e=ss$, por lo que $P(0)$ es verdadera. Ahora, sea $P(x)$ verdadera para algún $x \in [0,n-2]$. Luego: $r^x=sr^{-x}s$. Multiplicando por la izquierda por $r$ al lado izquierdo y por $sr^{-1}s$ al lado derecho, lo cual es válido porque son equivalentes: $rr^x=sr^{-1}ssr^{-x}s$, luego $r^{x+1}=sr^{-1}r^{-x}s$, y por lo tanto $r^{x+1}=sr^{-(x+1)}s$. Luego $P(w) \implies P(w+1)$. Con el mismo argumento del punto anterior, por inducción, para todo $t\in [0,n-1]$ se cumple $r^t=sr^{-t}s$.
>
> 3.2. Sea $k \in [0,n-1]$. Tengamos $(sr^k)(sr^k)=(sr^ks)r^k$. Por el punto anterior, $r^k=sr^{-k}s$. Rápidamente multiplicando por $s$ a la izquierda y a la derecha obtenemos $sr^ks=r^{-k}$. Sustituyendo: $(sr^ks)r^k=r^{-k}r^k=e$. Luego $(sr^k)(sr^k)=e$, por lo tanto $(sr^k)^{-1}=sr^k$.
>
> Como estos dos casos abarcan todos los elementos de $D_n$, se demostró que para todo elemento en $D_n$ existe un inverso. Por lo tanto, se cumple el axioma de inverso en $(D_n,\circ)$.
>
> 4. Para la clausura, queremos demostrar que la operación de dos elementos cualquiera de $D_n$ resulta en un elemento de $D_n$. Como todo elemento de $D_n$ se puede escribir como $r^k$ o $sr^k$ con $0\leq k \leq n-1$, podemos separar el problema en casos:
>
> 4.1. Sean $p,q \in [0,n-1]$. Luego, $r^p \circ r^q=r^{p+q}$. Sea $p+q=kn+c$, con $k \in \mathbb{Z}$ y $c \in [1,n-1]$ sin pérdida de generalidad. Luego: $r^{p+q}=r^{kn+c}=r^{kn}·r^c=(r^n)^k·r^c$. Como $r^n=e$, sustituyendo: $(r^n)^k·r^c=(e)^k·r^c=r^c$. Como $c \in [1,n-1]$, $r^c \in D_n$. Por lo tanto $r^p \circ r^q \in D_n$.
>
> 4.2. Sean $p,q \in [0,n-1]$. Tengamos $r^p \circ sr^q$. Como se demostró previamente, para todo $z\in \mathbb{N}$ se cumple $r^z=sr^{-z}s$, y por lo tanto aplica para $p$ y $q$. Luego, $r^p=sr^{-p}s$. Sustituyendo en $r^p \circ sr^q$, obtenemos $sr^{-p}ssr^q=sr^{-p}r^q=sr^{q-p}$. Sea $p-q=kn+c$, con $k \in \mathbb{Z}$ y $c \in [1,n-1]$ sin pérdida de generalidad. Luego $sr^{q-p}=sr^{kn+c}=s(r^n)^kr^c=sr^c$. Como $c \in [1,n-1]$, $sr^c \in D_n$. Por lo tanto $r^p\circ sr^q \in D_n$.
>
> 4.3. Sean $p,q \in [0,n-1]$. Tengamos $sr^p \circ r^q$. Sabemos que para todo $z\in \mathbb{N}$ se cumple $r^z=sr^{-z}s$, y por lo tanto aplica para $p$ y $q$. Luego, $r^p=sr^{-p}s$. Sustituyendo en $sr^p \circ r^q$, obtenemos $ssr^{-p}sr^q=r^{-p}sr^q$. Sea $-p=kn+c$, con $k \in \mathbb{Z}$ y $c \in [1,n-1]$ sin pérdida de generalidad. Luego: $r^{-p}sr^q=r^{kn+c}sr^q=(r^n)^kr^csr^q=r^csr^q$. Como $c,q \in [1,n-1]$, en el caso anterior se demostró $r^c\circ sr^q \in D_n$. Por lo tanto $sr^p \circ r^q \in D_n$.
>
> 4.4. Sean $p,q \in [0,n-1]$. Tengamos $sr^p \circ sr^q$. Sabemos que para todo $z\in \mathbb{N}$ se cumple $r^z=sr^{-z}s$, y por lo tanto aplica para $p$ y $q$. Luego, $r^p=sr^{-p}s$. Sustituyendo en $sr^p \circ sr^q$, obtenemos $ssr^{-p}ssr^q=r^{-p}r^q$. Sea $-p=kn+c$, con $k \in \mathbb{Z}$ y $c \in [1,n-1]$ sin pérdida de generalidad. Luego: $r^{-p}r^q=r^{kn+c}r^q=(r^n)^kr^cr^q=r^cr^q$. Como $c,q \in [1,n-1]$, en el primer caso se demostró $r^c\circ r^q \in D_n$. Por lo tanto $sr^p \circ sr^q \in D_n$.
>
> Como se han descrito todos los casos de operación de dos elementos del conjunto, queda demostrada la clausura en $(D_n,\circ)$. Como se comprobaron los 4 axiomas, $(D_n,\circ)$ es un grupo.

 Esta bestia de teorema nos permitió concluir varios resultados del grupo diedral. Obtuvimos $r^k=sr^{-k}s$, $r^{-k}=sr^ks$, $(r^k)^{-1}=r^{n-k}$, $(sr^k)^{-1}=sr^k$, y algunos resultados más profundos: como la demostración se hizo de forma abstracta sin recurrir a las propiedades geométricas de $r$ y $s$, podemos decir que el grupo se define completamente gracias a las tres propiedades fundamentales, $r^n=e$, $s^2=e$ y $srs=r^{n-1}$. Con estas es suficiente para concluir que cualquier combinación de rotaciones y reflexiones siempre resulta en una rotación o una reflexión, además de que las simetrías de un polígono regular obedecen las leyes de teoría de grupos.

 Más adelante miraremos otro enfoque con el cual interpretar el grupo diedral. 