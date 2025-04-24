/*
Ejercicio 5: Función con parámetro opcional

Enunciado:

Crea una función que reciba un saludo (opcional) y un nombre . 
Si no se proporciona saludo, debe usar "Hola".
*/

function saludar (saludo = "Hola", nombre = "Invitado"){
	return `${saludo}, ${nombre}`;
}

saludar("", "Carlos");
saludar("Bienvenido", "");
saludar("Bienvenido", "Juan");
saludar();

/*
Corrección de ChatGPT:

Comentarios:

- La función está correctamente definida con valores predeterminados.

- Cambio importante: Cuando se pasa una cadena vacía, se ha añadido 
una comprobación explícita en la función para que utilice "Hola" 
como saludo por defecto si se pasa "" como valor de saludo. Esto 
asegura que no haya valores vacíos no deseados.

- El código está bien estructurado y es bastante claro.

🛠️ Sugerencia:

function saludar(saludo = "Hola", nombre = "Invitado") {

	**AQUÍ ESTÁ LA DIFERENCIA**

    // Si el saludo está vacío (""), lo reemplazamos por "Hola"
    if (saludo === "") { **AQUÍ ESTÁ LA DIFERENCIA**
        saludo = "Hola";
    }

	// Si el nombre está vacío (""), lo reemplazamos por "Invitado"
	if (nombre === ""){
		nombre = "Invitado";	
	}

	**AQUÍ ESTÁ LA DIFERENCIA**

    return `${saludo}, ${nombre}`;
}

console.log(saludar("", "Carlos"));       // "Hola, Carlos"
console.log(saludar("Bienvenido", ""));   // "Bienvenido, Invitado"
console.log(saludar("Bienvenido", "Juan"));// "Bienvenido, Juan"
console.log(saludar());                   // "Hola, Invitado"

📊 Nota final: 7/10
*/