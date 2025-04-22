/*
Ejercicio: Adivina el número

Enunciado:

Genera un número aleatorio entre 1 y 10. Luego, 
pide al usuario que adivine el número. El programa 
debe continuar pidiendo intentos hasta que el usuario 
adivine correctamente.
*/

let numeroAleatorio = Math.floor(Math.random()*10) + 1;
let intento;
let contadorIntentos = 0;

while (intento !== numeroAleatorio){
	intento = parseInt(prompt("Introduce un número entre 1 y 10"));
	contadorIntentos++;
	if (intento > numeroAleatorio){
		console.log("El número secreto es menor al ingresado");
	} else if (intento < numeroAleatorio){
		console.log("El número secreto es mayor al ingresado");
	}
}

console.log("¡Felicidades! Has adivinado el número:", numeroAleatorio);
console.log("Número de intentos:", contadorIntentos);