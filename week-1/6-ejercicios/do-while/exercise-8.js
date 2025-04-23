/*
Ejercicio 2

Pide contraseñas hasta que el usuario 
introduzca la correcta ("secreto123"). 
Al final, muestra cuántos intentos necesitó.
*/

const secretPassword = "secreto123";
let userPassword;
let intentos = 0;

do {
	let userPassword = prompt("Introduce una contraseña");
	intentos++;
}while(userPassword !== secretPassword);

console.log("¡Correcto! Has introducido correctamente la contraseña.");
console.log("Intentos:", intentos);