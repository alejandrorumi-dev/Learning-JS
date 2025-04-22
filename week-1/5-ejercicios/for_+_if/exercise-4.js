/*
💧Ejercicio: Parque acuático
Un parque acuático vende entradas con los siguientes precios según la edad:

- Menores de 3 años: gratis

- De 3 a 12 años: 8€

- De 13 a 59 años: 15€

- A partir de 60 años: 6€

Además:

Los miércoles se aplica un descuento del 20% 
en todas las entradas (menos las gratuitas).

🧾 Al final, debes mostrar:

- El total recaudado

- La cantidad de personas que entraron gratis

- La cantidad de entradas vendidas con descuento

- El total de personas que fueron al parque
*/

let entradasCompradas = parseInt(prompt("¿Cuántas entradas quieres?"));

let total = 0;
let entradasGratuitas = 0;
let entradasConDescuento = 0;

for (let i = 1; i <= entradasCompradas; i++){
	let edad = parseInt(prompt("¿Cuántos años tienes?"));
	let diaSemana = prompt("¿Qué día de la semana es?").toLowerCase();
	let precioEntrada = 0;

	if (edad < 3){
		console.log("La entrada es gratuita");
		entradasGratuitas++;
		continue;
	}else if (edad >= 3 && edad <= 12){
		console.log("La entrada cuesta 8€");
		precioEntrada = 8;
	}else if (edad >= 13 && edad <= 59){
		console.log("La entrada cuesta 15€");
		precioEntrada = 15;
	}else{
		console.log("La entrada cuesta 6€");
		precioEntrada = 6;
	}

	if (diaSemana === "Miércoles"){
		precioEntrada *= 0.8; // Se multiplica conservando el 80% del precio
		console.log("Se ha aplicado un 20% de descuento");
		entradasConDescuento++;
	}

	total += precioEntrada;
}

console.log("El total recaudado ha sido:", total.toFixed(2), "€");
console.log("El total de personas que entraron con entrada gratuita ha sido:", entradasGratuitas);
console.log("El total de entradas con descuento vendidas ha sido:", entradasConDescuento);
console.log("El total de personas que han ido al parque es:", entradasCompradas);