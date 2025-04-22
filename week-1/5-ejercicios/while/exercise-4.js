/*
Ejercicio: Suma de números positivos

Enunciado:

Crea un programa que pida al usuario ingresar números. 
El programa debe sumar todos los números ingresados y 
detenerse solo cuando el usuario ingrese un número negativo.
 Al final, muestra la suma de todos los números positivos ingresados.
*/

let suma = 0;
let numero;

while (numero >= 0){
	numero = parseInt(prompt("Introduce un número positivo (negativo para detener el programa)"));
	if (numero >= 0){
		suma += numero;
	}
}

console.log("La suma de los números ingresados es:", suma);