/*
Ejercicio 2

Crea una función que reciba un precio y una cantidad, 
y devuelva el total de la compra con un 21% de IVA incluido.
*/

function datos(precio, cantidad){
	return (precio * cantidad) * 1.21;
}

let iva = datos(20, 3);
console.log(iva);