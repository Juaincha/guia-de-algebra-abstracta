Una vez demostradas las propiedades bilaterales del neutro y el inverso, es momento de describir el resto de propiedades. Consideramos que $(G,·)$ es grupo.

>[!general] Unicidad del neutro
>>[!teorema] Teorema
>> Existe un único $e \in G$ tal que para todo $a \in G$, $e·a=a$.
>
>>[!demostracion] Demostración
>> Sean $e_1,e_2 \in G$ tal que para todo $a \in G$, $e_1·a=a$ y $e_2·a=a$. Sea $a=e_2$. Luego por la primera fórmula, $e_1·e_2=e_2$. Por la **bilateralidad del neutro,** tomando el neutro por la derecha $e_1·e_2=e_1$. Por transitividad, $e_1=e_2$. Como todo par de neutros son iguales, existe un único $e \in G$ tal que para todo $a \in G$, $e·a=a$.

>[!general] Unicidad del inverso
>>[!teorema] Teorema
>>Para todo $a \in G$, existe un único $a^{-1} \in G$ tal que $a^{-1}·a=a$.
>
>>[!demostracion] Demostración
>> Sea $a \in G$. Sean $b_1,b_2 \in G$ tal que $b_1·a=e$, $b_2·a=e$. Igualando las ecuaciones por $e$, obtenemos $b_1·a=b_2·a$. Multiplicando a ambos lados por $b_1$, obtenemos $(b_1·a)·b_1=(b_2·a)·b_1$. Por el axioma de **asociatividad,** $(b_1·a)·b_1=b_1·(a·b_1)$ y $(b_2·a)·b_1=b_2·(a·b_1)$. Por **bilateralidad del inverso,** $a·b_1=e$, $a·b_2=e$. Sustituyendo, obtenemos $b_1·(a·b_1)=b_1·e=b_1$ y $b_2·(a·b_2)=b_2·e=b_2$. Por transitividad, $b_1=b_2$. Como todo par de inversos son iguales, existe un único $a^{-1}$ tal que $a^{-1}·a=e$.

Desde ahora en adelante,se obviará la clausura y la asociatividad, y no se pondrán paréntesis para separar operaciones de grupo. También se obviará que $a^{-1}$ es inverso de $a$, y no se enunciará cada axioma. Añadiendo un par de propiedades del inverso:

>[!general] Inverso del inverso
>>[!teorema] Teorema
> >Para todo $a\in G$, $(a^{-1})^{-1}=a$.
>
>>[!demostracion] Demostración
>> Sea $a \in G$. Tengamos $(a^{-1})^{-1}$. Sabemos $(a^{-1})^{-1}=(a^{-1})^{-1}·e$. Con $e=a^{-1}·a$, obtenemos $(a^{-1})^{-1}·e=(a^{-1})^{-1}·a^{-1}·a$. Como $(a^{-1})^{-1}·a^{-1}=e$, obtenemos $(a^{-1})^{-1}·a^{-1}·a=e·a=a$. Por transitividad, $(a^{-1})^{-1}=a$. Como $a \in G$ es arbitrario, para todo $a \in G$, $(a^{-1})^{-1}=a$.

>[!general] Inverso del producto
>>[!teorema] Teorema
> >Para todo $a,b\in G$, $(a·b)^{-1}=b^{-1}·a^{-1}$.
>
>>[!demostracion] Demostración
>> Sean $a,b \in G$. Como $(a·b)^{-1}$ es inverso de $a·b$, tenemos $(a·b)^{-1}·a·b=e$. Multiplicando a ambos lados por $b^{-1}$ por la derecha: $(a·b)^{-1}·a·b·b^{-1}=e·b^{-1}$, luego $(a·b)^{-1}·a=b^{-1}$. Multiplicando a ambos lados por $a^{-1}$ por la derecha: $(a·b)^{-1}·a·a^{-1}=b^{-1}·a^{-1}$, luego $(a·b)^{-1}=b^{-1}·a^{-1}$. Por lo tanto para todo $a,b \in G$, $(a·b)^{-1}=b^{-1}·a^{-1}$.

Estas propiedades serán muy útiles más adelantes. Para hablar de una multiplicación iterada de un mismo elemento, podemos definir exponentes de la siguiente manera:

>[!definicion] Definición
> Para todo $a \in G$, $n \in \mathbb{N}$, definimos $a^1=a$, y $a^{n+1}=a·a^n$.

De esta forma, $a^n=a·a·a···a$, $n$ veces. Para demostrar las propiedades de esta operación, utilizamos el principio de inducción.

>[!general] Suma de exponentes
>>[!teorema] Teorema
>> Para todo $a \in G$, $m,n \in \mathbb{N}$, $a^m·a^n=a^{m+n}$.
>
>>[!demostracion] Demostración
>> Sean $a \in G$, $n \in \mathbb{N}$ y para $m \in \mathbb{N}$,  $P(m): a^m·a^n=a^{m+n}$. $P(1): a^1·a^n=a^{1+n}$, y por definición $a^1=a$. Luego $P(1): a^1·a^n=a·a^n=a^{1+n}$. Como $1+n=n+1$, $a·a^n=a^{n+1}$. Luego por definición, $P(1)$ es verdadera. Ahora, sea $P(k)$ verdadera, con $k \in \mathbb{N}$.  Luego, $a^k·a^n=a^{k+n}$. Multiplicando a ambos lados por $a$ por la izquierda, obtenemos $a·a^k·a^n=a·a^{k+n}$. Por definición, $a·a^k=a^{k+1}$. Por definición, $a·a^{k+n}=a^{k+n+1}$. Como $k+n+1=k+1+n$, obtenemos $a·a^{k+n}=a^{k+1+n}$. Sustituyendo en la ecuación: $a^{k+1}·a^n=a^{k+1+n}$, y justamente $P(k+1): a^{k+1}·a^n=a^{k+1+n}$. Por lo tanto $P(k+1)$ es verdadera. Como $P(1)$ es verdadera y $P(k) \implies P(k+1)$, por inducción, para todo $m \in \mathbb{N}$, $a^m·a^n=a^{m+n}$. Como $a$ y $n$ son arbitrarios, para todo $a \in G$, $m,n \in \mathbb{N}$, $a^m·a^n=a^{m+n}$.

>[!general] Inversos con exponentes
>>[!teorema] Teorema
>> Para todo $a\in G$, $n \in \mathbb{N}$,  ${(a^{-1})}^n={(a^n)}^{-1}$.
>
>>[!demostracion] Demostración
>>Sea $a\in G$ y $P(n):{(a^{-1})}^n={(a^n)}^{-1}$. Luego, $P(1): {(a^{-1})}^1={(a^1)}^{-1}$. Por definición, $a^1=a$, ${(a^{-1})}^1=a^{-1}$. Luego $P(1): a^{-1}=a^{-1}$. Por lo tanto, $P(1)$ es verdadera.
>>
>> Sea $P(k)$ verdadera, con $k\in \mathbb{N}$. Tengamos ${(a^{-1})}^{k+1}$. Por definición, ${(a^{-1})}^{k+1}=a^{-1}·{(a^{-1})}^k$. Como $P(k)$ es verdadera, ${(a^{-1})}^k={(a^k)}^{-1}$. Sustituyendo, $a^{-1}·{(a^k)}^{-1}$. Por el inverso del producto, $a^{-1}·{(a^k)}^{-1}={(a^k·a)}^{-1}$. Por suma de exponentes, ${(a^k·a)}^{-1}={(a^{k+1})}^{-1}$. Por lo tanto obtenemos ${(a^{-1})}^{k+1}={(a^{k+1})}^{-1}$, por lo que $P(k+1)$ es verdadera. Como $P(1)$ es verdadera y $P(k) \implies P(k+1)$, por inducción: para todo $a\in G$, $n \in \mathbb{N}$,  ${(a^{-1})}^n={(a^n)}^{-1}$.

Con estas dos propiedades es natural extender los exponentes a todos los enteros de la siguiente forma:

>[!definicion] Definición
> Para todo $a \in G$, $n \in \mathbb{Z}$, definimos $a^1=a$, $a^{n+1}=a·a^n$, y para $n<0$, $a^{-n}={(a^n)}^{-1}={(a^{-1})}^n$.

De este modo, con $n=-1$, obtenemos $a^{-1+1}=a·a^{-1}$, por lo que $a^0=e$. Además, te invito a verificar y a demostrar que las propiedades anteriores se extienden para todo $n\in \mathbb{Z}$. Continuando con las propiedades: 

>[!general] Producto de exponentes
>> [!teorema] Teorema
>> Para todo $a \in G$, $m,n \in \mathbb{Z}$, se cumple $(a^m)^n=a^{mn}$.
>
>> [!demostracion] Demostración
>> Sean $a\in G$, $m \in \mathbb{Z}$. Sea $P(n): (a^m)^n=a^{mn}$. $P(1): (a^m)^1=a^{1m}$, $a^m=a^m$. Luego $P(1)$ es verdadera. Ahora, sea $P(k)$ verdadera. Luego $(a^m)^k=a^{mk}$. Multiplicando por $a^m$ por la izquierda a ambos lados: $a^m·(a^m)^k=a^m·a^{mk}$. Por suma de exponentes de igual base: $a^m·(a^m)^k=(a^m)^1·(a^m)^k=(a^m)^{k+1}$ en la izquierda, $a^m·a^{mk}=a^{mk+m}=a^{m(k+1)}$ en la derecha. Luego obtenemos $(a^m)^{k+1}= a^{m(k+1)}$. Como $P(1)$ es verdadera y $P(k) \implies P(k+1)$, por inducción, para todo $n\in \mathbb{N}$ se cumple $(a^m)^n=a^{mn}$.
>>
>> Ahora, sea $s \in \mathbb{Z}^-$ de forma que $s=-n$, donde $n\in \mathbb{N}$. Luego, $(a^m)^s=(a^m)^{-n}=((a^m)^n)^{-1}$. Como ya se demostró $(a^m)^n=a^{mn}$, sustituyendo: $((a^m)^n)^{-1}=(a^{mn})^{-1}=a^{-mn}$. Sustituyendo $-n=s$: $a^{-mn}=a^{ms}$. Por lo tanto $(a^m)^s=a^{ms}$, por lo que la propiedad aplica para números negativos. Para incluir el $0$, notamos que $(a^m)^0=e=a^0=a^{m0}$, por lo que $(a^m)^0=a^{m0}$ y por lo tanto la propiedad se cumple para todo $n \in \mathbb{Z}$. Como $a\in G$ y $m\in \mathbb{Z}$ son arbitrarios, para todo$a\in G$, $m,n\in \mathbb{Z}$ se cumple  $(a^m)^n=a^{mn}$.

Con estas propiedades básicas es suficiente para poder trabajar con grupos. Desde el próximo capítulo en adelante se verán ejemplos importantes para aplicar las propiedades que hemos aprendido hasta ahora.
