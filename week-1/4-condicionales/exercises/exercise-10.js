/*
💡 Ejercicio: Control de acceso a una discoteca

Crea un programa que simule el acceso a una discoteca. 
El portero debe preguntar a cada persona su edad y si lleva entrada anticipada. 
El programa debe indicar si puede entrar o no, según las siguientes condiciones:

🔹 Reglas:
Edad mínima para entrar: 18 años.

Si tiene entrada anticipada, entra gratis.

Si no tiene entrada anticipada, debe pagar:

15 € si tiene entre 18 y 25 años.

25 € si tiene más de 25.

🧠 Bonus:
Al final del programa, mostrar cuántas personas entraron gratis, 
cuántas pagaron, y el dinero total recaudado.
*/

let cantidadPersonas = parseInt(prompt("¿Cuántas personas van a entrar a la discoteca?"));

let personasConAcceso = 0;
let entradasGratuitas = 0;
let entradasPagadas = 0;
let totalRecaudado = 0;

for (let i = 1; i <= cantidadPersonas; i++) {
	console.log(`\n👤 Persona ${i}`);
	let edad = parseInt(prompt("¿Cuántos años tienes?"));
	let entradaAnticipada = prompt("¿Tienes entrada anticipada? Responde con 'Sí' o 'No'").toLowerCase();

	if (edad < 18) {
		console.log("❌ No tienes acceso a la discoteca.");
		continue;
	}

	personasConAcceso++;

	if (entradaAnticipada === "sí") {
		console.log("✅ Tienes entrada gratuita.");
		entradasGratuitas++;
	} else if (entradaAnticipada === "no") {
		if (edad <= 25) {
			console.log("💸 Tienes que pagar 15€ de entrada.");
			entradasPagadas++;
			totalRecaudado += 15; // totalRecaudado = 0 + 15; 
		} else {
			console.log("💸 Tienes que pagar 25€ de entrada.");
			entradasPagadas++;
			totalRecaudado += 25; // totalRecaudado = 0 + 25;
		}
	} else {
		console.log("⚠️ Respuesta no válida. No se ha registrado tu entrada.");
	}
}

// 🔚 RESUMEN FINAL
console.log("\n📊 RESUMEN DE LA NOCHE");
console.log("Personas con acceso:", personasConAcceso);
console.log("Entradas gratuitas:", entradasGratuitas);
console.log("Entradas pagadas:", entradasPagadas);
console.log("Total recaudado:", totalRecaudado + "€");


