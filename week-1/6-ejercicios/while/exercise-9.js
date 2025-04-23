/*
Ejercicio 2

Pide al usuario un número y suma todos 
los números desde 1 hasta ese número.
*/

let numero = parseInt(prompt("Dame un número"));
let suma = 0;
let i = 1;

while (i <= numero) {
	suma += i;
	i++;
}

console.log("La suma de los números del 1 al", numero, "es:", suma);
