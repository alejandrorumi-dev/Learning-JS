/*
💡 Ejercicio avanzado de operadores

Tienes un sistema para calcular el precio 
final de un producto con un descuento. Aquí están las variables:

- precioBase = 150

- descuento = 0.2 (esto es un 20%)

- cuponDescuento = true

- envioGratis = false

- Calcula el descuento aplicado (multiplica el precioBase por el descuento).

- Calcula el precio con descuento restando el descuento al precioBase.

- Si tienes un cupón de descuento (cuponDescuento es true), 
aplica un descuento adicional del 10% al precio con descuento.

- Si el envío es gratis (envioGratis es true), no se suma el costo de envío. 
En caso contrario, añade un costo adicional de 5€ al precio final.

- Muestra el precio final por consola.
*/

let precioBase = 150;
let descuento = 0.2;
let cuponDescuento = true;
let envioGratis = false;

let descuentoAplicado = precioBase * descuento; // 150 * 0.2 = 30
let precioConDescuento = precioBase - descuentoAplicado; // 150 - 30 = 120

if (cuponDescuento) {
	descuentoAplicado += precioBase * 0.1; // 150 * 0.1 = 15
	precioConDescuento -= precioBase * 0.1; // 120 - 15 = 105
	/* 
	120 - 15 = 105 (o 150 - 45 = 105)
	precioConDescuento = precioBase - descuentoAplicado
	descuentoAplicado = 30 + 15
	precioBase = 150
	
	*/
}

let costoEnvio;
if (envioGratis) {
	costoEnvio = 0;
} else {
	costoEnvio = 5;
}
// let costoEnvio = envioGratis ? 0 : 5;

let precioFinal = precioConDescuento + costoEnvio; // 105 + 5 = 110

console.log("Precio final:", precioFinal); // 110