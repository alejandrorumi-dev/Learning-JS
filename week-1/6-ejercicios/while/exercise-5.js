/*
Ejercicio: Contador de votos

Enunciado:

Crea un programa que simule una votación. El programa 
debe seguir pidiendo el voto hasta que el usuario ingrese "fin". 
Los votos válidos son "A", "B" y "C". Al final, muestra cuántos 
votos ha recibido cada opción.
*/

let voto;
let votoA = 0, votoB= 0, votoC = 0;

while (voto !== "fin"){ // mientras voto sea distinto a 'fin', el bucle continua.
	voto = prompt("Introduce tu voto (A, B, C o 'fin' para terminar");
	if (voto === "A"){ // si el usuario introduce "A", se suma un voto a votoA
		votoA++;
	}else if (voto === "B"){ // si el usuario introduce "B", se suma un voto a votoB
		votoB++;
	}else if (voto === "C"){ // si el usuario introduce "C", se suma un voto a votoC
		votoC++;
	}
}

console.log("Votos para A:", votoA);
console.log("Votos para B:", votoB);
console.log("Votos para C:", votoC);