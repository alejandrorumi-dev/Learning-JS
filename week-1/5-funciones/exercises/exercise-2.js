/*
Ejercicio 2: Función que llama a otra función

Enunciado: 
Crea una función impuestoIVA que calcule el 21% de un precio. 
Luego, crea otra función precioTotal que use impuestoIVA para 
mostrar el precio con IVA incluido.
*/

let precioOriginal = 100;

function impuestoIVA(precio){
	return precio * 1.21;
}

function precioTotal(precioOriginal){
	return precioTotal(impuestoIVA);
}

console.log("El precio total con IVA es:", precioTotal(precioOriginal).toFixed(2), "€");

/*
Corrección de ChatGPT:

✅ Función impuestoIVA está correcta.
❌ precioTotal llamaba a sí misma, lo que generaría un bucle infinito.
✅ Corregido llamando a impuestoIVA(precio).
✅ Bien aplicado toFixed(2) para mostrar con decimales.

🛠️ Sugerencia:

let precioOriginal = 100;

function impuestoIVA(precio){
	return precio * 1.21;
}

function precioTotal(precio){
	// Llamamos a la función impuestoIVA pasándole el precio
	return impuestoIVA(precio);
}

console.log("El precio total con IVA es:", precioTotal(precioOriginal).toFixed(2), "€");

📊 Nota final: 6/10
*/