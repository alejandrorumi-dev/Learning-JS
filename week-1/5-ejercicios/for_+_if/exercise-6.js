/*
🧩 NUEVO ENUNCIADO:

Una librería está haciendo una promoción especial 
por cada libro vendido. Por cada venta, se debe pedir:

[BUCLE FOR]

- El nombre del libro

- El precio por unidad

- La cantidad de unidades vendidas

[CONDIFICONAL IF DENTRO DEL BUCLE]

Si el cliente compra más de 3 unidades del mismo libro, 
se le aplica un 10% de descuento en ese producto.

[CONDICIONAL IF FUERA DEL BUCLE]

Al final del día, si el total recaudado supera los 200 €, 
se aplica un descuento general del 5% por fidelidad.

Al final, muestra:

- El total recaudado.

- El número total de libros vendidos (sumando unidades).

- Cuántos libros diferentes se han vendido.

- Cuántas ventas con descuento se han realizado 
(por haber comprado más de 3 unidades del mismo libro).
*/

let librosVendidos = parseInt(prompt("¿Cuántos libros quieres?"));

let total = 0;
let ventasConDescuento = 0;
let unidadesVendidas = 0;

for (let i = 1; i <= librosVendidos; i++) {
	let nombreLibro = prompt("¿Cómo se llama el libro?");
	let precioLibro = parseInt(prompt("¿Cuánto vale el libro?"));
	let unidadLibro = parseFloat(prompt("¿Cuántas unidades quieres?"));

	let precioTotalLibro = precioLibro * unidadLibro;

	if (unidadLibro > 3) {
		precioTotalLibro *= 0.9;
		console.log("Se ha aplicado un descuento del 10%");
		ventasConDescuento++;
	}

	total += precioTotalLibro;
	unidadesVendidas += unidadLibro;
}

if (total > 200) {
	total *= 0.95;
	console.log("Se ha aplicado un descuento del 5% por fidelidad");
}

console.log("Total recaudado:", total.toFixed(2), "€");
console.log("Total de unidades vendidas:", unidadesVendidas);
console.log("Número de libros diferentes vendidos:", librosVendidos);
console.log("Ventas con descuento (más de 3 unidades):", ventasConDescuento);