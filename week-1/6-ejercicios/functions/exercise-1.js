/*
Ejercicio 1

Crea una función que reciba una edad y devuelva 
si la persona es mayor de edad o no.
*/

function edad(n) {
	if (n > 18) {
		return "Es mayor de edad";
	} else {
		return "Es menor de edad";
	}
}

let esMayor = edad(21);
console.log(esMayor);