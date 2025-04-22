/*
Ejercicio 5: Contador de números pares

Enunciado:

Crea un programa que cuente cuántos números pares hay 
entre 1 y un número ingresado por el usuario.
*/

let numero = parseInt(prompt("Ingresa un número:"));
let contador = 0;
let i = 1;

while (i <= numero) {
	if (i % 2 === 0) {
		contador++;  // Si i es par, se aumenta el contador
	}
	i++;  // Aquí es donde se aumenta i en cada iteración
}

console.log("Hay", contador, "números pares entre 1 y", numero);

