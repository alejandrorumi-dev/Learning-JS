/*
splice()

➡️ En [1, 2, 3, 4, 5], elimina el 3 y agrega 
el 99 en su lugar.
*/

let numeros = [1, 2, 3, 4, 5]

numeros.splice(1, 1, 99); 
// POSICIÓN 2 [3]; ELIMINA UN ELEMENTO; AGREGA EL NÚMERO 99 

console.log(numeros);