/*
🔹 7. MÉTODO EN OBJETO

Enunciado:

Agrega al objeto persona un método llamado saludar 
que muestre por consola:

"Hola, soy Lucía"
*/

let persona = {
	nombre: "Lucía",
	edad: 28,
	ciudad: "Madrid",
	saludar: function(){
		console.log(`Hola, soy ${this.nombre}`)
	}
}

persona.saludar();
