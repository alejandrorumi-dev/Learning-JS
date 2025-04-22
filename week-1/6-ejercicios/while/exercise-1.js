/*
Imagina que tienes que pedir al usuario que ingrese 
un número hasta que ingrese un número positivo.
*/

let numero;

while (numero <= 0) {
	numero = parseInt(prompt("Introduce un número positivo"));
}

console.log("Número positivo ingresado:", numero);