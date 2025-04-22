🧠 Lección 4: Condicionales y Estructuras de Control

Las estructuras de control permiten ejecutar diferentes bloques de código dependiendo de si se cumplen ciertas condiciones.

**🔹 if, else if, else**

Estas estructuras evalúan expresiones booleanas y ejecutan el bloque de código correspondiente:

```

let edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

```

**También puedes usar múltiples condiciones con else if:**

```

let nota = 7;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

```

**🔹 Operador ternario (? :)**

Es una forma abreviada de escribir una condición simple:

```

let esMayor = edad >= 18 ? "Sí" : "No";
console.log("¿Es mayor de edad?", esMayor);

```

**🔹 switch (estructura alternativa)**

Se usa cuando tienes que comparar una variable con varios valores posibles:

```

let dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("Casi fin de semana");
    break;
  default:
    console.log("Día normal");
}

```

⚠️ Recuerda usar break después de cada case para que no se ejecuten todos los casos siguientes.

💡 Comparación rápida

- if/else => Comparaciones booleanas y condiciones complejas
- switch => Comparar una variable con muchos valores exactos
- ? : => Condiciones simples en una sola línea

**For Loop**

El bucle for se usa para repetir un bloque de código un número específico de veces. Se suele usar cuando conocemos de antemano cuántas veces queremos ejecutar el código.

Sintaxis:

```

for (inicio; condición; incremento) {
  // Código a ejecutar
}

```

- inicio: Se ejecuta una sola vez al principio. Generalmente se usa para inicializar una variable.

- condición: Es evaluada antes de cada iteración. Si es true, se ejecuta el bloque de código.

- incremento: Se ejecuta al final de cada iteración, y normalmente se usa para modificar la variable de control (como i++ o i--).

Ejemplo:

```

for (let i = 0; i < 5; i++) {
  console.log(i);
}

```

Este código imprimirá:

```

0
1
2
3
4

```

**While Loop**

El bucle while ejecuta un bloque de código mientras una condición sea verdadera. Es útil cuando no sabemos cuántas veces necesitamos repetir el código.

Sintaxis:

```

while (condición) {
  // Código a ejecutar
}

```

- La condición se evalúa antes de cada iteración. Si es true, se ejecuta el bloque de código.

Ejemplo:

```

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

```

Este código también imprimirá:

```

0
1
2
3
4

```

**Do...while Loop**

El bucle do...while es similar al while, pero la diferencia principal es que el código dentro del bucle siempre se ejecuta al menos una vez, incluso si la condición es falsa desde el inicio. Es útil cuando necesitamos que el bloque de código se ejecute al menos una vez.

Sintaxis:

```

do {
  // Código a ejecutar
} while (condición);

```

Ejemplo:

```

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

```

Este código imprimirá:

```

0
1
2
3
4

```

**Break y Continue**

- break: Se usa para salir de un bucle, independientemente de que la condición sea verdadera o no.

Ejemplo con break:

```

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

```

Este código imprimirá:

```

0
1
2

```

- continue: Se usa para saltar a la siguiente iteración de un bucle sin ejecutar el resto del código dentro del bucle.

Ejemplo con continue:

```

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

```

Este código imprimirá:

```

0
1
2
4

```

**For...in Loop (para objetos)**

El bucle for...in se utiliza para recorrer las propiedades de un objeto.

Sintaxis:

```

for (let clave in objeto) {
  // Código a ejecutar
}

```

Ejemplo:

```

let persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };

for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}

```

Este código imprimirá:

```

nombre: Juan
edad: 30
ciudad: Madrid

```

**For...of Loop (para arrays)**

El bucle for...of se utiliza para recorrer los elementos de un array.

Sintaxis:

```

for (let valor of array) {
  // Código a ejecutar
}

```

Ejemplo:

```

let frutas = ["manzana", "banana", "naranja"];

for (let fruta of frutas) {
  console.log(fruta);
}

```

Este código imprimirá:

```
manzana
banana
naranja

```

**Resumen**

- El for loop es ideal cuando sabemos cuántas veces vamos a iterar.

- El while loop es útil cuando no sabemos cuántas veces necesitamos repetir el código, pero sabemos la condición bajo la cual detenernos.

- El do...while loop garantiza que el código se ejecute al menos una vez.

- Los operadores break y continue permiten controlar el flujo del bucle.

- Los bucles for...in y for...of son útiles para trabajar con objetos y arrays respectivamente.