/*
Una tienda de electrodomésticos vende televisores, 
lavadoras y neveras. Los productos tienen precios 
distintos y cada cliente puede comprar más de un producto.

- Los televisores tienen un precio de 300€.

- Las lavadoras tienen un precio de 250€.

- Las neveras tienen un precio de 500€.

Por cada compra de más de 3 productos, se aplica un descuento 
del 10% en el total de la compra.

Además, si el cliente compra productos por más de 1000€, 
se aplica un descuento adicional del 5%.

Al final, debes mostrar el total de la compra, el número 
de productos comprados, el número de productos con descuento 
y el número de productos sin descuento.
*/

let televisorCompra = parseInt(prompt("¿Cuántos televisores quieres?"));
let lavadoraCompra = parseInt(prompt("¿Cuántas lavadoras quieres?"));
let neveraCompra = parseInt(prompt("¿Cuántas neveras quieres?"));

let precioTelevisor = 300;
let precioLavadora = 250;
let precioNevera = 500;

let totalProductos = televisorCompra + lavadoraCompra + neveraCompra;

let total = (televisorCompra * precioTelevisor) +
            (lavadoraCompra * precioLavadora) +
            (neveraCompra * precioNevera);

// Descuento del 10% si compra 3 o más productos
if (totalProductos >= 3) {
  total *= 0.9;
  console.log("Se ha aplicado un 10% de descuento.");
}

// Descuento adicional del 5% si supera 1000 €
if (total > 1000) {
  total *= 0.95;
  console.log("¡Se ha aplicado un 5% de descuento adicional!");
}

console.log("El total de la compra es:", total.toFixed(2), "€");
console.log("Total de productos:", totalProductos);
