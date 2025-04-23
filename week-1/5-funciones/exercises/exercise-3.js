/*
Ejercicio 3: Función flecha
Enunciado: 
Crea una función flecha que reciba un nombre 
y devuelva el mensaje: "Bienvenido, <nombre>".
*/

function miNombre(nombre) {
	return "¡Bienvenido, ${nombre}";
}

console.log(miNombre("Alex"));

/*
Corrección de ChatGPT:

Comentarios:

- Positivo: El código está muy cerca de ser correcto. 
El uso de funciones y parámetros es adecuado y la lógica 
de la función es clara.

- Corrección: El único detalle es que en la línea donde 
estás concatenando el valor de nombre con el string 
"¡Bienvenido, " usas comillas dobles, pero necesitas 
usar backticks (`) para que puedas hacer la interpolación 
de variables con ${nombre}.

	* Las comillas dobles no permiten hacer esto, por lo que 
	es importante tener en cuenta la diferencia entre usar " 
	(comillas dobles), ' (comillas simples) y backticks (`), 
	que son las que permiten interpolar variables dentro de un string.

🛠️ Sugerencia:

function miNombre(nombre) {
    return `¡Bienvenido, ${nombre}`;  => ** AQUÍ ESTÁ LA DIFERENCIA **
}

console.log(miNombre("Alex"));

📊 Nota final: 9/10
*/