/* 

EJERCICIO 1 

1. Crea las siguientes variables en tu archivo script.js:

- primerNombre (un string con tu primer nombre).

- segundoNombre (un string con tu segundo nombre).

- edad (un número con tu edad).

- ciudad (un string con la ciudad donde vives).

- esEstudiante (un booleano que sea true si eres estudiante o false si no lo eres).

2. Crea un objeto llamado perfil con las siguientes propiedades:

- nombreCompleto (que combine primerNombre y segundoNombre).

- edad (usa la variable edad).

- ciudad (usa la variable ciudad).

- esEstudiante (usa la variable esEstudiante).

3. Imprime en la consola los valores de las variables y el objeto perfil con console.log().*/

let primerNombre = "Alejandro";
let segundoNombre = "Rumí Morales";
let ciudad = "Almería";
const edad = 28;
let esEstudiante = false;

let perfil = {
	nombreCompleto: `${primerNombre} ${segundoNombre}`,
	ciudad,
	edad,
	esEstudiante
}

console.log("Mi primer nombre es:", primerNombre);
console.log("Mis apellidos son:", segundoNombre);
console.log("La ciudad en la que vivo es:", ciudad);
console.log("Mi edad es:", edad);
console.log("Soy estudiante:", esEstudiante);
console.log(perfil);