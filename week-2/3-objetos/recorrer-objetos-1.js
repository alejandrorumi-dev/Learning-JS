/*
🔹 9. RECORRER OBJETO CON for...in

Enunciado:

Recorre el objeto persona y muestra todas las claves 
con sus respectivos valores.
*/

let persona = {
	nombre: "Lucía",
	edad: 28,
	ciudad: "Madrid"
  };

for (let clave in persona){
	console.log(clave + ": " + persona[clave]);
}