/*
💡 Ejercicio: Comparador de precios

Tienes dos productos y quieres saber cuál es más caro, 
si cuestan lo mismo, y la diferencia de precio entre ellos.

- Crea dos variables precioProducto1 y precioProducto2 
con valores numéricos diferentes.

- Calcula la diferencia de precio entre ambos.

- Crea tres variables booleanas:

mismoPrecio: si los precios son iguales.

producto1MasCaro: si el primer producto es más caro.

producto2MasCaro: si el segundo producto es más caro.

- Agrupa los resultados en un objeto comparacion.

- Muéstralo por consola.
*/

let precioProducto1 = 150;
let precioProducto2 = 200;

let diferencia = precioProducto2 - precioProducto1;

let mismoPrecio = precioProducto1 === precioProducto2;
let producto1MasCaro = precioProducto1 > precioProducto2;
let producto2MasCaro = precioProducto1 < precioProducto2;

let comparacion = {
	diferencia,
	mismoPrecio,
	producto1MasCaro,
	producto2MasCaro
}

console.log(comparacion);