/*
🛠️ Mini Proyecto: Gestor de Tienda de Productos

Enunciado:

Eres el responsable de una pequeña tienda.
Tienes que crear un programa que gestione productos.

Tienes este array inicial:

let productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
  { nombre: "Gorra", precio: 15 }
];

🧩 Tareas a realizar:

1. Agregar un nuevo producto { nombre: "Calcetines", precio: 5 } 
al final del array.

2. Eliminar el producto "Gorra" del array.

3. Encontrar si existe un producto llamado "Pantalón" 
en la tienda.

4. Crear un nuevo array solo con los nombres de los 
productos en mayúsculas.

5. Filtrar todos los productos que valgan más de 20 euros.

6. Calcular el precio total de todos los productos 
(usando reduce).

8. Mostrar en consola cada producto con su nombre y precio, 
con el formato:

"Producto: Camisa - Precio: 20€"

8. Verificar si todos los productos cuestan más de 5 euros.

📋 Reglas:

- Usa los métodos que ya conoces (push, splice, 
includes/some, map, filter, reduce, forEach, every...).

- Imprime el resultado de cada tarea en consola.

- Organiza el código de forma ordenada (puedes 
numerar los pasos).

🎯 Consejo:

- No intentes resolver todo de golpe.

- Haz paso por paso como hicimos antes.

- Si te atascas en uno, me dices y te ayudo enseguida.
*/

let productos = [
	{ nombre: "Camisa", precio: 20 },
	{ nombre: "Pantalón", precio: 30 },
	{ nombre: "Zapatos", precio: 50 },
	{ nombre: "Gorra", precio: 15 }
];

// Primer paso
productos.push({ nombre: "Calcetines", precio: 5 })

// Segundo paso
productos.splice(3, 1);

// Tercer paso
let pantalon = productos.find(producto => producto.nombre === "Pantalón");

if (pantalon){
	console.log("Existe el producto:", pantalon);
}else{
	console.log("No existe el producto");
}

// Cuarto paso
let productosMayuscula = productos.map(producto => producto.nombre.toUpperCase())

// Quinto paso
let mayorQue = productos.filter(producto => producto.precio > 20)

if (mayorQue.length > 0){
	console.log("Productos con un precio superior a 20€:", mayorQue)
}else{
	console.log("Productos con un precio inferior a 20€:")
}

// Sexto paso
let suma = productos.reduce((acc, producto) => acc + producto.precio, 0)

// Séptimo paso
productos.forEach(producto => console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}€`));

// Octavo paso
let productoCinco = productos.every(producto => producto.precio > 5);

if (productoCinco){
	console.log("Todos los productos cuestan más de 5€")
}else{
	console.log("No todos los productos cuestan más de 5€")
}