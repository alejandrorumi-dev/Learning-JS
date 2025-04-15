/*
🔢 Ejercicio 1 - Calculadora simple

Pide al usuario dos números y una operación (+, -, *, /).

Usa condicionales para ejecutar la operación correcta 
y mostrar el resultado.
*/

let numeroUno = parseInt(prompt("Dame un número"));
console.log(numeroUno);

let numeroDos = parseInt(prompt("Dame otro número"));
console.log(numeroDos)

let operador = prompt("Dame una operador entre +, -, * y /");
console.log(operador);


if (numeroUno >= 0 && numeroDos >= 0){
	if (operador === "+"){
		console.log("El resultado es:", numeroUno + numeroDos);
	} else if (operador === "-"){
		console.log("El resultado es:", numeroUno - numeroDos);
	} else if (operador === "*"){
		console.log("El resultado es:", numeroUno * numeroDos);
	} else if (operador === "/"){
		console.log("El resultado es:", numeroUno / numeroDos);
	} else {
		console.log("Operador no válido.")
	}
} else {
	console.log("Introduce números iguales o superiores a 0");
}