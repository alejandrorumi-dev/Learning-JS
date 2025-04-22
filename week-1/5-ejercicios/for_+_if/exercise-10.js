/*
🧮 Enunciado del ejercicio:

Una tienda de informática vende ordenadores, monitores 
y teclados. Cada cliente puede comprar la cantidad 
que desee de cada producto.
Los precios son:

- Ordenador: 800 €

- Monitor: 250 €

- Teclado: 50 €

Aplica las siguientes condiciones:

Si el cliente compra más de 5 productos en total, 
se aplica un 10% de descuento a toda la compra.

Si el total de la compra supera los 2000 €, se 
aplica un 5% adicional de descuento.

Al final, se debe mostrar:

- El total de productos comprados.

- El total final con descuentos aplicados.

- Cuántos productos se han comprado de cada tipo.
*/

let ordenadorCompra = parseInt(prompt("¿Cuántos ordenadores quieres?"));
let monitorCompra = parseInt(prompt("¿Cuántos monitores quieres?"));
let tecladoCompra = parseInt(prompt("¿Cuántos teclados quieres?"));

let ordenadorPrecio = 800;
let monitorPrecio = 250;
let tecladoPrecio = 50;

let totalProducto = ordenadorCompra + monitorCompra + tecladoCompra; // Suma de total de productos

let total = (ordenadorPrecio * ordenadorCompra) + // 800 * cantidad de ordenadores comprados
			(monitorPrecio * monitorCompra) + // 250 * cantidad de monitores comprados
			(tecladoPrecio * tecladoCompra); // 50 * cantidad de teclados comprados
			// Suma del monto

if (totalProducto > 5){
	total *= 0.9; // Total * 0.9 para aplicar un 10%
	console.log("Por la compra de 5 o más productos, se ha aplicado un 10% de descuento");
}

if (total > 2000){
	total *= 0.95; // Además, si son 2000€ de compra, se aplica un 5% adicional
	console.log("Además, por una compra superior a 2000€, se aplica un 5% de descuento adicional");
}

console.log("Ordenadores comprados:", ordenadorCompra);
console.log("Monitores comprados:", monitorCompra);
console.log("Teclados comprados:", tecladoCompra);
console.log("Total de productos comprados:", totalProducto);
console.log("El total final es:", total.toFixed(2));