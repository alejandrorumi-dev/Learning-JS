# 📘 Lección completa: Objetos en JavaScript

---

## 1️⃣ ¿Qué es un objeto?

Un **objeto** es una estructura de datos que agrupa información en forma de **pares clave: valor**.

```js
let persona = {
  nombre: "Lucía",
  edad: 28,
  ciudad: "Madrid"
};
```

---

## 2️⃣ Acceso a propiedades

```js
console.log(persona.nombre);     // Notación punto → "Lucía"
console.log(persona["edad"]);    // Notación corchetes → 28
```

✉️ Notación corchetes se usa especialmente cuando:
- La clave tiene espacios o caracteres especiales
- La propiedad está en una variable

```js
let clave = "ciudad";
console.log(persona[clave]);  // "Madrid"
```

---

## 3️⃣ Modificar, agregar o eliminar propiedades

```js
persona.edad = 30;                    // modificar
persona.profesion = "diseñadora";    // agregar
delete persona.ciudad;               // eliminar
```

---

## 4️⃣ Crear objeto vacío e ir llenándolo

```js
let libro = {};
libro.titulo = "JS para todos";
libro.paginas = 320;
```

---

## 5️⃣ Métodos en objetos (funciones dentro de un objeto)

```js
let usuario = {
  nombre: "Carlos",
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

usuario.saludar(); // Hola, soy Carlos
```

✉️ `this` se refiere al **objeto actual**, en este caso `usuario`.

---

## 6️⃣ Objetos anidados (propiedades dentro de propiedades)

```js
let coche = {
  marca: "Toyota",
  motor: {
    tipo: "híbrido",
    potencia: "120cv"
  }
};

console.log(coche.motor.tipo); // "híbrido"
```

---

## 7️⃣ Recorrer propiedades de un objeto

```js
let persona = {
  nombre: "María",
  edad: 32,
  ciudad: "Sevilla"
};

for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}
```

ℹ️ También puedes usar:
```js
Object.keys(persona);   // ["nombre", "edad", "ciudad"]
Object.values(persona); // ["María", 32, "Sevilla"]
Object.entries(persona); // [["nombre", "María"], ["edad", 32], ["ciudad", "Sevilla"]]
```

---

## 8️⃣ Comparar objetos (importante)

```js
let a = { nombre: "Ana" };
let b = { nombre: "Ana" };

console.log(a === b); // false ❌ (aunque tengan los mismos datos)

let c = a;
console.log(a === c); // true ✅ (porque apuntan al mismo objeto)
```

---

## 9️⃣ Métodos últiles avanzados (con arrays de objetos)

```js
let productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 }
];

// Filtrar productos mayores a 25€
let caros = productos.filter(p => p.precio > 25);

// Obtener solo los nombres
let nombres = productos.map(p => p.nombre);

// Calcular total
let total = productos.reduce((acc, p) => acc + p.precio, 0);
```

---

## ✅ Resumen esencial

| Tema                         | Ejemplo                             |
|------------------------------|-------------------------------------|
| Crear objeto                | `let obj = { clave: valor }`       |
| Acceder/modificar           | `obj.clave = nuevoValor`           |
| Notación corchetes          | `obj["clave"]`                      |
| Agregar propiedad           | `obj.nuevaClave = valor`           |
| Eliminar propiedad          | `delete obj.clave`                 |
| Método con `this`           | `obj.metodo = function() {}`       |
| Recorrer propiedades        | `for...in`, `Object.keys()`, etc.  |
| Objetos anidados            | `obj.otraClave.claveInterna`       |
| Comparación de referencias  | `a === b`                          |

---

✨ Una vez domines esto, estarás preparado para:
- Arrays de objetos con lógica avanzada
- DOM real (porque cada nodo es un objeto)
- Trabajar con JSON y APIs
- Aplicaciones reales con datos estructurados

---

