/*
Sistema de facturación con IVA y descuentos

- Pide al usuario cuántos productos va a comprar. Por cada producto, 
pide el nombre y el precio sin IVA.

- Aplica el IVA (21%) a cada producto.

- Si el precio sin IVA es mayor o igual a 100€, aplica un 10% de 
descuento antes de sumar el IVA.

Al final, muestra:

El nombre y precio final de cada producto (ya con IVA y descuento si corresponde)

El precio total de todos los productos juntos
*/

let productosComprados = parseInt(prompt("¿Cuántos productos vas a comprar?"));
let total = 0;

for (let i = 1; i <= productosComprados; i++) {
	let nombreProducto = prompt("¿Cómo se llama el producto?");
	let precioSinIVA = parseInt(prompt("¿Cuál es el precio sin IVA?"));
	console.log("El prodcuto", nombreProducto, "cuesta sin IVA, un total de", precioSinIVA, "€");

	if (precioSinIVA >= 100) {
		precioSinIVA -= precioSinIVA * 0.1;
		console.log("Se ha aplicado un 10% de descuento");
	}

	let precioConIVA = precioSinIVA * 1.21;
	total += precioConIVA;
	console.log("El precio con IVA es:", precioConIVA);
}

console.log("El precio total es:", total.toFixed(2));



