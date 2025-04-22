/*
🛒 Ejercicio - Carrito con IVA y Descuento por producto

Haz un programa que:

Pregunte cuántos productos va a comprar el usuario.

Por cada producto:

Pida el nombre del producto.

Pida el precio sin IVA.

Calcule el precio con IVA (21%) y lo sume al total.

Si el producto cuesta más de 50€, aplícale un 10% de descuento al precio con IVA.

Al final, muestra el total final con todos los descuentos aplicados.

🔹 Sin necesidad de arrays ni objetos. Solo variables simples y condicionales.
*/

let cuantosProductos = parseInt(prompt("¿Cuántos productos vas a comprar?"));
let total = 0;

for (let i = 1; i <= cuantosProductos; i++){
	let nombreProducto = prompt("Indica el nombre del producto");
	console.log("Nombre del producto", nombreProducto);

	let precioSinIVA = parseInt(prompt("Indica el precio sin IVA"));
	let precioConIVA = precioSinIVA * 1.21

	if (precioConIVA >= 50){
		precioConIVA -= precioConIVA * 0.15;
		console.log("Se ha aplicado un descuento del 15%");
	}

	total += precioConIVA;
}

console.log("El precio total es:", total.toFixed(2));