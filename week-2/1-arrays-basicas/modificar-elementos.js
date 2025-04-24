/*
Ejercicio 2: Modificar elementos

Sustituye el tercer nombre del array por otro distinto y 
muestra el array completo.
*/

let nombres = ["Alex", "Juan", "Jose", "Carlos", "Ruben"];

nombres[2] = "Miguel";

console.log(nombres);

/*
nombres[x] = "";

Esto sirve para modificar el valor de dentro de un array.

En el ejercicio, como indica el enunciado, se debe modificar el
tercer nombre, y como en arrays se empieza a contar desde 0, el nombre
sustituido es "Jose" por "Miguel". 

[0, 1, 2] => ["Alex", "Juan", "Jose"] => ["Alex", "Juan", "Miguel"]
*/
