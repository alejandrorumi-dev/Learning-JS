/*
Ejercicio 10: Función que retorna booleano

Enunciado: 

Crea una función que reciba una cadena de texto y retorne 
true si contiene la palabra "JavaScript", y false en caso contrario.
*/

function miLenguaje(lenguaje){
	if (lenguaje === "JavaScript".toLowerCase()){
		return true;
	}else{
		return false;
	}
}

console.log(miLenguaje(JavaScript));

/*
Corrección de ChatGPT:

🔧 Correcciones necesarias:

- Uso incorrecto de toLowerCase():

	* "JavaScript".toLowerCase() se convierte en "javascript", 
	así que estás comparando si lenguaje === "javascript" 
	(todo en minúscula).

	* Pero el enunciado dice que la cadena puede contener "JavaScript" 
	(no que sea exactamente igual).

- Error en console.log:

	* Estás pasando JavaScript sin comillas, como si fuera una variable. 
	Y como no existe, te dará un error de referencia.

	* Deberías usar comillas: "JavaScript" o "Me gusta JavaScript".

- Uso de .includes() para detectar si contiene la palabra:

	* Lo más práctico aquí es usar includes.

🛠️ Sugerencia:

function miLenguaje(lenguaje) {
	return lenguaje.includes("JavaScript");
}

console.log(miLenguaje("Me gusta JavaScript"));  // true
console.log(miLenguaje("Me gusta Python"));      // false

- También puedes hacer que no importe si escriben en mayúsculas o 
minúsculas:

function miLenguaje(lenguaje) {
	return lenguaje.toLowerCase().includes("javascript");
}

⭐ Comentarios positivos:

- Buena intención de lógica.

- Estás empezando a usar métodos de string como .toLowerCase(), 
eso está genial.

📊 Nota final: 6/10
*/