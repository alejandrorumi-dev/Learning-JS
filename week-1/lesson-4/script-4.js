/*
🧠 Ejercicio 1 - for loop básico

Muestra en consola los números del 1 al 10 usando un for.
*/

for (let i = 1; i <= 10; i++) {
	console.log(i)
}

/*
🔢 Ejercicio 2 - suma acumulada

Usa un for para sumar los números del 1 al 100 y 
guarda el resultado en una variable suma. Luego muestra el resultado.
*/

let suma = 0;

for (let j = 1; j <= 100; j++) {
	suma += j;
}

console.log("La suma de todos los números es:", suma);

/*
🧮 Ejercicio 3 - tabla de multiplicar

Usa un for para mostrar la tabla del 7 (del 1 al 10) en consola.
*/

let multiplicacion = 7;

for (let i = 1; i <= 10; i++) {
	multiplicacion = 7 * i;
	console.log(`7 x $(i) = $(multiplicacion)`);
}

/*
🔁 Ejercicio 4 - while con contador

Crea un bucle while que cuente desde 10 hasta 1 y lo muestre en consola.
*/

let i = 10;

while (i >= 1) {
	console.log(i);
	i--;
}

/*
➕ Ejercicio 5 - do while validación

Simula que un usuario tiene que ingresar un número mayor que 0. 
Usa un do...while para seguir pidiéndolo mientras el número 
ingresado no sea válido. (Puedes simular el número con una variable 
en lugar de prompt si aún no lo usas).
*/

let numero;

do {
	numero = parseInt(prompt("Ingesa un número mayor que 0"));
} while (numero <= 0);

console.log ("El número ingesado es:", numero);

/*
Explicación de ejercicio

- Primer paso: 'do'. Lo que hace es pedir al usuario un número
- Segundo paso: 'while'. Se pide un número mientras la variable sea menor o igual a 0.
- Tercer paso: 'console.log'. EL bucle se da por finalizado 
				cuando se ingresa un número mayor que 0.
*/

/*
🧩 Ejercicio 6 - Suma de números pares

Haz un programa que calcule la suma de todos los números 
pares del 1 al 100 usando un for.
*/

let sumaPares = 0;

for (let i = 2; i <= 100; i++){
	if (i % 2 === 0) {
		sumaPares += i;
	}
}

console.log ("La suma de los números pares del 2 al 100 es:", sumaPares);

/*
Explicación de ejercicio

- Primer paso: 'let sumaPares = 0;'. Se crea la variable donde se irán guardando
				los números pares.
- Segundo paso: 'for'. Se crea la iteracción donde i vale 2 (primer número par), 
				la condición es que mientras sea menor o igual a 100, se incremente.
- Tercer paso: 'if'. Se crea una condición donde si i divido entre 2, el resto es 0,
				sumaPares = 0 + 2; sumaPares = 2 + 4; sumaPares = 6 + 6; ...
*/

/*
🔁 Ejercicio 7 - Contador hasta número ingresado

Usa un while para contar desde 1 hasta un número 
ingresado por el usuario mediante prompt.
*/

let numeroIngesado = parseInt(prompt("Ingrese un número"));
let contador = 1;

while (contador <= numeroIngresado){
	console.log(contador);
	contador++;
}

console.log(contador);
