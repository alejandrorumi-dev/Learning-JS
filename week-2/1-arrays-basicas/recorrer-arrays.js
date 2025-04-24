/*
Ejercicio 5: Recorrer el array

Crea un bucle que recorra el array e imprima cada nombre en la consola.
*/

let nombres = ["Alex", "Juan", "Jose", "Carlos", "Ruben"];

// Bucle que recorre todo el array

for (let i = 0; i < nombres.length; i++) {

	/*
	1. Se declara una variable 'i' con valor inicial 0.
	2. El bucle se ejecuta mientras 'i' sea menor que la longitud 
	del array (5 en este caso).
	3. En cada iteración, 'i' aumenta en 1 (i++).
	4. Esto permite acceder a cada elemento del array mediante 
	su índice: nombres[0], nombres[1], etc.
	*/
	
	console.log(nombres[i]);
}
