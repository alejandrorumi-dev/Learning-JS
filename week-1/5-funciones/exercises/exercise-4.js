/*
Ejercicio 4: 

Enunciado:

Declara una función anónima que calcule el cubo de un número (n^3) 
y asígnala a una variable. Luego, llama a esa variable con un número.
*/

(function(){
	return n ^ 3;
});

/*
Corrección de ChatGPT:

Comentarios:

- En tu código original, usaste el operador ^, que en JavaScript 
no es para exponentes. El operador * es el que necesitamos 
para multiplicar el número por sí mismo tres veces, o también 
se puede usar Math.pow(n, 3) para obtener el cubo de n.

- He añadido la llamada a la función con un número de ejemplo 
(en este caso 3) para demostrar cómo funciona.

🛠️ Sugerencia:

// Función anónima para calcular el cubo de un número
let calcularCubo = function(n) {
  return n * n * n; // O también se podría usar Math.pow(n, 3);
};

// Llamada a la función con un número
console.log(calcularCubo(3)); // Salida: 27

📊 Nota final: 3/10
*/
