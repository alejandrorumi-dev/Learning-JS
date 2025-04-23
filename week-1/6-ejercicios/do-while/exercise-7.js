/*
Ejercicio 1

Sigue pidiendo nombres de productos y sus precios 
hasta que el usuario diga "no". Al final, muestra 
el total gastado y cuántos productos se compraron.
*/

let totalProductos = 0;
let total = 0;
let registrar;

do {
	let nombreProducto = prompt("¿Cómo se llama el producto?");
	let precioProducto = parseFloat(prompt("¿Cuánto vale el producto?"));
	console.log("Se ha registrado un producto:", nombreProducto, "y su precio es:", precioProducto, "€");

	totalProductos++;
	total += precioProducto;

	registrar = prompt("¿Quieres registrar otro producto? (sí/no)").toLowerCase();

} while (registrar === "sí");

console.log("Total productos:", totalProductos);
console.log("Total gastado:", total.toFixed(2), "€");

