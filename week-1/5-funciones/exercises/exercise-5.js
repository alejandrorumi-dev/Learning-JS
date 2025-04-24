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

- Cuando se pasa una cadena vacía ("") para el saludo, 
debe usarse "Bienvenido" como saludo, y si no se pasa nombre, 
debe tomar el valor predeterminado de "Invitado".

- La llamada saludar() debería devolver "Hola, Invitado".

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