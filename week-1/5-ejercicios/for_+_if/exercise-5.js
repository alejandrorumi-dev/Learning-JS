/*
🧠 Ejercicio: Control de Stock en una Tienda de Electrónica

Una tienda está llevando el control del stock de productos. 
Se desea saber cuántos productos diferentes se han 
vendido, cuántas unidades en total y cuánto dinero 
ha recaudado la tienda al final del día.

📝 Instrucciones:

1. Pregunta cuántos productos diferentes se han vendido hoy.

2. Por cada producto:

- Pide el nombre del producto.

- Cuántas unidades se han vendido.

- Cuál es el precio unitario del producto.

3. Calcula:

- El total recaudado por cada producto (unidades × precio).

- El total recaudado por todos los productos.

- El total de unidades vendidas.

- La cantidad total de productos diferentes vendidos.

📋 Al final, debes mostrar:

- El total recaudado en el día.

- La cantidad total de unidades vendidas.

- El total de productos diferentes vendidos.
*/

let productosVendidos = parseInt(prompt("¿Cuántos productos se han vendido?"));

let total = 0;
let unidadesVendidas = 0;

for (let i = 1; i <= productosVendidos; i++){
	let nombreProducto = prompt("¿Cómo se llama el producto?");
	let unidadProducto = parseInt(prompt("¿Cuántas unidades se han vendido?"));
	let precioUnitario = parseFloat(prompt("¿Cuál es el precio unitario?"));
	let recaudadoProducto = unidadProducto * precioUnitario;

	console.log(
		"Del producto", nombreProducto,
		"se han vendido", unidadProducto,
		"unidades y su precio unitario es", precioUnitario,
		"€. Total recaudado por este producto:", recaudadoProducto.toFixed(2)
	);
}

unidadesVendidas += unidadProducto;
total += precioUnitario;

console.log("El total recaudado ha sido:", total.toFixed(2));
console.log("El total de unidades vendidas ha sido:", unidadesVendidas);
console.log("El total de productos diferentes vendidos ha sido:", productosVendidos);

