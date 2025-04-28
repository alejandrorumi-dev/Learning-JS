/* =======================
	Condicionales
======================= */

// Fácil
// Ejercicio: Indicar si un número es positivo o negativo.

let numero = 5;

if (numero >= 0) {
	console.log("El número es positivo");
} else {
	console.log("El número es negativo");
}


// Intermedio
// Ejercicio: Comparar dos números y decir cuál es mayor o si son iguales.

let numeroA = 5;
let numeroB = 8;

if (numeroA === numeroB) {
	console.log("Los dos números son iguales")
} else if (numeroA > numeroB) {
	console.log("Número A es mayor")
} else {
	console.log("Número B es menor")
}


// Difícil
// Ejercicio: Mensaje de edad (niño, adolescente, adulto, adulto mayor).

let edad = 18;

if (edad <= 12) {
	console.log("Eres un niño")
} else if (edad > 12 && edad <= 17) {
	console.log("Eres un adolescente")
} else if (edad >= 18 && edad <= 64) {
	console.log("Eres un adulto")
} else {
	console.log("Eres un adulto mayor")
}

/* =======================
	Bucles (for, while, do-while)
======================= */

// Fácil
// Ejercicio: Mostrar números del 1 al 5 con for.

for (let i = 1; i <= 5; i++) {
	console.log(i);
}


// Intermedio
// Ejercicio: Mostrar números pares hasta un número con while.

let pedirNumero = parseInt(prompt("Dime un número entre 1 y 100"));

while (pedirNumero % 2 === 0) {
	console.log(pedirNumero)
	if (pedirNumero > 100) {
		break;
	}
}


// Difícil
// Ejercicio: Pedir palabras hasta escribir "salir" con do-while.

do {
	let pedirPalabra = prompt("Dime una palabra. Escribe 'salir' para terminar");
	console.log(pedirPalabra)
} while (pedirPalabra !== "Salir")

/* =======================
	Funciones (declarativas, flecha, con return)
======================= */

// Fácil
// Ejercicio: Función que recibe número y devuelve el doble.

function number(n) {
	return n * 2;
}

let numDoble = number(5)
console.log(numDoble)

// Intermedio
// Ejercicio: Función flecha que recibe nombre y apellido y saluda.

let persona = (nombre, apellido) => {
	return `Hola, me llamo ${nombre} ${apellido}`
}

console.log(persona("Alex", "Rumi"));

// Difícil
// Ejercicio: Función que recibe dos números y un operador y realiza operación.

function calculo(a, b) {
	return a + b;
}

let operacion = calculo(4, 3);
console.log("El resultado es:", operacion);

/* =======================
	Arrays básicas
======================= */

// Fácil
// Ejercicio: Crear array de frutas e imprimir la segunda fruta.

let frutas = ["Manzana", "Naranja", "Platano"];

console.log(frutas[1]);

// Intermedio
// Ejercicio: Crear array de nombres, agregar uno, eliminar el primero.

let nombres = ["Maria", "Carmen", "Jose", "Paco"]

nombres.push("Miguel");
nombres.shift();

console.log(nombres);

// Difícil
// Ejercicio: Array de números, agregar, eliminar y multiplicar por 2 con for.

let numeros = [1, 2, 3, 4, 5];

numeros.push(6);
numeros.shift();

for (let i = 1; i <= numeros; i++) {
	numeros * 2;
}

console.log(numeros);