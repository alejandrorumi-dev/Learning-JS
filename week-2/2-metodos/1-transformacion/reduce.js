/*
reduce()

➡️ Suma todos los números de [1, 3, 5, 7, 9] usando reduce.
*/

let numeros = [1, 3, 5, 7, 9]

let suma = numeros.reduce((acc, num) => acc + num, 0)

console.log(suma);