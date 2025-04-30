/* =======================
	FUNCIONES + PARÁMETROS
======================= */

// Fácil
// Función que recibe un nombre y devuelve "Hola, [nombre]" 
// (evita el error de pasar variable no definida).

function saludo(name) {
	return `Hola, ${name}`
}

let saludar = saludo("Alex");
console.log(saludar);

// Intermedio
// Función flecha que recibe una temperatura en grados Celsius 
// y devuelve la equivalente en Fahrenheit (usa return correcto).

let temperature = (grade) => {
	return `La temperatura es de ${grade * 1.8 + 32} ºF`
}

// Difícil
// Función que recibe tres números y devuelve el mayor. Si alguno 
// no se pasa, que sea 0 por defecto.
// Usa parámetros opcionales y Math.max() para evitar comparaciones incorrectas.

function numbers(numberOne = 0, numberTwo = 0, numberThree = 0) {
	return Math.max(numberOne, numberTwo, numberThree);
}

/* =======================
	ARRAYS Y MÉTODOS
======================= */

// Fácil
// Dado el array [18, 21, 16, 25, 14], recórrelo con un bucle for 
// y cuenta cuántos son mayores de edad.
// (Recuerda usar array[i] en vez de array directamente).

let years = [18, 21, 16, 25, 14]
let adult = 0;

for (let i = 0; i < years.length; i++) {
	if (years[i] >= 18) {
		console.log("Esta edad es considerada mayor de edad")
		adult++;
	} else {
		console.log("Esta edad es considerada menor de edad")
	}
}

console.log("Hay un total de", adult, "edades mayores de edad.")

// Intermedio
// Dado un array de palabras, filtra solo las que tengan más de 6 letras. 
// Luego muestra cada una con forEach().

let palabras = ['teclado', 'patinete', 'reloj', 'mando', 'monitor']

let palabrasLargas = palabras.filter(palabra => palabra.length > 6)

palabrasLargas.forEach(p => console.log(p));


// Difícil
// Tienes este array:
// const gastos = [
//   { nombre: "alquiler", cantidad: 400 },
//   { nombre: "comida", cantidad: 250 },
//   { nombre: "transporte", cantidad: 60 },
//   { nombre: "suscripciones", cantidad: 90 }
// ];
//
// 1. Filtra los gastos mayores a 100€
// 2. Calcula el total con reduce()
// 3. Si el total supera 600€, muestra "Revisa tus gastos", si no 
// "Gasto controlado"

const gastos = [
	{ nombre: "alquiler", cantidad: 400 },
	{ nombre: "comida", cantidad: 250 },
	{ nombre: "transporte", cantidad: 60 },
	{ nombre: "suscripciones", cantidad: 90 }
]

let gastosMayores = gastos.filter(gasto => gasto.cantidad > 100)

let total = gastos.reduce((acc, gasto) => acc + gasto.cantidad, 0)

if (total > 600){
	console.log("Revisa tus gastos")
}else{
	console.log("Gasto controlado")
}