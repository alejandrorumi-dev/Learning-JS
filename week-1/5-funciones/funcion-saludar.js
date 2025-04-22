/*
🧠 Ejercicio 1: Saludo personalizado

Enunciado:

Crea una función llamada saludar que reciba un nombre 
como parámetro y devuelva un saludo del tipo: "Hola, [nombre]!".
*/

function saludar(nombre){
	return "¡Hola, " + nombre + "!"; // return ` ¡Hola, ${nombre}!`;
}

let saludo = saludar("Alex");
console.log(saludo);