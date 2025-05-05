/*
🔹 8. OBJETO ANIDADO

Enunciado:

Crea un objeto llamado coche con estas propiedades:

marca: "Toyota"

motor: otro objeto con:

tipo: "híbrido"

potencia: "120cv"
*/

let coche = {
	marca: "Toyota",
	motor: {
		tipo: "híbrido",
		potencia: "120cv"
	}
}

console.log(coche.motor.tipo); // "híbrido"
console.log(coche.motor.potencia); // "120cv"