/*
🧾 Ejercicio 1: Tienda de mascotas

Enunciado:

Estás registrando compras en una tienda de mascotas. 
Cada cliente puede comprar diferentes artículos 
(comida, juguetes, accesorios, etc).

- Por cada artículo, se pide el nombre y el precio.

- Si el cliente compra más de 5 artículos, se aplica un 10% de descuento.

- Si la compra supera los 200€, se aplica un 5% adicional.

- El proceso se repite hasta que el usuario decida no registrar más compras.

- Al final, muestra: total de artículos, total 
sin descuento, total con descuento.
*/

let registrarCompra;

let productosComprados = 0;
let total = 0;
let totalConDescuento = 0;
let totalSinDescuento = 0;

do {
	let nombreProducto = prompt("¿Cómo se llama el producto?");
	let precioProducto = parseInt(prompt("¿Cuánto cuesta este producto?"));
	console.log("Se ha registrado una compra:", nombreProducto, "y su precio es:", precioProducto, "€");
	productosComprados++;
	total += precioProducto;

	registrarCompra = prompt("¿Quieres registrar otra compra? (sí/no)").toLowerCase();
} while (registrarCompra === "sí");

totalSinDescuento = total;

if (productosComprados > 5) {
	total *= 0.9;
}

if (total > 200) {
	total *= 0.95;
}

totalConDescuento = total;

console.log("El total de artículos:", productosComprados);
console.log("El total sin descuento:", totalSinDescuento.toFixed(2), "€");
console.log("El total con descuento:", totalConDescuento.toFixed(2), "€");