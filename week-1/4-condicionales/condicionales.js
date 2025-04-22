/*
💡 Ejercicio con else if

Vamos a crear un programa que determine el descuento 
que un cliente obtiene en una tienda. La tienda tiene las siguientes reglas:

- Si el cliente es VIP, recibe un 20% de descuento.

- Si el cliente gasta más de 100 euros, recibe un 10% de descuento.

- Si el cliente es menor de 18 años, recibe un 5% de descuento (a menos que sea VIP).

- Si no cumple ninguna de las condiciones anteriores, no recibe descuento.

📝 Requisitos:

Definir variables:

edad

esVIP

gastoTotal

Usar if/else if/else para calcular y mostrar el descuento.
*/

let edad = 17;
let esVIP = false;
let gastoTotal = 100;

if (esVIP && gastoTotal > 100) { // Si es VIP y gasta +100€, 30% de descuento
	console.log("Tienes un 30% de descuento");
} else if (esVIP) { // Si es VIP, pero no gasta +100€, 20% de descuento
	console.log("Tienes un 20% de descuento");
} else if (gastoTotal > 100) { // Si no es VIP, pero gasta +100€, 10% de descuento
	console.log("Tienes un 10% de descuento");
} else if (edad < 18) { // Si no es VIP ni gasta +100€ y es menor de 18, 5% de descuento
	console.log("Tienes un 5% de descuento");
} else { // Si no es VIP ni gasta +100€ y es mayor de 18, no hay descuento
	console.log("No tienes descuento");
}
