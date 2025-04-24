/*
Ejercicio 1: Crear y acceder

Crea un array con 5 nombres de personas. Muestra el primero 
y el último nombre del array.
*/

let nombres = ["Alex", "Juan", "Jose", "Carlos", "Ruben"];

console.log(nombres[2]);

/*
Corrección de ChatGPT:

¡Bien hecho empezando! Ya estás accediendo correctamente a un 
elemento del array con nombres[2] (eso muestra "Jose"). 
Para completar el ejercicio 1, recuerda que te pedía mostrar 
el primero y el último nombre del array.

** DEBO PRESTAR MÁS ATENCIÓN AL ENUNCIADO. IMPORTANTE **

🛠️ Sugerencia:

let nombres = ["Alex", "Juan", "Jose", "Carlos", "Ruben"];

// Mostrar el primero
console.log("Primer nombre:", nombres[0]);

// Mostrar el último
console.log("Último nombre:", nombres[nombres.length - 1]);


🔎 Notas:

nombres[0] accede al primer elemento.

nombres[nombres.length - 1] accede al último sin importar 
cuántos haya (¡muy útil si el array cambia de tamaño!).
*/