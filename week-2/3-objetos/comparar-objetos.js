/*
🔹 11. COMPARAR OBJETOS

Enunciado:

Crea dos objetos a y b con los mismos datos 
({ nombre: "Ana" }).
Luego crea un tercer objeto c que sea igual a a.
Compara a === b y a === c y explica por qué dan 
esos resultados.
*/

let personaA = {
	nombre: "Ana"
}

let personaB = {
	nombre: "Ana"
}

let personaC = personaA;

console.log(personaA === personaB)

/*
Esto sería falso, ya que aunque tienen el mismo valor 
[nombre: "Ana"], están guardados en diferente sitio en la
memoria, por lo que no valen lo mismo a pesar de tener el
mismo valor
*/

console.log(personaA === personaC)

/*
Esto sería verdadero, ya que al crear el objeto 
[let personaC = personaA], ambos objetos pasan a tener el mismo
valor y misma referencia en la memoria
*/