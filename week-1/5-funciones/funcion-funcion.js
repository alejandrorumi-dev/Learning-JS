/*
🧠 EJERCICIO: Función que llama a otra

Crea dos funciones:

descuento10(precio): devuelve el precio con un 10% de descuento.

mostrarPrecioFinal(precioOriginal): llama a descuento10() 
y devuelve el precio con descuento, con un mensaje tipo 
"El precio final es de: X €".
*/

function descuento10(precio){
	return precio * 0.9;
}

function mostrarPrecioFinal(precioOriginal){
	return descuento10(precioOriginal);
}

console.log("El precio final es de:", mostrarPrecioFinal(100), "€");
