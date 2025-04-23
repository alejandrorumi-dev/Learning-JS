/*
🧠 EJERCICIO: Validación de parámetros

Crea una función llamada calcularEdad(nacimiento) 
que reciba el año de nacimiento y devuelva la edad 
actual (usa 2025 como año actual).
⚠️ Valida que el número no sea mayor que 2025 y no sea negativo.
*/

let aActual = 2025;

function calcularEdad(nacimiento) {
	if (nacimiento <= aActual && nacimiento > 0) {
		let edad = aActual - nacimiento;
		console.log("Tu edad es:", edad);
	} else {
		console.log("Ha ocurrido un error. Introduce un valor positivo y no mayor a 2025.")
	}
}

calcularEdad(-1997);
calcularEdad(2021);

