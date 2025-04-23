/*
🧪 Ejercicio: Precio final de un libro con descuento e IVA

Tienes un libro que cuesta 50 €. Quieres aplicar un 
descuento del 20% y luego sumarle un IVA del 10%. Crea dos funciones:

- Una para calcular el precio con descuento.

- Otra para aplicar el IVA sobre el precio rebajado.

Muestra el precio final en consola.
*/

let precioLibro = 50;

function descuento20(precio){
	return precio * 0.8;
}

function precioFinal(precio){
	return descuento20(precio) * 1.1;
}

console.log("El precio final del libro es", precioFinal(precioLibro), "€");