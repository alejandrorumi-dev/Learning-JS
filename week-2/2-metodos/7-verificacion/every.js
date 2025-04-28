/*
every()

➡️ En [2, 4, 6, 8], verifica si todos son pares.
*/

let numeros = [2, 4, 6, 8]

let pares = numeros.every(num => num % 2 === 0)

console.log(pares);