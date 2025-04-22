/*
🧾 EJERCICIO: VENTA DE ENTRADAS PARA UN CONCIERTO

Una empresa vende entradas para un concierto. El precio base de cada entrada es de 20 €.
Cada comprador puede adquirir varias entradas, y según su edad, puede tener descuento:

- Menores de 10 años: no pagan entrada.

- De 10 a 17 años: pagan un 50% del precio base.

- De 18 a 64 años: pagan el precio completo.

- Mayores de 64 años: tienen un 25% de descuento.

Al final, debes mostrar:

- Cuánto se ha recaudado en total.

- Cuántas entradas gratuitas se han dado.

- Cuántas entradas con descuento se han vendido.

- El número total de personas que han comprado.
*/

let entradasCompradas = parseInt(prompt("¿Cuántas entradas quieres?"));

let entradasGratuitas = 0;
let entradasDescuento = 0;
let total = 0;

for (let i = 1; i <= entradasCompradas; i++){
	let edad = parseInt(prompt("¿Cuántos años tienes?"));
	let precioEntrada = 20;

	if (edad < 10){
		entradasGratuitas++;
		continue;
	}else if (edad >= 10 && edad <= 17){
		precioEntrada *= 0.5;
		entradasDescuento++;
	}else if (edad >= 65){
		precioEntrada *= 0.75;
		entradasDescuento++
	}
	total += precioEntrada;
}


console.log("Se ha recaudado un total de:", total.toFixed(2), "€");
console.log("Se han vendido un total de:", entradasGratuitas, "entradas gratuitas");
console.log("Se han vendido un total de:", entradasDescuento, "entradas con descuento");
console.log("Han comprado entradas un total de:", entradasCompradas, "personas");