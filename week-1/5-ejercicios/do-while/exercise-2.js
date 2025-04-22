/*
🧾 Enunciado:
Una tienda de videojuegos está registrando compras.
Cada cliente puede comprar uno o varios juegos por visita.

Se pide que:

- Se solicite el nombre del juego y su precio.

- Se siga registrando mientras el usuario quiera 
seguir comprando (usa do...while).

- Si el cliente compra más de 4 juegos en total, 
se aplica un 10% de descuento al total.

- Si el precio total supera los 200 €, se aplica 
un 5% de descuento adicional (además del anterior, si corresponde).

Al finalizar, se debe mostrar:

- El número total de juegos comprados.

- El total sin descuentos.

- El total con descuentos aplicados (si los hay).
*/

let continuar;
let total = 0;
let totalSinDescuento = 0;
let totalConDescuento = 0;
let totalProductos = 0;

do {
	let nombreJuego = prompt("¿Como se llama el juego?");
	let precioJuego = parseInt(prompt("¿Cuánto cuesta el juego?"));
	console.log("Se ha registrado un juego:", nombreJuego, "con un precio de:", precioJuego, "€");
	total += precioJuego;
	totalProductos++;

	continuar = prompt("¿Quieres seguir comprando? (sí/no)").toLowerCase();
} while (continuar === "sí");

totalSinDescuento = total; // Guardamos el total antes de aplicar descuentos

if (totalProductos > 4) {
	total *= 0.9;
	console.log("Se ha aplicado un 10% de descuento por la compra de 4 o más jeugos");
}

if (total > 200) {
	total *= 0.95;
	console.log("Se ha aplicado un 5% adicional por la compra superior a 200€");
}

totalConDescuento = total; // Guardamos el total después de aplicar descuentos

console.log("El total de juegos comprados es:", totalProductos);
console.log("Total sin descuentos:", totalSinDescuento.toFixed(2), "€");
console.log("Total con descuentos:", totalConDescuento.toFixed(2), "€");