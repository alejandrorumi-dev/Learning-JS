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