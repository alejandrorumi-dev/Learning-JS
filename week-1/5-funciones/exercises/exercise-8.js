/*
Ejercicio 8: Función recursiva

Enunciado:

Crea una función recursiva que calcule el factorial de un número.
*/

function factorial(n) {
	if (n === 0) {
		return 1;
	}

	return n * (factorial - 1);
}

console.log("El factorial de", n, "es:", factorial(n));

/*
Corrección de ChatGPT:

Comentarios:

- Has usado perfectamente la estructura de la recursividad: 
condicional base + retorno recursivo.

- Has elegido muy bien el caso base (n === 0) y la lógica general.

- Muy buen formato en la estructura de la función, clara y ordenada.

🛠️ Sugerencia:

function factorial(n) {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);

	** CORREGIDO: antes era (factorial - 1), 
	pero eso es un error de sintaxis **
}

let n = 5; // NECESARIO: declarar 'n' antes de usarlo en el console.log

console.log("El factorial de", n, "es:", factorial(n));

📊 Nota final: 7/10
*/