/* =======================
	FUNCIONES EN JAVASCRIPT
======================= */

// ✅ FÁCIL
// 1. Crea una función que reciba un nombre y devuelva un 
// saludo personalizado.
//    Ejemplo: "Hola, Pedro"

function saludo(name) {
	return `Hola, ${name}`
}

let saludar = saludo("Pedro")
console.log(saludar);

// 2. Crea una función que reciba un número y devuelva su doble.

function number(n) {
	let operacion = n * 2;
	return `El doble de ${n} es ${operacion} `
}

console.log(number(3));

// 3. Crea una función flecha que reciba un nombre y una edad, 
// y devuelva:
//    "Nombre: [nombre], Edad: [edad]"

let datos = (nombre, edad) => {
	return `Nombre: ${nombre}, Edad: ${edad}`
}

console.log(datos("Alex", 28));


// ✅ INTERMEDIO
// 4. Crea una función que reciba una palabra y devuelva true 
// si es un palíndromo (se lee igual al revés).

function esPalindromo(palabra) {
	let invertida = palabra.split('').reverse().join('');
	return palabra === invertida;
}

console.log(esPalindromo("abba")); // true
console.log(esPalindromo("hola")); // false

// 5. Crea una función que reciba un array de números y 
// devuelva el número mayor (sin usar Math.max).

function numeroMayor(arr) {
	let mayor = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > mayor) {
			mayor = arr[i];
		}
	}
	return mayor;
}

console.log(numeroMayor([10, 20, 5, 15, 22]));

// 6. Crea una función con parámetro opcional:
//    Si se recibe 1 número → lo devuelve elevado al cuadrado.
//    Si se reciben 2 números → los suma.

function numeros(x, y) {
	if (y === undefined) {
		return x * x;
	} else {
		return x + y;
	}
}

console.log(numeros(3));
console.log(numeros(2, 4));

// ✅ DIFÍCIL
// 7. Crea una función que reciba un array de objetos tipo:
//    [{ nombre: "Luis", edad: 20 }, { nombre: "Ana", edad: 17 }]
//    y devuelva solo los nombres de los mayores de edad.

let personas = [
	{nombre: "Luis", edad: 20},
	{nombre: "Ana", edad: 17}
]

let mayorDeEdad = personas.filter(mayor => mayor.edad >= 18 )

mayorDeEdad.forEach(person => console.log(person.nombre));

// 8. Crea una función que reciba dos números y un operador
// (como string: "+", "-", "*", "/") y devuelva el resultado.

function calculo(a, b, operator){
	if (operator === "+"){
		return a + b;
	}else if (operator === "-"){
		return a - b;
	}else if (operator === "*"){
		return a * b;
	}else if (operator === "/"){
		return a / b;
	}else{
		return `El operador es inválido`
	}
}

console.log(calculo(10, 5, "+"));

// 9. Crea una función recursiva que calcule el factorial de un número.
//    (Ejemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120)

function factorial(n){
	if (n === 0 || n === 1){
		return 1;
	}
	return n * factorial(n - 1);
}

console.log(factorial(5));
