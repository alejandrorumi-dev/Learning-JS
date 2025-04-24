/*
Ejercicio 7: Función con parámetros REST

Enunciado:

Crea una función que reciba una cantidad indefinida 
de números y devuelva su suma total.
*/

function sumarTodo(...numeros) {
	return numeros.reduce((acumulado, numero) => acumulado + numero, 0);
}

console.log(sumarTodo(1, 2, 3, 4, 5));

/*
Corrección de ChatGPT:

Comentarios:

- ✅ Usas correctamente los parámetros REST (...numeros), 
que permite recibir cualquier cantidad de argumentos.

- ✅ Muy bien usado el método .reduce(), que es la forma más 
elegante y moderna de sumar arrays.

- ✅ Código limpio, claro y funcional.

- ✅ El console.log() funciona perfectamente y da el 
resultado esperado: 15.


🛠️ Sugerencia:

- Podrías añadir una pequeña validación o mensaje extra 
por si no se pasan números:

if (numeros.length === 0) return "No has pasado ningún número.";

- También podrías usar console.log() con una frase:

console.log("La suma total es:", sumarTodo(1, 2, 3, 4, 5));

📊 Nota final: 10/10
*/