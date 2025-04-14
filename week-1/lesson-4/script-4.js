/*
🧠 Ejercicio 1 - for loop básico

Muestra en consola los números del 1 al 10 usando un for.
*/

for (let i = 1; i <=10; i++) {
	console.log(i);
}

/*
🔢 Ejercicio 2 - suma acumulada

Usa un for para sumar los números del 1 al 100 y 
guarda el resultado en una variable suma. Luego muestra el resultado.
*/

let suma = 0; // se crea una variable donde suma vale 0
for (let k = 1; k <= 100; k++) {
	/*
	empieza en 1, la condición se da 100 veces, incrementa
	*/

	suma += k; // x = x + 1
}
console.log(suma);

/*
🧮 Ejercicio 3 - tabla de multiplicar

Usa un for para mostrar la tabla del 7 (del 1 al 10) en consola.
*/

for (let i = 0; i <= 10; i++) { 
	/* 
	empieza en 0, la condición se da 10 veces, incrementa
	El resultado de este for es: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 y 10
	*/
	console.log(7 * i); 
	/*
	se multiplica i por 7
	7*0, 7*1, 7*2, 7*3... 7*10
	*/
}