/*
🛒 Ejercicio: Factura detallada

Crea un programa que:

Pregunte cuántos productos va a comprar el usuario.

Para cada producto:

Solicite el nombre del producto.

Solicite el precio.

Al finalizar, muestre una factura detallada con:

El nombre y precio de cada producto.

El total de la compra.

Si el total supera los 150€, aplica un 15% de descuento 
y muestra el precio con descuento.
*/

let cuantosProductos = parseInt(prompt("¿Cuántos productos vas a comprar?"));
let total = 0;

for (let i = 1; i <= cuantosProductos; i++){
	let nombreProducto = prompt("Indica el nombre del producto");
	let precio = parseInt(prompt("Indica el precio del producto"));

	console.log("Producto:", nombreProducto, "- Precio:", precio + "€");
	
	total += precio;
}

if (total >= 150){
	total -= total * 0.15;
	console.log("Se ha aplicado un descuento del 15%");
}

console.log("El precio total es:", total.toFixed(2));