/*
Ejercicio: Pedir una contraseña
Enunciado:
Crea un programa que pida al usuario ingresar una contraseña. 
El programa debe seguir pidiendo la contraseña hasta que el 
usuario ingrese la correcta. Si la contraseña es correcta, 
muestra un mensaje de bienvenida.
*/

let secretPassword = "secret1234";
let userPassword;

while (userPassword !== secretPassword){
	userPassword = prompt("Ingresa la contraseña:");
}

console.log("Correcto. Has ingresado correctamente la contraseña.");