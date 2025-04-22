/*
🧠 Ejercicio: Calculadora de edad canina

Sabemos que 1 año humano equivale a 7 años de un perro.
Crea un programa que:

- Guarde tu edad en una variable.

- Calcule tu edad en años perrunos.

- Determine si tu edad perruna es mayor que 100.

Crea un objeto con los resultados y muéstralo por consola.
*/

let edad = 28;
let edadPerruna = edad * 7;
let esMayor = edadPerruna > 100;

let resultados = {
	edad,
	edadPerruna,
	esMayor
}

console.log(resultados);