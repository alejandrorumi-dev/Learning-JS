/*
Ejemplo de definir parámetros con valores predeterminados.
*/

function saludar (nombre = "Invitado", edad = 30){
	console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
}

saludar(); // Valores predeterminados => Hola Invitado. Tienes 30 años.
saludar("Carlos", 25); // Valores proporcionados. => Hola Carlos. Tienes 25 años.