/*
Ejercicio 3: Añadir elementos

Agrega un nuevo nombre al final del array y otro al principio. 
Muestra el array resultante.
*/

let nombres = ["Alex", "Juan", "Jose", "Carlos", "Ruben"];

nombres.push("Miguel"); // Añadir elemento al final del array

nombres.unshift("Ricardo"); // Añadir elemento al principio del array

console.log("Los nombres del array son:", nombres);

// Usar [ console.table(nombres); ] para ver el array como una tabla

/*
Corrección de ChatGPT:

🟢 Lo positivo:

- Usaste push("Miguel") para añadir al final. ✔️

- Usaste unshift("Ricardo") para añadir al principio. ✔️

- Mostraste el array con un console.log claro y descriptivo. ✔️

🟡 Sugerencias:

- Podrías usar console.table(nombres) para ver el array 
como una tabla (útil visualmente).

- También podrías mostrar la longitud del array con nombres.length 
si quieres practicar más cosas.

🧠 Nota: 10/10
*/