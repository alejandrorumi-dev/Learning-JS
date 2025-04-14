/*
💡 Ejercicio: Control de acceso

Crea un programa que evalúe si una persona puede entrar a un club nocturno.

- Si la edad es mayor o igual a 18, puede entrar.

- Si es menor de 18, no puede entrar.

- Además, si la persona está en una lista VIP, puede entrar aunque tenga menos de 18.

📝 Requisitos:

Define variables como:

- edad

- esVIP (true o false)

Usa una estructura if / else para mostrar en consola un mensaje adecuado:

- "Bienvenido al club" si puede entrar.

- "Acceso denegado" si no puede.

*/

let edad = 17;
let esVIP = false;

if (edad >= 18 || esVIP) {
	console.log("Bienvenido al club");
} else {
	console.log("Acceso denegado");
}

