/*
Ordenamiento Rápido (Opcional)
Objetivos:
Entrevista técnica práctica
Implementar quicksort
Ordenar una matriz no ordenada sin valores duplicados
Usando lo que aprendiste del módulo anterior, implementa quicksort!

Comienza escribiendo el código para el algoritmo de partición de Hoare. Recuerda que necesitaremos llamar a esta función para particionar no solo toda la matriz, sino también secciones de la matriz. Por lo tanto, nuestra función debe recibir no solo la matriz para particionar, sino también los límites para indicar la parte de la matriz que se está dividiendo. ¡No olvides devolver la posición del valor de pivote!

Una vez que tenemos una forma de particionar, podemos pensar en escribir nuestra función de clasificación rápida. Quicksort llamará al algoritmo de partición y lo pasará a la matriz para ordenar y los límites. Dado que la partición devuelve la posición de pivote, quicksort podrá usar la posición de pivote para volver a realizar el procedimiento, pero con límites diferentes.

Considera: ¿Dónde será la llamada recursiva? ¿Cuándo sabemos que una parte de la matriz ha sido ordenada? ¿Cuándo sabemos que se ha ordenado toda la matriz?

Bono 1:   Se utilizan diferentes estrategias para elegir el pivote. Cualquier pivote funcionaría, entonces, ¿por qué no elegir un pivote fácil, como el valor más a la izquierda? La respuesta es que la complejidad del tiempo podría aumentar considerablemente si tuviéramos que llamar a quicksort en una matriz que ya está ordenada . Diagrama esto y determina por qué esto es cierto.

Bonus 2:  ¿Cuál es la complejidad del tiempo Big O de este algoritmo?

Bonus 3:  La complejidad del tiempo Big O de quicksort en realidad no es nada impresionante. Entonces, ¿por qué se llama quicksort? Recuerde que Big O es para el peor de los casos. En este caso, es poco probable que se encuentre el peor de los casos: es cuando tratamos de ordenar rápidamente una matriz ordenada y asignar el pivote a un valor de borde. Usamos Big Omega para hablar sobre el mejor escenario y Big Theta para hablar sobre el caso promedio . ¿Cuáles son las complejidades temporales de Big Omega y Big Theta de quicksort?
*/

let arreglo = [1,5,3,7,8,20,4]

function ordenar(arr){
    var particion = arr.length;
    particion2 = Math.floor(Math.random()*particion);
    for(var i=0; i<arr.length; i++){
        
    }
    console.log(particion2);
}

ordenar(arreglo);