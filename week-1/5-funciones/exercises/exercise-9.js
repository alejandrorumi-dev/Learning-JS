/*
Ejercicio 9: Función que valida datos

Enunciado:

Crea una función que reciba una edad y devuelva un mensaje 
si es válida (mayor que 0 y menor que 120), o un mensaje de 
error si no lo es.
*/

function miEdad(edad){
	if (edad >= 0 && edad <= 120){
		return "tu edad es válida";
	}else{
		return "tu edad no es válida";
	}
}

console.log("Tu edad es:", miEdad(25));

/*
Corrección de ChatGPT:

Todo correcto, pero aquí van algunas sugerencias para 
mejorarlo un poco más:

- ✅ Opcional: mejora el límite inferior

	* Técnicamente, una edad de 0 no suele considerarse “válida” 
	salvo que estemos hablando de un recién nacido.

	* Podrías cambiar la condición a edad > 0 && edad <= 120 
	para que tenga más sentido.

- ✅ Opcional: mejora el mensaje

	* Ahora mismo siempre dice Tu edad es:, aunque el mensaje 
	devuelto diga que no es válida.

	* Puedes adaptar los mensajes directamente en el console.log 
	o dentro de la función.

Comentarios:

- Muy buena estructura del if.

- Uso correcto de return y console.log.

- Código claro y sin errores de sintaxis.

- Los límites están bien pensados (salvo el detalle de edad >= 0, 
que depende del contexto).

📊 Nota final: 10/10
*/