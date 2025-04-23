/*
🧠 EJERCICIO: Función flecha

Crea una función flecha esMayorEdad que reciba una edad 
y devuelva true si es mayor o igual a 18 y false si no.
*/

/*
const esMayorEdad = (edad) => {
	if (edad >= 18){
		console.log(true);
	}else{
		console.log(false);
	}
}
*/

const esMayorEdad = (edad) => {
	return edad >= 18;
}

// Ejemplo de uso:
console.log(esMayorEdad(20)); // true
console.log(esMayorEdad(15)); // false
