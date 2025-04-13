/*
🧪 Ejercicio Lección 1 - Variables y Objetos

Crea un programa que guarde los siguientes datos de una mascota:

- Nombre

- Tipo de animal (perro, gato, etc.)

- Edad

- Está vacunado (sí o no → booleano)

Luego crea un objeto llamado mascota que contenga toda esta información, 
y finalmente muestra el objeto completo por consola.
*/

let nombre = "Tobby";
let tipoAnimal = "perro";
let edad = 4;
let estaVacunado = true;

let mascota = {
	nombre,
	tipoAnimal,
	edad,
	estaVacunado
}

console.log(mascota);