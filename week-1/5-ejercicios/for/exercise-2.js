/*
🧾 Ejercicio: Venta de entradas para un cine

Un cine quiere automatizar la venta de entradas. 
Por cada persona se debe pedir:

- Edad.

- Día de la semana (puede ser “Lunes”, “Martes”, etc).

Las reglas del precio son:

- Menores de 5 años: entrada gratuita.

- De 5 a 17 años: 7 €.

- De 18 a 64 años: 12 €.

- Mayores de 64 años: 8 €.

- Si es miércoles, todas las entradas tienen 
un 50% de descuento (excepto las gratuitas).

Al final, debes mostrar:

- El total recaudado.**

- Cuántas personas entraron gratis.**

- Cuántas entradas se vendieron con descuento.**

- Cuántas personas entraron en total.**
*/

let cantidadPersonas = parseInt(prompt("¿Cuántas entradas quieres?"));

let entradasGratuitas = 0;
let entradasConDescuento = 0;
let total = 0;

for (let i = 1; i <= cantidadPersonas; i++) {
	let edad = parseInt(prompt("¿Cuántos años tienes?"));
	let diaSemana = prompt("¿Qué día de la semana es?").toLowerCase();
	let precioEntrada = 0;

	console.log("La persona tiene", edad, "años y es", diaSemana);

	if (edad < 5) {
		console.log("La entrada es gratuita");
		entradasGratuitas++;
		continue; // pasamos directamente al siguiente del bucle
	} else if (edad <= 17) {
		precioEntrada = 7;
	} else if (edad <= 64) {
		precioEntrada = 12;
	} else {
		precioEntrada = 8;
	}

	if (diaSemana === "miércoles" || diaSemana === "jueves") {
		precioEntrada *= 0.5;
		console.log("Tienes un 50% de descuento");
		entradasConDescuento++;
	}

	total += precioEntrada;
}

console.log("Total recaudado:", total.toFixed(2), "€");
console.log("Entradas gratuitas:", entradasGratuitas);
console.log("Entradas con descuento:", entradasConDescuento);
console.log("Total de personas que han entrado:", cantidadPersonas);
