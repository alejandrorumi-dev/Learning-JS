/* =======================
	Condicionales
======================= */

// Fácil
// Ejercicio: Dado un número, indicar si es par o impar.

let number = 5;

if (number % 2 === 0) {
	console.log(`El número ${number} es par`)
} else {
	console.log(`El número ${number} es impar`)
}

// Intermedio
// Ejercicio: Determinar si una persona puede votar (edad >= 18) 
// y tiene documento (true/false).

let year = 18;
let document;

if (year >= 18 && document === true) {
	console.log("Esta persona puede votar")
} else if (year >= 18 && document !== true) {
	console.log("La persona es mayor de edad, pero no puede votar")
} else {
	console.log("La persona no puede votar")
}

// Difícil
// Ejercicio: Evaluar el tipo de nota: 
// <5: Suspenso, 5-6: Aprobado, 7-8: Notable, 9-10: Sobresaliente.

let calification = 5;

if (calification >= 9 && calification <= 10) {
	console.log("Esta nota es un sobresaliente")
} else if (calification >= 7 && calification <= 8) {
	console.log("Esta nota es un notable")
} else if (calification >= 5 && calification <= 6) {
	console.log("Esta nota es un aprobado")
} else {
	console.log("Esta nota es un suspenso")
}


/* =======================
	Bucles (for, while, do-while)
======================= */

// Fácil
// Ejercicio: Mostrar los primeros 5 múltiplos de 3 con un bucle for.

let numberTwo = 3;

for (let i = 1; i <= 5; i++) {
	let operation = numberTwo * i;
	console.log("El resultado es:", operation)
}

// Intermedio
// Ejercicio: Usar while para sumar todos los números del 1 al 10.

let suma = 0;
let i = 1;

while (i <= suma) {
	suma += i;
	i++;
}

console.log("La suma total es:", suma)

// Difícil
// Ejercicio: Usar do-while para simular intentos de login (pedir 
// nombre hasta que sea "admin").

let userName = "admin";
let userWord;
let intentos = 0;

do {
	userWord = prompt("Dame un nombre de usuario para logearte")
	intentos++;
} while (userWord !== userName)

console.log(`Correcto, has introducido ${userName} en ${intentos} intento(s)`)

/* =======================
	Funciones (declarativas, flecha, return, opcionales)
======================= */

// Fácil
// Ejercicio: Función que recibe un nombre y devuelve "Hola, [nombre]".

function greeting(name) {
	return `¡Hola, ${name}!`;
}

let greet = greeting(Alex);
console.log(greeting);

// Intermedio
// Ejercicio: Función flecha que recibe una temperatura en °C 
// y la convierte a °F.

let temperature = (grade) => {
	return `La temperatura es de ${grade} °F`
}

console.log(temperature(20));

// Difícil
// Ejercicio: Función que recibe 3 números y devuelve el mayor. Si 
// alguno no se pasa, asumir 0 por defecto.

function numbers(numberOne = 0, numberTwo = 0, numberThree = 0) {
	if (numberOne > numberTwo && numberThree) {
		return `El número ${numberOne} es el mayor`
	} else if (numberTwo > numberOne && numberThree) {
		return `El número ${numberTwo} es el mayor`
	} else {
		return `El número ${numberThree} es el mayor`
	}
}

console.log(numbers(10, 15, 5));

/* =======================
	Arrays básicas
======================= */

// Fácil
// Ejercicio: Crear un array de colores y mostrar el último color.

let colors = ['red', 'yellow', 'green']

console.log("El último color es:", colors[2]);

// Intermedio
// Ejercicio: Crear un array con 3 tareas, agregar una con unshift y 
// eliminar la del medio con splice.

let tasks = ['study', 'clean', 'order']

tasks.unshift('program')

tasks.splice(2, 1);

console.log("Las tareas son:", tasks);

// Difícil
// Ejercicio: Crear array de edades. Recorrerlo con for y contar cuántas 
// son mayores de edad (>=18).

let years = [18, 15, 23, 30, 7]
let adult = 0;

for (let i = 0; i < years.length; i++) {
	if (years >= 18) {
		console.log("Esta edad es considerada mayor de edad")
		adult++;
	} else {
		console.log("Esta edad es considerada menor de edad")
	}
}

console.log("Hay un total de:", adult, "edades consideradas mayores de edad")


/* =======================
	Métodos de arrays (map, filter, reduce, etc.)
======================= */

// Fácil
// Ejercicio: Usar map para convertir [1, 2, 3, 4] en [true, false, 
// true, false] según si son impares.

let numbers = [1, 2, 3, 4]

let boolean = numbers.map(num => num % 2 !== 0)

console.log(boolean);

// Intermedio
// Ejercicio: Filtrar de un array de palabras solo las que tengan más 
// de 5 letras. Mostrarlas con forEach.

let words = ['javascript', 'html', 'angular', 'css', 'typescript']

let fiveLetters = words.filter(letter => letter.length >= 5)

fiveLetters.forEach(word => console.log("Palabra: ", word));

// Difícil
// Ejercicio: Dado un array de gastos [{desc: "comida", cant: 30}, 
// {desc: "transporte", cant: 15}, ...],
// filtra los mayores de 20€, calcula el total con reduce y muestra 
// "Mucho gasto" o "Controlado" según si supera 50€.

let bills = [{ desc: "comida", cant: 30 },
{ desc: "transporte", cant: 15 },
{ desc: "gimnasio", cant: 20 },
{ desc: "ocio", cant: 10 },
{ desc: "internet", cant: 40 }
]

let moreExpensive = bills.filter(cant => cant >= 20)

let total = bills.reduce((acc, cant) => acc + cant, 0)

if (total >= 50){
	bills.forEach(cant => console.log("El total es: " + cant + ". Mucho gasto."))
}else{
	bills.forEach(cant => console.log("El total es: " + cant + ". Controlado."));
}