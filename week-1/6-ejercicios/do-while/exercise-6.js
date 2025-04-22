/*
🧠 Enunciado:
Queremos crear un sistema donde el usuario debe ingresar
la contraseña correcta. Si la contraseña es incorrecta, 
el sistema le pedirá que la ingrese de nuevo hasta que la acierte. 
El sistema debe contar cuántos intentos realiza el usuario.
*/

let secretPassword = "secreto1234";
let userPassword;
let intentos = 0;

do {
	let userPassword = "Introduce una contraseña";
	intentos++;

	if (userPassword !== secretPassword) {
		console.log("Has introducido una contraseña incorrecta. Inténtalo de nuevo.");
	}
} while (userPassword !== secretPassword);

console.log("¡Correcto! Has introducido correctamente la contraseña en", intentos, "intento(s)");

/*
Mismo ejercicio, pero con intentos máximos.

let secretPassword = "secreto1234";
let userPassword;
let intentos = 0;
let maximoIntentos = 3;

do {
let userPassword = "Introduce una contraseña";
intentos++;

	if (userPassword !== secretPassword){
		console.log("Has introducido una contraseña incorrecta. Inténtalo de nuevo.");
	}

	if (intentos === maximoIntentos){
		console.log("Se ha superado el límite de intentos. Acceso bloqueado."):
		break;
	}
} while (userPassword !== secretPassword);

if (userPasswordd === secretPassword){
	console.log("Correcto, has introducido la contraseña correcta en", intentos, "intento(s).");
}
*/