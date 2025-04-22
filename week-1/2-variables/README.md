📘 Lección 2: Variables y Tipos de Datos en JavaScript

En JavaScript, las variables se utilizan para almacenar información que se puede usar más adelante en el código. Para crear variables, usamos declaraciones y asignaciones.

🧑‍💻 1. Declarar variables

Hay tres formas de declarar variables en JavaScript:

- var (Antigua forma, no se recomienda usar en proyectos modernos)

- let (Recomendada para variables que cambian de valor)

- const (Para variables cuyo valor no cambiará)

Ejemplo:

```

let nombre = "Alejandro";  // Se puede cambiar más adelante
const edad = 25;           // No se puede cambiar después de asignarla
var ciudad = "Almería";    // No recomendado para proyectos modernos

```

📊 2. Tipos de Datos en JavaScript

JavaScript tiene varios tipos de datos. Los más comunes son:

1. Cadenas de texto (String):

- Se usan para representar texto.

- Se delimitan con comillas dobles o simples.

```

let saludo = "Hola, ¿cómo estás?";

```

2. Números (Number):

- Se usan para representar valores numéricos (enteros o decimales).

```

let edad = 25;
let temperatura = 36.6;

```

3. Booleanos (Boolean):

- Representan valores lógicos: true (verdadero) o false (falso).

```

let esEstudiante = true;
let esMayorDeEdad = false;

```

4. Objetos (Object):

- Se usan para almacenar colecciones de datos.

- Se definen usando llaves {}.

```

let persona = {
  nombre: "Alejandro",
  edad: 25,
  ciudad: "Almería"
};

```

5. Arreglos (Array):

- Se usan para almacenar múltiples valores.

- Se definen usando corchetes [].

```

let colores = ["rojo", "verde", "azul"];

```

6. null y undefined:

- null se usa para representar la ausencia intencionada de un valor.

- undefined indica que una variable ha sido declarada pero no asignada aún.

```

let vacio = null;
let noAsignado;

```