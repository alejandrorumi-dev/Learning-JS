📘 Lección 3: Operadores en JavaScript

Los operadores son símbolos que nos permiten realizar operaciones sobre valores y variables. Son una de las bases de la lógica en cualquier lenguaje de programación.

🔹 Tipos de operadores que veremos:

1. Operadores aritméticos

Usados para operaciones matemáticas:

```

Operador	Descripción		Ejemplo

+		Suma			5 + 2
-		Resta			5 - 2
*		Multiplicación		5 * 2
/		División		5 / 2
%		Módulo (resto)		5 % 2
**		Exponente		5 ** 2

```

2. Operadores de asignación

Sirven para asignar valores a variables (y combinarlos con otros operadores):

```

Operador	Ejemplo		Equivale a

=		x = 5		Asigna 5 a x
+=		x += 2		x = x + 2
-=		x -= 2		x = x - 2
*=		x *= 2		x = x * 2
/=		x /= 2		x = x / 2

```

3. Operadores de comparación

Comparan dos valores y devuelven true o false:

```

Operador	Descripción			Ejemplo

==		Igual (sin tipo)		5 == "5" ✅
===		Igual (estricto)		5 === "5" ❌
!=		Distinto			5 != 3 ✅
!==		Distinto estricto		5 !== "5" ✅
>		Mayor que			5 > 2 ✅
<		Menor que			2 < 5 ✅
>=		Mayor o igual que		5 >= 5 ✅
<=		Menor o igual que		4 <= 5 ✅

```

4. Operadores lógicos

Se usan para combinar condiciones:

```

Operador	Nombre		Uso

&&		AND (y)		cond1 && cond2
`				`
!		NOT (no)	!cond1

```

**&& (AND)**

- El operador && devuelve true solo si ambas condiciones son true. Si alguna es false, el resultado será false.

```

let a = true;
let b = false;
console.log(a && b);

```

- true && true es true.

- true && false es false.

- false && true es false.

- false && false es false.

**|| (OR)**

- El operador || devuelve true si al menos una de las condiciones es true. Si ambas son false, el resultado será false.

```

let a = true;
let b = false;
console.log(a || b);

```

- true || true es true.

- true || false es true.

- false || true es true.

- false || false es false.

**! (NOT)**

- El operador ! invierte el valor lógico de la condición:

	* Si el valor es true, lo convierte en false.

	* Si el valor es false, lo convierte en true.

```

let a = true;
console.log(!a);

```

- !true es false.

- !false es true.


🎯 Objetivo de esta lección:

- Conocer los distintos tipos de operadores.

- Usarlos en expresiones y condiciones básicas.

- Comenzar a construir lógica combinando varios operadores.