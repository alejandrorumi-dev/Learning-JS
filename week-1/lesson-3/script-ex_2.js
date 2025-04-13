/*
🔢 Ejercicio Lección 2 - Operadores

Declara dos variables con valores numéricos 
(por ejemplo a = 15 y b = 4).
Calcula:

- La suma de ambos valores.

- La resta.

- La multiplicación.

- El módulo (resto de la división).

- Comprueba si a es mayor que b y guarda el resultado 
en una variable.

- Muestra todos los resultados por consola con 
mensajes descriptivos.
*/

let a = 15;
let b = 4;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let modulo = a % b;
let esMayor = a > b;

let operacion = {
	suma,
	resta,
	multiplicacion,
	modulo,
	esMayor
}

/*
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("Módulo (resto):", modulo);
console.log("¿Es mayor?", esMayor);
*/

console.log(operacion);