📘 Lección 5: Funciones en JavaScript

Las funciones en JavaScript son bloques de código diseñados para realizar una tarea específica. Puedes invocar (o "llamar") una función en cualquier momento dentro de tu código para que ejecute su tarea sin tener que reescribir el mismo código una y otra vez.

**Definición de una Función**

Las funciones se definen usando la palabra clave *function*, seguida del nombre de la función, los parámetros entre paréntesis y, finalmente, el bloque de código dentro de llaves *{}*.

**Sintaxis básica:**

```

function nombreDeLaFuncion(parametro1, parametro2) {
  // Código que realiza la función
  return resultado; // Optional: devuelve un valor
}

```

- nombreDeLaFuncion: Es el nombre que le das a tu función.

- parametro1, parametro2: Son los valores que puedes pasar a la función cuando la llamas. Estos se llaman parámetros. Pueden ser de cualquier tipo (números, cadenas, objetos, etc.).

- return: Se utiliza para devolver un valor. Si no pones return, la función ejecutará su código, pero no devolverá nada.

**Ejemplo de Función Básica**

```

function saludar(nombre) {
  return "¡Hola, " + nombre + "!";
}

let saludo = saludar("Juan");
console.log(saludo);  // ¡Hola, Juan!

```

**Parámetros y Argumentos**

- Parámetros son las variables que defines dentro de la función, entre los paréntesis.

- Argumentos son los valores que pasas a la función cuando la llamas.

*Ejemplo:*

```

function suma(a, b) {
  return a + b;
}

let resultado = suma(5, 3);  // Argumentos: 5 y 3
console.log(resultado);  // 8

```

**Funciones con múltiples líneas**

Las funciones pueden contener múltiples líneas de código dentro del bloque *{}*. Por ejemplo:

```

function operaciones(a, b) {
  let suma = a + b;
  let resta = a - b;
  return { suma: suma, resta: resta };
}

let resultados = operaciones(10, 5);
console.log(resultados.suma);  // 15
console.log(resultados.resta); // 5

```

**Funciones sin parámetros**

Las funciones no siempre tienen que recibir parámetros. Pueden realizar tareas que no dependan de ningún valor específico.

```

function mostrarMensaje() {
  console.log("¡Hola, mundo!");
}

mostrarMensaje(); // ¡Hola, mundo!

```

**Funciones anónimas**

Las funciones anónimas son aquellas que no tienen nombre. Se suelen usar cuando se asignan a variables o se pasan como parámetros a otras funciones.

```

let saludo = function() {
  console.log("¡Hola desde una función anónima!");
};

saludo();  // ¡Hola desde una función anónima!

```

**Funciones flecha (Arrow Functions)**

Las funciones flecha son una forma más concisa de escribir funciones en JavaScript.

```

const sumar = (a, b) => a + b;

console.log(sumar(5, 3));  // 8

```

**Funciones Recursivas**

Una función recursiva es una función que se llama a sí misma. Esto puede ser útil para tareas como recorrer árboles, resolver problemas matemáticos o realizar cálculos repetitivos.

Ejemplo de una función recursiva para calcular el factorial de un número:

```

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;  // Caso base
  } else {
    return n * factorial(n - 1);  // Llamada recursiva
  }
}

console.log(factorial(5));  // 120

```

**Parámetros con valor por defecto**

Puedes asignar un valor predeterminado a un parámetro en caso de que no se pase un valor al llamar a la función.

```

function saludar(nombre = "Amigo") {
  console.log("Hola, " + nombre);
}

saludar();       // Hola, Amigo
saludar("Juan"); // Hola, Juan

```

**Resumen**

- Las funciones en JavaScript se utilizan para organizar y reutilizar el código.

- Puedes pasarles parámetros y devolver valores con return.

- Existen funciones anónimas y flechas, que simplifican la sintaxis.

- Las funciones recursivas son aquellas que se llaman a sí mismas, y se utilizan en problemas que requieren repetición.

- Puedes usar valores por defecto para los parámetros.