//Comencemos con una función prototipo para calcular si un número es primo ...
Number.prototype.isPrime = function () {
    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while (primeCount < 1e4) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

/*hay algunos trucos que podemos usar para acelerar esto, por ejemplo , 
no necesitamos buscar más allá de la raíz cuadrada del número que estamos verificando para ver
 si es divisible por números más pequeños. Intenta
 reescribir la función anteriorisPrime() y verifica cuánto más rápido se ejecuta. Deberías ver resultados similares a la imagen de abajo.
*/

Number.prototype.isPrime1 = function () {
    if (this <= 1) {
        return false;
    }
    if (this <= 3) {
        return true;
    }
    if (this % 2 === 0 || this % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= this) {
        if (this % i === 0 || this % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

const { performance } = require('perf_hooks');
const start1 = performance.now();
let primeCount1 = 0;
let num1 = 2;
while (primeCount1 < 1e4) {
    if (num1.isPrime1()) {
        primeCount1++;
    }
    num1++;
}
console.log(`El 10,000º número primo es ${num1 - 1}`);
console.log(`Esto tomó ${performance.now() - start1} milisegundos en ejecutarse`);


//¿Qué implementación de Fibonacci debería ser más rápida?
// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
console.log(rFib(20));
// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
console.log(iFib(20));

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);

//revertir la cadena pero mantener el orden de cada letra en cada de palabra
const reverseWords = (str)=> {
    // Dividir la cadena en palabras
    const words = str.split(" ");
    // Invertir el orden de las palabras
    const reversedWords = words.reverse();
    // Unir las palabras nuevamente en una cadena
    return reversedWords.join(" ");
}

const story2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversedStory = reverseWords(story2);

console.log(reversedStory);