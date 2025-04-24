/*
Ejercicio 4: Eliminar elementos

Elimina el primer y el último nombre del array. Muestra 
el array actualizado.
*/

let nombres = ["Alex", "Juan", "Jose", "Carlos", "Ruben"];

nombres.shift(); // Eliminar el primer nombre del array

nombres.pop(); // Eliminar el último nombre del array

console.log(nombres);

/*
Corrección de ChatGPT:

🟢 Lo positivo:
- nombres.shift() elimina el primer elemento. ✔️

- nombres.pop() elimina el último elemento. ✔️

- Mostraste el resultado con un console.log. ✔️

🛠️ Sugerencias:

Podrías mostrar qué nombres han sido eliminados almacenando 
el resultado de shift() y pop() en variables:

let eliminadoInicio = nombres.shift();
let eliminadoFinal = nombres.pop();

console.log("Nombre eliminado al principio:", eliminadoInicio);
console.log("Nombre eliminado al final:", eliminadoFinal);
console.log("Array actualizado:", nombres);

🧠 Nota: 10/10
*/