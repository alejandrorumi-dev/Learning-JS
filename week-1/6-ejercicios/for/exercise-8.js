/*
Enunciado:
Una tienda ofrece un descuento de 10% a los clientes 
que compran más de 3 productos. Si la compra es 
superior a 100 €, se les aplica un 5% adicional de descuento.

Escribe un programa que calcule el total a pagar por un 
cliente después de aplicar los descuentos. El programa debe:

- Preguntar al cliente cuántos productos ha comprado.

- Pedir el precio de cada producto.

- Aplicar el descuento del 10% si compra más de 3 productos.

- Si la compra supera los 100 €, aplicar un 5% de descuento adicional.

- Finalmente, mostrar el total a pagar después de los descuentos.
*/

let productosComprados = parseInt(prompt("¿Cuántos productos vas a adquirir?"));

let total = 0;

for (let i = 1; i <= productosComprados; i++){
	let precioProducto = parseFloat(prompt("¿Cuánto vale el producto?"));

	if (productosComprados > 3){
		precioProducto *= 0.9;
	}

	total += precioProducto;

	if (total > 150){
		total *= 0.95;
	}
}

console.log("El total de la compra es:", total.toFixed(2), "€");