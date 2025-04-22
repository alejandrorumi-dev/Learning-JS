/*
🧠 Ejercicio 3: Número par o impar

Enunciado:

Crea una función llamada esPar que reciba un número 
como parámetro y devuelva true si es par o false si es impar.
*/

function esPar(n) {
	if (n % 2 == 0){
		return true;
	}else{
		return false;
	}
}

/*
function esPar(n) {
	return n % 2 === 0;	
}
*/

let numero = esPar(5);
console.log(numero);