/*
sort()

➡️ Ordena [9, 5, 7, 1, 3] de menor a mayor.
*/

let numeros = [9, 5, 7, 1, 3]

numeros.sort((a, b) => a - b)

/* SORT ordena elementos como STRINGS, no como números.
En este caso sale bien porque son un único dígito, pero
si hubiera uno con dos dígitos habría errores. La mejor forma
es: 
x.sort((a, b) => a - b)
*/

console.log(numeros);