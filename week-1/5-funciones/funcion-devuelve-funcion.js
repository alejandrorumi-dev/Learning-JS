/*
2. Funciones que devuelven otras funciones

Este ejercicio crea una función que devuelve otra función 
para calcular el precio con descuento:
*/

function crearDescuento(descuento){
	return function(precio){
		return precio - (precio * descuento);
	};
}

const descuento20 = crearDescuento(0.2);
console.log(descuento20(100));

const descuento50 = crearDescuento(0.5);
console.log(descuento50(200));