/*
🧾 Ejercicio - Carrito con descuentos por producto caro

Crea un programa que:

Pregunte cuántos productos va a comprar el usuario.

Por cada producto:

Pida el nombre del producto.

Pida el precio sin IVA.

Si el precio sin IVA es mayor o igual a 100€, aplica un descuento del 10% al producto.

Luego añade el IVA del 21% al precio ya con descuento.
*/

let cuantosProductos = parseInt(prompt("¿Cuántos productos vas a comprar?"));
let total = 0;

for (let i = 1; i <= cuantosProductos; i++){
	let nombreProducto = prompt("Indica el nombre del producto");
	let precioSinIVA = parseInt(prompt("Indica el precio del producto sin IVA"));
	console.log("El producto", nombreProducto, "cuesta sin IVA", precioSinIVA, "€");

	if (precioSinIVA >= 100){
		precioSinIVA -= precioSinIVA * 0.1;
		console.log("Se ha aplicado un 10% de descuento");
	}

	let precioConIVA = precioSinIVA * 1.21;
	total += precioConIVA;
	console.log("El precio con IVA es:", precioConIVA);
}

console.log("El precio total es:", total.toFixed(2));