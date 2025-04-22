/*
🛒 Ejercicio 1: Compra de frutas al peso

Un mercado vende frutas al peso. Crea un programa que:

1. Pregunte cuántas frutas diferentes va a comprar el usuario.

2. Por cada fruta, pida:

- El nombre de la fruta.

- El precio por kilo.

- Cuántos kilos va a comprar.

3. Calcule el precio total de cada fruta.

4. Sume todos los totales y aplique un descuento 
del 5% si el total supera los 30€.

5. Al final, muestra:

Cuánto cuesta cada fruta (nombre + total por esa fruta).

El total a pagar (con o sin descuento).

Cuántos kilos en total ha comprado el cliente.
*/

let frutasCompradas = parseInt(prompt("¿Cuántas frutas diferentes vas a comprar?"));

let total = 0;
let kilosTotales = 0;
let frutaTotal = 0;

for (let i = 1; i <= frutasCompradas; i++){
	let nombreFruta = prompt("¿Cómo se llama la fruta?");
	let precioKilo = parseInt(prompt("¿Cuánto cuesta el kilo?"));
	let kilosFruta = parseInt(prompt("¿Cuántos kilos vas a comprar?"));

	let totalFruta = precioKilo * kilosFruta;
	// totalFruta = 1.25€ * 0.75kg
	total += totalFruta;
	/* total = 0 + totalFruta;
	=> en cada vuelta, el total seria: 
	total = precio de totalFruta + totalFruta de la segunda vuelta */
	kilosTotales += kilosFruta;
	// kilosTotales = 0kg + 0.65kg

	console.log("La fruta", nombreFruta, "cuesta", totalFruta.toFixed(2), "€ en total.");
}

if (total > 30){
	total -= total * 0.05;
	console.log("Se ha aplicado un descuento del 5%");
}

console.log("Total a pagar:", total.toFixed(2), "€");
console.log("Kilos totales comprados:", kilosTotales);
