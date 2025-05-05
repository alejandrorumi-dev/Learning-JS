/*
🔹 12. ARRAY DE OBJETOS CON MÉTODOS

Enunciado:

Crea un array con dos objetos persona:

{ nombre: "Ana", edad: 20 }

{ nombre: "Luis", edad: 25 }
Usa map() para obtener un array solo con los nombres.
*/

let personas = [
	{nombre: "Ana", edad: 20},
	{nombre: "Luis", edad: 25}
]

let nombres = personas.map(nombre => nombre.nombre);

console.log(nombres)
