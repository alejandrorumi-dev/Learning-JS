/*
Ejercicio 6: Función que devuelve otra función

Enunciado:

Crea una función multiplicador que reciba un número y 
devuelva una función que multiplique cualquier otro número 
por ese número.
*/

function multiplicador(n) {
	return function (multiplicacion) {
		return n * multiplicacion;
	}
}

let calculo = multiplicador(2);
console.log(calculo(5));

/*
Corrección de ChatGPT:

Comentarios:

✅ Lo que hiciste bien:
✔️ Usaste correctamente una función que retorna otra función, 
que era justo el objetivo del ejercicio.

✔️ Tu estructura es limpia y clara: una función externa que 
devuelve otra función anónima interna.

✔️ Probaste bien el funcionamiento con un console.log(calculo(5)) 
tras haber guardado el resultado de multiplicador(2).

🧠 Sugerencias para mejorar:

Podrías añadir un pequeño console.log descriptivo para practicar 
cómo comunicarte en consola:

console.log("Resultado de multiplicar 2 por 5:", calculo(5));

📊 Nota final: 9,5 / 10
*/
