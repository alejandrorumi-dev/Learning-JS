/*
🎯 Ejercicio realista con do...while

Enunciado:

Una tienda quiere registrar las compras de clientes 
hasta que uno indique que ya no quiere comprar más productos.

Cada producto tiene un precio, y al finalizar, se muestra 
el total a pagar. Además:

- Si el total supera los 300 €, se aplica un 10% de descuento.

- Se deben mostrar también cuántos productos se han comprado.
*/

let continuar;
let productosComprados = 0;
let total = 0;

do {
	let nombreProducto = prompt("Introduce el nombre del producto:");
	let precioProducto = parseFloat(prompt("Introduce el precio del producto:"));
	console.log("Producto registrado:", nombreProducto, "y su precio es:", precioProducto, "€");
	productosComprados++;
	total += precioProducto;

	continuar = prompt("¿Quieres registrar más compras? (sí/no)").toLowerCase();
} while (continuar === "sí");

if (total > 300) {
	total *= 0.9;
	console.log("Se ha aplicado un 10% de descuento por la compra superior a 300€");
}

console.log("Se registraron un total de:", productosComprados, "productos comprados con un total de:", total.toFixed(2), "€");