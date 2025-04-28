/*
🛠️ Mini Proyecto: Gestión de una lista de estudiantes

Enunciado:

Tienes este array inicial de estudiantes:

let estudiantes = ["Ana", "Juan", "Pedro", "Lucía", "Carlos"];

Realiza las siguientes operaciones en orden:

1. Agregar dos nuevos estudiantes: "María" al final 
y "Sofía" al principio.

2. Eliminar a "Pedro" del array.

3. Verificar si "Lucía" está en la lista.

4. Crear un nuevo array que contenga todos los 
nombres en mayúsculas.

5. Ordenar alfabéticamente la lista original de estudiantes.

6. Mostrar cada estudiante en consola con el 
mensaje: "Estudiante: [nombre]".

7. Comprobar si todos los nombres tienen más de 3 letras.

📋 Reglas:

1. Usa los métodos que ya aprendiste (push, unshift, 
splice, includes, map, sort, forEach, every).

2. No olvides imprimir los resultados de cada paso en consola.

3. Organiza el código paso a paso (comentarios para 
cada operación si quieres).

✏️ ¿Listo para intentarlo?

Es todo tuyo. 🚀

(Tómate tu tiempo. Luego lo corregimos y si quieres, 
podemos hacer una versión aún más difícil).
*/

let estudiantes = ["Ana", "Juan", "Pedro", "Lucía", "Carlos"];

// Primer paso
estudiantes.unshift("Sofía") // Agregar "Sofía" al inicio del array

// Segundo paso
estudiantes.push("María") // Agregar "María" al final del array

console.log(estudiantes) // Verificar que ambos nombres están incluidos

// Tercer paso
estudiantes.splice(3, 1)

console.log(estudiantes);

/*
Otra solución para eliminar a Pedro

let index = estudiantes.indexOf("Pedro");
if (index !== -1) {
    estudiantes.splice(index, 1);
}
*/

// Cuarto paso
let comprobarNombre = estudiantes.some(name => name === "Lucía");

if (comprobarNombre === true){
	console.log("Sí, Lucía está en la lista:", estudiantes)
}else{
	console.log("No, Lucía no está en la lista.")
}

// Quinto paso
let nombreMayuscula = estudiantes.map(name => name.toUpperCase())
// Poner en mayúscula la lista del array

console.log(nombreMayuscula);

// Sexto paso
estudiantes.sort() // Ordenar alfabéticamente la lista

console.log(estudiantes);

// Séptimo paso
estudiantes.forEach(estudiante => console.log("Estudiante:" + estudiante));

// Octavo paso
let nombresLargos = estudiantes.every(name => name.length > 3);

if (nombresLargos){
	console.log("Todos los estudiantes tienen más de 3 letras en su nombre");
}else{
	console.log("No todos los estudiantes tienen más de 3 letras en su nombre");
}