/*
Ejercicio 1

Pide al usuario un número y muestra la tabla de 
multiplicar del 1 al 10 para ese número.
*/

let numero = parseInt(prompt("Dame un número entre el 1 y el 9"));

for (let i = 1; i <= 10; i++){
	let resultado = numero * i;
	console.log(resultado);
}