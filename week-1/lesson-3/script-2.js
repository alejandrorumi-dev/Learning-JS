/*
💡 Ejercicio de operadores

Un estudiante tiene tres calificaciones:

- nota1 = 7

- nota2 = 5

- nota3 = 8

- Calcula el promedio de las tres notas.

- Crea una variable booleana que indique 
si ha aprobado (el promedio debe ser mayor o igual a 6).

- Verifica si alguna nota es menor que 4 (suspenso grave).

- Crea un objeto resultado que contenga 
el promedio, si aprobó y si tiene algún suspenso grave.

- Muestra ese objeto en consola.
*/

let nota1 = 7;
let nota2 = 5;
let nota3 = 8;

let promedio = (nota1 + nota2 + nota3) / 3;

let aprobado = promedio >= 6;

let suspensoGrave = nota1 < 4 || nota2 < 4 || nota3 < 4;

let resultado = {
	promedio,
	aprobado,
	suspensoGrave
}

console.log(resultado);