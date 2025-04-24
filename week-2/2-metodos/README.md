**MÉTODOS**

Aquí tienes una lista de los métodos más importantes que puedes utilizar con arrays en JavaScript, algunos de los cuales ya hemos visto. Los agruparé por su función y te daré ejemplos para que puedas seguir practicando:

**Métodos de transformación o transformación de valores**

***map()*** Transforma todos los elementos de un array según una función proporcionada.

```

let numeros = [1, 2, 3, 4, 5];
let cuadrados = numeros.map(num => num * num);
console.log(cuadrados); // [1, 4, 9, 16, 25]

```

***

***filter()*** Filtra los elementos del array según una condición. Devuelve un nuevo array con los elementos que cumplan esa condición.

```

let numeros = [1, 2, 3, 4, 5];
let mayoresQueTres = numeros.filter(num => num > 3);
console.log(mayoresQueTres); // [4, 5]

```

***

***reduce()*** Reduce todos los elementos del array a un único valor, como la suma o la concatenación de los elementos.

```

let numeros = [1, 2, 3, 4, 5];
let suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 15

```

***

***forEach()*** Ejecuta una función sobre cada elemento del array. No devuelve nada.

```

let nombres = ["Alex", "Juan", "Jose"];
nombres.forEach(nombre => console.log("Hola, " + nombre));

```

***

***map() + join()*** Usado en conjunto para transformar y luego unir los resultados en una cadena.

```

let palabras = ["hola", "mundo"];
let saludo = palabras.map(palabra => palabra.toUpperCase()).join(" ");
console.log(saludo); // "HOLA MUNDO"

```
***

**Métodos de búsqueda**

***find()*** Encuentra el primer elemento que cumpla con la condición proporcionada.

```

let numeros = [1, 2, 3, 4, 5];
let mayorQueTres = numeros.find(num => num > 3);
console.log(mayorQueTres); // 4

```

***

***indexOf()*** Devuelve el índice de la primera aparición de un elemento en el array. Si no lo encuentra, devuelve -1.

```

let nombres = ["Alex", "Juan", "Jose"];
console.log(nombres.indexOf("Juan")); // 1
console.log(nombres.indexOf("Carlos")); // -1

```

***

***includes()*** Devuelve true si el array contiene el valor buscado, o false si no.

```

let nombres = ["Alex", "Juan", "Jose"];
console.log(nombres.includes("Juan")); // true
console.log(nombres.includes("Carlos")); // false

```

***

**Métodos de mutación o modificación**

***push()*** Agrega uno o más elementos al final del array.

```

let frutas = ["manzana", "banana"];
frutas.push("cereza");
console.log(frutas); // ["manzana", "banana", "cereza"]

```

***

***unshift()*** Agrega uno o más elementos al inicio del array.

```

let frutas = ["manzana", "banana"];
frutas.unshift("fresa");
console.log(frutas); // ["fresa", "manzana", "banana"]

```

***

***pop()*** Elimina el último elemento del array.

```

let frutas = ["manzana", "banana"];
frutas.pop();
console.log(frutas); // ["manzana"]

```

***

***shift()*** Elimina el primer elemento del array.

```

let frutas = ["manzana", "banana"];
frutas.shift();
console.log(frutas); // ["banana"]

```

***

***splice()*** Permite eliminar o reemplazar elementos de un array en una posición específica. También puede agregar nuevos elementos.

```

let frutas = ["manzana", "banana", "cereza"];
frutas.splice(1, 1, "fresa", "pera"); 
console.log(frutas); // ["manzana", "fresa", "pera", "cereza"]

```

***

**Métodos de ordenación y reversión**

***sort()*** Ordena los elementos de un array. Por defecto, lo ordena como cadenas de texto (alfabéticamente).

```

let numeros = [3, 1, 4, 5, 2];
numeros.sort();
console.log(numeros); // [1, 2, 3, 4, 5]

```

***

***reverse()*** Invierte el orden de los elementos del array.

```

let numeros = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros); // [5, 4, 3, 2, 1]

```

***

**Métodos de combinación y transformación de arrays**

***concat()*** Combina dos o más arrays en uno nuevo.

```

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]

```

***

***join()*** Convierte todos los elementos de un array en una cadena, separando los elementos con un delimitador (por defecto es una coma).

```

let frutas = ["manzana", "banana", "cereza"];
let cadena = frutas.join(", ");
console.log(cadena); // "manzana, banana, cereza"

```

***

**Métodos de creación de nuevos arrays**

***slice()*** Crea una copia superficial de una porción de un array, sin modificar el array original.

```

let frutas = ["manzana", "banana", "cereza"];
let frutasCortadas = frutas.slice(1, 2);
console.log(frutasCortadas); // ["banana"]

```

***

**Otros métodos útiles**

***every()*** Verifica si todos los elementos de un array cumplen con una condición.

```

let numeros = [2, 4, 6, 8];
let sonPares = numeros.every(num => num % 2 === 0);
console.log(sonPares); // true

```

***

***some()*** Verifica si al menos un elemento del array cumple con una condición.

```

let numeros = [1, 3, 5, 6];
let hayPares = numeros.some(num => num % 2 === 0);
console.log(hayPares); // true

```

Ahora ya tienes una lista completa de los métodos más importantes para trabajar con arrays en JavaScript. Puedes practicarlos haciendo ejercicios como los que hemos trabajado hasta ahora, pero aplicando estos métodos en situaciones diversas.