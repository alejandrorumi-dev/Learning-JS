/*
EJERCICIO 2

1. Crea las siguientes variables en tu archivo script.js:

- producto (un string que represente el nombre de un producto que te guste, por ejemplo, "Café").

- precio (un número con el precio del producto, por ejemplo, 4.5).

- cantidad (un número con la cantidad de ese producto que comprarías, por ejemplo, 2).

- total (un número que sea el total de la compra, calculado como precio * cantidad).

2. Crea un objeto compra con las siguientes propiedades:

- producto (usa la variable producto).

- precio (usa la variable precio).

- cantidad (usa la variable cantidad).

- total (usa la variable total).

3. Imprime en consola:

- El nombre del producto y su precio.

- La cantidad que deseas comprar y el total de la compra.

- El objeto compra completo.
*/

let producto = "Creatina";
let precio = 10;
let cantidad = 5;
let total = precio * cantidad;

let compra = {
	producto,
	precio,
	cantidad,
	total
}

console.log("El nombre del producto es:", producto, "y su precio es:", precio);
console.log("La cantidad que deseo comprar es:", cantidad, "y el total de la compra es:", total);
console.log(compra);