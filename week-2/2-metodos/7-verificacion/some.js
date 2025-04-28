/*
some()

➡️ En [1, 3, 5, 8], verifica si hay al menos un número par.
*/

let numeros = [1, 3, 5, 8]

let numeroPar = numeros.some(num => num % 2 === 0)

console.log(numeroPar);