/*
💻 Ejercicio: Venta de entradas para un parque de atracciones
Un parque de atracciones vende entradas con los siguientes criterios:

Si la persona tiene menos de 4 años, entra gratis.

Si tiene entre 4 y 12 años, paga 8 €.

Si tiene entre 13 y 64 años, paga 15 €.

Si tiene 65 años o más, paga 5 €.

Además, si alguien compra más de 3 entradas, se le aplica un 
10% de descuento sobre el total.

🧠 Tu reto:
Pregunta cuántas personas van a entrar.

Por cada persona, solicita su edad y determina el precio de su entrada.

Calcula el total sin y con descuento (si aplica).

Muestra el precio total a pagar y cuántas personas entraron gratis.
*/

let cantidadPersonas = parseInt(prompt("¿Cuántas personas van a entrar?"));

let entradasGratuitas = 0;
let entradasDePago = 0;
let total = 0;

for (let i = 1; i <= cantidadPersonas; i++) {
	let edad = parseInt(prompt("¿Cuántos años tienes?"));
	let precioEntrada = 0;

	if (edad < 4) {
		console.log("La entrada es gratuita");
		entradasGratuitas++;
		continue; // No sumamos esta entrada al total
	} else if (edad >= 4 && edad <= 12) {
		precioEntrada = 8;
	} else if (edad >= 13 && edad <= 64) {
		precioEntrada = 15;
	} else if (edad >= 65) {
		precioEntrada = 5;
	} else {
		console.log("Edad no válida");
		continue;
	}

	console.log("La entrada cuesta " + precioEntrada + "€");
	total += precioEntrada;
	entradasDePago++;
}

// Aplicar descuento si hay más de 3 entradas de pago
if (entradasDePago > 3) {
	let descuento = total * 0.1;
	total -= descuento;
	console.log("Se ha aplicado un 10% de descuento. Descuento:", descuento.toFixed(2), "€");
}

console.log("Personas con entrada gratuita:", entradasGratuitas);
console.log("Precio total a pagar:", total.toFixed(2), "€");
