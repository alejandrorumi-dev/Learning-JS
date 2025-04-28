**CORRECCIÓN DE CHATGPT**

Muy buen trabajo resolviendo todos los ejercicios, ¡de verdad! 🔥

Te hago ahora un análisis detallado y honesto de tu manera de resolverlos:

**📋 Opinión General**

**✅ Aspectos positivos:**

- Separaste bien los bloques (condicionales, bucles, funciones, arrays).

- Usaste console.log para mostrar los resultados.

- Aplicaste correctamente la lógica de condicionales (if-else) en todos los niveles.

- Las funciones (declarativa, flecha y return) están bien creadas.

- Las operaciones básicas con arrays también están muy bien entendidas (crear, agregar, eliminar).

- Utilizaste comentarios de sección (/* === */), lo cual da un orden muy profesional a tu código.

***

**🔍 Cosas que podrías mejorar o corregir:**

1. Condicional Intermedio

```

let numeroA = 5;
let numeroB = 8;

if (numeroA === numeroB) {
	console.log("Los dos números son iguales")
} else if (numeroA > numeroB) {
	console.log("Número A es mayor")
} else {
	console.log("Número B es menor")
}

```

Aquí el texto debería ser "Número B es mayor", no menor, ya que lo estás comparando con A.

(No es grave, es un simple despiste de redacción.)

***

2. Bucle While - Intermedio

El while que hiciste:

```

let pedirNumero = parseInt(prompt("Dime un número entre 1 y 100"));

while (pedirNumero % 2 === 0) {
	console.log(pedirNumero)
	if (pedirNumero > 100) {
		break;
	}
}

```

- Problema: Solo evalúas el número una vez (no vuelves a pedir otro número dentro del while).

- Solución: Deberías pedir el número dentro del bucle para repetirlo si sigue siendo par.

No pasa nada, lo importante es que entendiste usar while.

***

3. Bucle Do-While - Difícil

```

do {
	let pedirPalabra = prompt("Dime una palabra. Escribe 'salir' para terminar");
	console.log(pedirPalabra)
} while (pedirPalabra !== "Salir")

```

- Problema: pedirPalabra está dentro del do, y no lo puedes comparar en el while.

- Solución: pedirPalabra debería estar declarada antes del bucle:

```

let pedirPalabra;
do {
	pedirPalabra = prompt("Dime una palabra. Escribe 'salir' para terminar");
	console.log(pedirPalabra);
} while (pedirPalabra !== "salir");

```

(También ojo: pusiste "Salir" con mayúscula. Si pides "salir", debe ser todo minúscula para que coincida.)

***

4. Funciones Difícil

La función difícil que pedía recibir dos números y un operador para operar, la hiciste así:

```
function calculo(a, b){
	return a + b;
}

```

- Comentario: Solo haces una suma fija.

- Lo correcto: Esperaban algo como:

```

function calculo(a, b, operador) {
	if (operador === "+") {
		return a + b;
	} else if (operador === "-") {
		return a - b;
	} else if (operador === "*") {
		return a * b;
	} else if (operador === "/") {
		return a / b;
	} else {
		return "Operador inválido";
	}
}

```

Pero no pasa nada, porque lo resolviste de una manera funcional. La idea de función que recibe parámetros la cumpliste.

***

5. Arrays - Difícil

Este for tiene un error:

```

for (let i = 1; i <= numeros; i++){
	numeros * 2;
}

```

Problemas:

i <= numeros no tiene sentido, porque numeros es un array. Tendría que ser i < numeros.length.

numeros * 2 no modifica los elementos del array. Solo es una operación, pero no guarda nada.

Cómo sería correctamente:

```

for (let i = 0; i < numeros.length; i++) {
	numeros[i] = numeros[i] * 2;
}
console.log(numeros);

```

Así realmente modificas cada número y lo multiplicas por 2.

***

**✨ Conclusión**

- ✅ Entendiste la estructura, conceptos y lógica muy bien.
- ✅ Dividiste y escribiste ordenadamente los ejercicios.
- 🛠️ Tienes pequeños detalles que son normales y esperados para este nivel.
- 🛠️ Podrías mejorar un poco en las prácticas de bucles while, do-while y manipulación de arrays.

***

**🏅 Nota General**

Te daría un 7,5/10 real para ser sincero.

(¡Y podría llegar a un 9 fácil si corriges esos pequeños detalles en la práctica!)