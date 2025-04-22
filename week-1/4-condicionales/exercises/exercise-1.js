/*  
Ejercicio: "Calculadora de Edad y Descuentos"

Escribe un programa que pida al usuario su edad, 
el tipo de producto que compra (producto A, B o C), 
y el monto total de su compra. El programa debe calcular lo siguiente:

- Si el usuario tiene más de 18 años, muestra un mensaje diciendo 
que puede aplicar un descuento.

- Si el usuario es menor de 18 años, muestra un mensaje diciendo 
que no puede aplicar descuento.

- Si el usuario compra el producto A, le aplica un 20% de descuento.

- Si el usuario compra el producto B, le aplica un 15% de descuento.

- Si el usuario compra el producto C, no tiene descuento.

- Si el usuario tiene más de 65 años, le aplica un 10% adicional 
de descuento (además de cualquier descuento que ya haya recibido).

Al final, muestra el monto final después de aplicar el descuento, 
y un mensaje indicando el tipo de descuento aplicado.
*/

let edad = parseInt(prompt("Ingresa tu edad"));
let producto = prompt("Ingresa el producto que compras (A, B o C").toUpperCase();
let montoTotal = parseFloat(prompt("Ingresa el monto final de tu compra"));
let montoFinal = montoTotal;

if (edad >= 18) {
	console.log("Puedes aplicar a un tipo de descuento");

if (producto === 'A') {
	console.log("Producto A: 20% de descuento")
}else if (producto === 'B') {
	console.log("Producto B: 15% de descuento");
}else if (producto === 'C'){
	console.log("Produto C: no tiene descuento");
}else{
	console.log("Producto no válido");
}

if (edad > 65) {
	montoFinal -= montoFinal * 0.1;
	console.log("Tienes un 10% de descuento adicional")
}

} else {
	console.log("No puedes aplicar a ningún descuento porque eres menor de edad");
}

console.log("Monto final:", montoFinal);








