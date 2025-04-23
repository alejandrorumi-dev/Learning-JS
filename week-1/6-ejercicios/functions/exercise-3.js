/*
Ejercicio:

Supón que tienes una tienda y quieres calcular el 
precio de un producto con un descuento y después 
añadir el IVA. Para esto, vamos a utilizar dos funciones:

- descuento(precio): Esta función toma un precio 
y aplica un descuento del 15%.

- precioConIva(precio): Esta función toma un precio 
y le añade el IVA del 21%.
*/

function descuento15(precio){
	return precio * 0.85;
}

function precioConIVA(precio){
	return descuento15(precio) * 1.21;
}

let precioOriginal = 100;

console.log("El precio final con descuento e IVA es de:", precioConIVA(precioOriginal), "€");