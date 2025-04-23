/*
Este ejercicio usa el parámetro REST para 
aceptar cualquier cantidad de argumentos:
*/

function sumarTodo(...numeros) {
    return numeros.reduce((acumulado, numero) => acumulado + numero, 0);
}

console.log(sumarTodo(1, 2, 3, 4, 5)); // 15
console.log(sumarTodo(10, 20, 30));   // 60
