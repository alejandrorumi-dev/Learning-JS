/*
🛍️ Ejercicio 2 - Carrito de compras

Pide al usuario cuántos productos quiere comprar.

Luego, con un for, pide el precio de cada producto y guarda el total.

Muestra el monto total al final.

(Si quiere, puedes aplicar un 10% de descuento si el total supera 100€).
*/

let cantidadProductos = parseInt(prompt("¿Cuántos productos quieres comprar?"));
let total = 0;

for (let i = 1; i <= cantidadProductos; i++){
	let precio = parseFloat(prompt("Indica cuál es el precio del producto $(i):"));
	total += precio; // x = 0 (valor inicial de total) + precio
}

if (total >= 100){
	total -= total * 0,1;
	console.log("Se ha aplicado un descuento del 10%");
}

console.log("El monto total de tu compra es:", total.toFixed(2));
