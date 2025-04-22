/*
🛒 Ejercicio - Carrito con múltiples productos

Simula un pequeño sistema de compras:

El usuario debe ingresar cuántos productos va a comprar.

Por cada producto, se le pide el nombre y el precio.

Al final, muestra el total y si el total supera los 100€, aplica un 10% de descuento.

Muestra el total final con o sin descuento.
*/

let cuantosProductos = parseInt(prompt("¿Cuántos productos vas a comprar?"));
let total = 0;
let productos = [];


for (let i = 1; i <= cuantosProductos; i++){
	let nombreProducto = prompt("Indica el nombre del producto");
	let precio = parseInt(prompt("Indica el precio del producto"));
	productos.push(nombreProducto);
	total += precio;
}

if (total >= 100){
	total -= total * 0.1;
	console.log("Se ha aplicado un descuento del 10%");
}

console.log("Productos comprados:", productos.join(", "));
console.log("El precio total es:", total.toFixed(2));