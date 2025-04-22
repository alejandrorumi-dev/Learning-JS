/*
🧠 Ejercicio 4: Multiplicación con valor por defecto

Enunciado:

Crea una función llamada multiplicar que reciba dos parámetros. 
Si el segundo parámetro no se proporciona, debe multiplicar por 1.
*/

function multiplicar(a, b){
	if (b == undefined){
		b = 1;
	}
	return a * b;
}

/*
function multiplicar (a, b = 1) {
	return a * b;
}
*/

let resultado = multiplicar(8);
console.log(resultado);

