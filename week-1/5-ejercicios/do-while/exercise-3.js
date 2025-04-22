/*
💼 Enunciado - Tienda de ropa

En una tienda de ropa, los clientes pueden 
registrar la compra de diferentes prendas. 
Cada vez que se registra una prenda, se pide:

- El nombre de la prenda.

- El precio de la prenda.

- La cantidad de unidades compradas.

Se debe:

- Calcular el total sin descuentos.

- Aplicar un 10% de descuento si se compran más de 5 prendas en total.

- Aplicar un 5% de descuento adicional si el total 
sin descuentos supera los 300 €.

Al final, mostrar:

- Total de prendas compradas.

- Total sin descuentos.

- Total con descuentos aplicados.
*/

let registrar;
let total = 0;
let productosComprados = 0;
let totalConDescuento = 0;
let totalSinDescuento = 0;

do {
	let nombrePrenda = prompt("¿Qué prenda es?");
	let precioPrenda = parseInt(prompt("¿Cuánto cuesta?"));
	console.log("Se ha registrado una prenda:", nombrePrenda, "y su precio es:", precioPrenda, "€");
	total += precioPrenda;
	productosComprados++;

	registrar = prompt("¿Quieres registrar más prendas? (sí/no)").toLowerCase();
} while (registrar === "sí");

totalSinDescuento = total;

if (productosComprados > 5){
	total *= 0.9;
	console.log("Se ha aplicado un 10% de descuento por la compra de 5 o más prendas");
}

if (totalSinDescuento > 300){
	total *= 0.95;
	console.log("Se ha aplicado un 5% adicional por la compra superior a 300€");
}

totalConDescuento = total;

console.log("Total de prendas compradas:", productosComprados);
console.log("El total de la compra es:", total.toFixed(2), "€");
console.log("El total sin descuento es:", totalSinDescuento.toFixed(2), "€");
console.log("El total con descuento es:", totalConDescuento.toFixed(2), "€");