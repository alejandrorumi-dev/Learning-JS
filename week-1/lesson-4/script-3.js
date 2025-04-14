// ESTRUCTURAS DE CONTROL

// FOR LOOP

for (let i = 0; i < 5; i++) {
	console.log(i);
}

/* 
RESULTADO: 
0
1
2
3
4

Explicación: el 'for loop' se utiliza cuando sabemos
las veces que se repiterá el bloque de codigo, en este 
caso se repite 5 veces.
i vale 0 y la condición es que si i es menor que 5 se
sume 1 a i.
*/

// WHILE LOOP

let i = 0;

while (i < 5) {
	console.log(i);
	i++;
}

/* 
RESULTADO: 
0
1
2
3
4

Explicación: el 'while loop' se utiliza cuando no sabemos
cuantas veces se repiterá el bloque de codigo, en este
caso sí sabemos por el ejemplo, pero lo normal es no
saberlo.
*/

// DO...WHILE LOOP

let j = 0;

do {
	console.log(j);
	j++;
} while (j < 5);

/*
RESULTADO: 
0
1
2
3
4

Explicación: el 'do-while loop' ejecuta el bloque al menos
una vez y luego envia la condicion (while (j < 5))
*/