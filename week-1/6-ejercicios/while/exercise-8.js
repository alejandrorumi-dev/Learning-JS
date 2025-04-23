/*
Ejercicio 1

Genera un número aleatorio entre 1 y 10. El usuario 
debe adivinarlo. Mientras no lo acierte, sigue pidiendo 
números y da pistas.
*/

let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let intento;
let contadorIntentos = 0;

while (intento !== numeroSecreto) {

	intento = parseInt(prompt("Introduce un número entre 1 y 10"));
	contadorIntentos++;

	if (intento > numeroSecreto){
		console.log("El número secreto es menor");
	}else if (intento < numeroSecreto){
		console.log("El número secreto es mayor");
	}
}

console.log("¡Correcto! Has adivinado el número secreto");