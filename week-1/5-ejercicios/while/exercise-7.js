/*
Ejercicio: Juego de adivinar la palabra

Enunciado:

Crea un juego en el que el programa le da al usuario una 
palabra para adivinar. El usuario tiene que ingresar una palabra, 
y el programa le dice si la palabra es correcta o no. El programa 
sigue pidiendo hasta que el usuario adivine la palabra correcta.
*/

const secretWord = "Almeria";
let userWord;

while (userWord !== secretWord) {
	userWord = prompt("Introduce una palabra");

	if (palabra !== palabraCorrecta) {
		console.log("¡Palabra incorrecta! Intenta de nuevo.");
	}
}

console.log("¡Felicidades! Has adivinado la palabra correcta.");