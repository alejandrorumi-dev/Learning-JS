/*
Ejercicio 1: Función clásica con parámetros

Enunciado: 

Crea una función que reciba dos números y devuelva 
la división entre ellos. Asegúrate de que el divisor no sea cero.
*/

function division(a, b){
	if (b <= 0){
		return "Introduce un número mayor de 0";
	}
	return a / b;
}

resultado = division(5, 3);
console.log(resultado.toFixed(2));

/*
Corrección de ChatGPT:

¡Muy bien! 👏 Ya tienes resuelto correctamente el primer ejercicio 
(función clásica con parámetros). Solo te hago dos comentarios para dejarlo redondo:

✅ Cosas positivas:
Usas if para validar que el divisor no sea cero (¡genial!).

Devuelves el resultado con return.

El uso de .toFixed(2) para mostrar solo dos decimales es un buen detalle 
para mejorar la presentación del resultado.

🛠️ Sugerencia mínima:
En lugar de b <= 0, mejor valida solo si b === 0, porque dividir por 
un número negativo es posible, lo que no se puede es dividir por cero:

function division(a, b) {
	if (b === 0) { => **AQUÍ ESTÁ LA DIFERENCIA**
		return "Introduce un número distinto de cero";
	}
	return a / b;
}

📊 Nota final: 8/10
*/