/* =======================
📗 FÁCIL
======================= */

// 1. Crea un objeto llamado alumno con propiedades: 
// nombre, edad y curso.
//    Luego muestra por consola el valor de cada propiedad.

let alumno = {
	nombre: "Antonio",
	edad: 15,
	curso: "3º ESO"
}

console.log(alumno.nombre)
console.log(alumno.edad)
console.log(alumno.curso)

// 2. Agrega al objeto alumno una nueva propiedad llamada 
// aprobado (true o false).

alumno.aprobado = true;
//    Luego cambia el valor de curso a otro distinto.

alumno.curso = "4º ESO";

// 3. Agrega al objeto alumno un método llamado mostrarInfo 
// que muestre:
//    "Nombre: [nombre], Edad: [edad], Curso: [curso]"

let alumno = {
	nombre: "Antonio",
	edad: 15,
	curso: "3º ESO",
	mostrarInfo: function () {
		return `Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`
	}
}

alumno.mostrarInfo();

/* =======================
📘 INTERMEDIO
======================= */

// 4. Crea un objeto producto con una propiedad nombre 
// y otra precio.
//    Luego crea una función que reciba un objeto y devuelva:
//    "El producto [nombre] cuesta [precio]€."

let producto = {
	nombre: "Altavoz",
	precio: 35,
	datos: function () {
		return `El producto ${this.nombre} cuesta ${this.precio} €`
	}
}

producto.datos();

// 5. Recorre todas las propiedades del objeto alumno con 
// `for...in` y muestra solo las que tengan valor tipo string.

for (let clave in alumno) {
	if (typeof alumno[clave] === "string") {
		console.log(clave + ": " + alumno[clave]);
	}
}


// 6. Crea un array de objetos tipo:
//    [{ nombre: "Libro A", paginas: 200 }, { nombre:
// "Libro B", paginas: 150 }]
//    Usa `map()` para devolver un nuevo array solo con
// los nombres en mayúsculas.

let libros = [
	{ nombre: "Libro A", paginas: 200 },
	{ nombre: "Libro B", paginas: 150 }
]

let librosMayuscula = libros.map(libro => libro.nombre.toUpperCase())

console.log(librosMayuscula)

/* =======================
📙 DIFÍCIL
======================= */

// 7. Crea una función que reciba un array de objetos alumno
// con propiedad nota.
//    Devuelve un array solo con los nombres de los
// aprobados (nota ≥ 5).

let aprobados = alumno
	.filter(alum => alum.nota >= 5)
	.map(alum => alum.nombre);

console.log(aprobados); // ["Ana", "Fran"]

// 8. Crea un objeto persona con propiedades y un método
// llamado duplicarEdad.
//    El método debe multiplicar su edad por 2 y actualizarla
// en el objeto.

let persona = {
	nombre: "Alex",
	edad: 28,
	ciudad: "Almería",
	duplicarEdad: function () {
		this.edad = this.edad * 2;
		return this.edad;
	}

}

console.log(persona.duplicarEdad())



// 9. Crea una función que reciba dos objetos y devuelva
// true si tienen las mismas propiedades y valores
// (comparación manual, sin `JSON.stringify()`).

function compararObjetos(obj1, obj2) {
	const claves1 = Object.keys(obj1);
	const claves2 = Object.keys(obj2);

	if (claves1.length !== claves2.length) return false;

	for (let clave of claves1) {
		if (obj1[clave] !== obj2[clave]) return false;
	}

	return true;
}

console.log(compararObjetos(objetoA, objetoB)); // true
console.log(compararObjetos(objetoA, objetoC)); // true