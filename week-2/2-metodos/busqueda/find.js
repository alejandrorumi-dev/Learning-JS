/*
find()

➡️ En [10, 20, 30, 40], encuentra el primer 
número mayor a 25.
*/

let numeros = [10, 20, 30, 40, 50]

let mayorQue = numeros.find(num => num > 25);

console.log(mayorQue);