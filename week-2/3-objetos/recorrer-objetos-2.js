/*
🔹 10. USAR Object.keys() / values() / entries()

Enunciado:

Muestra por consola:

las claves del objeto persona

los valores del objeto persona

las entradas del objeto persona (clave-valor)
*/

let persona = {
	nombre: "Lucía",
	edad: 28,
	ciudad: "Madrid"
  };
  
  console.log(Object.keys(persona));
  // ["nombre", "edad", "ciudad"]
  console.log(Object.values(persona));
  // ["Lucía", 28, "Madrid"]
  console.log(Object.entries(persona));
  // [["nombre", "Lucía"], ["edad", 28], ["ciudad", "Madrid"]]
  