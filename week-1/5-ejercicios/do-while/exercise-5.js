/*
💡 Enunciado: Juego de adivinar un número
Crea un programa que:

Genere un número aleatorio entre 1 y 20.

Le pida al usuario que adivine ese número.

Le diga si ha acertado o no.

Permita seguir intentando hasta que lo adivine.

Al final, muestra cuántos intentos necesitó el usuario para acertar.
*/

let numeroSecreto = 7;
let intento;
let intentosRealizados = 0;

do {
	let intento = prompt("Dime un número entre 1 y 20");
	intentosRealizados++;

	if (intento < numeroSecreto){
		console.log("El número secreto es más alto");
	}else if (intento > numeroSecreto){
		console.log("El número secreto es más bajo");
	}
} while (intento !== numeroSecreto);

console.log("¡Correcto! Has adivinado el número secreto en", intentosRealizados, "intento(s)");