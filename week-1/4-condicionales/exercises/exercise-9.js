/*
🛍️ Ejercicio: Control de stock con descuento e IVA

Estás creando un sistema básico para registrar compras de productos 
en una tienda. El usuario debe introducir:

- Cuántos productos va a comprar.

Para cada producto:

- Su nombre.

- El precio sin IVA.

- Y cuántas unidades comprará de ese producto.

Si el precio sin IVA del producto es mayor o igual a 80 €, 
se aplica un descuento del 5%.

Luego se aplica el IVA del 21% al precio (con o sin descuento) 
y se multiplica por la cantidad comprada.

Finalmente, muestra:

- El total a pagar por todos los productos.

- El número total de unidades compradas.

- Un resumen por producto, mostrando nombre, cantidad 
y precio final con IVA por unidad.
*/

let productosComprados = parseInt(prompt("¿Cuántos productos vas a comprar?"));
let total = 0;
let unidadesTotales = 0;

for (let i = 1; i <= productosComprados; i++) {
	let nombreProducto = prompt("¿Cómo se llama el producto que vas a adquirir?");
	let productoSinIVA = parseInt(prompt("¿Cuánto vale sin IVA?"));
	let unidadesProducto = parseInt(prompt("¿Cuántas unidades vas a comprar?"));
	console.log("El producto", nombreProducto, "cuesta sin IVA", productoSinIVA, 
				"€", "y se va a adquirir", unidadesProducto, "unidades");

	if (productoSinIVA >= 80){
		productoSinIVA -= productoSinIVA * 0.05;
		console.log("Se ha aplicado un 5% de descuento");
	}

	let productoConIVA = productoSinIVA * 1.21;
	total += productoConIVA * unidadesProducto;

	unidadesTotales += unidadesProducto;
}

console.log("El precio total de la compra es:", total.toFixed(2));
console.log("Las unidades compradas son:", unidadesTotales);
console.log("Resumen ->", nombreProducto, "-", unidadesProducto, 
			"uds. - Precio final por unidad con IVA:", productoConIVA.toFixed(2));
