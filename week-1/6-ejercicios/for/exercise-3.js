/*
Una tienda de ropa está ofreciendo descuentos 

en sus productos dependiendo de la cantidad de ropa que se compre. 
Las reglas son las siguientes:

1. Si una persona compra menos de 5 productos, no recibe descuento.

2. Si compra entre 5 y 10 productos, recibe un 10% de descuento.

3. Si compra más de 10 productos, recibe un 20% de descuento.

Además, si la compra total supera los 100€, la tienda 
da un descuento adicional de 5€.

Al final, muestra:

- El total a pagar con los descuentos aplicados.

- Cuántos productos fueron comprados.

- El monto total de descuento aplicado.
*/

let productosComprados = parseInt(prompt("¿Cuántos productos de ropa quieres?"));

let total = 0;
let totalDescuento = 0;

for (let i = 1; i <= productosComprados; i++) {
	let precio = parseFloat(prompt(`¿Cuánto cuesta el producto ${i}?`));
	let precioFinal = precio;

	if (productosComprados >= 5 && productosComprados <= 10) {
		let descuento = precio * 0.10;
		precioFinal -= descuento;
		totalDescuento += descuento;
	} else if (productosComprados > 10) {
		let descuento = precio * 0.20;
		precioFinal -= descuento;
		totalDescuento += descuento;
	}

	total += precioFinal;
}

if (total > 100) {
	total -= 5;
	totalDescuento += 5;
	console.log("Se ha aplicado un descuento adicional de 5€ por superar los 100€.");
}

console.log("Total a pagar:", total.toFixed(2), "€");
console.log("Total de productos comprados:", productosComprados);
console.log("Total de descuento aplicado:", totalDescuento.toFixed(2), "€");
