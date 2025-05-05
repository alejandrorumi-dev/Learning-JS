/* =======================
	📗 FÁCIL
======================= */

// 1. Crea una función que reciba un número y diga si es positivo o negativo.

function number(n) {
	if (n >= 0){
		return `El número ${n} es positivo `
	}else{
		return `El número ${n} es negativo`
	}
}

let esPar = number(2)
console.log(esPar)

// 2. Recorre con un bucle for el array [10, 20, 30, 40, 50] y 
// muestra cada número con el texto "Número: x"

let arrayNum = [10, 20, 30, 40, 50]

for (let i = 0; i < arrayNum.length; i++){
	console.log(`Número: ${arrayNum[i]}`);
}

// 3. Crea una función flecha que reciba un nombre y diga "Bienvenido, [nombre]".

let nombre = (name) => {
	return `"Bienvenido, ${name}"`
}

console.log(nombre("Alex"));

/* =======================
	📘 INTERMEDIO
======================= */

// 4. Crea una función que reciba un número y devuelva true si es 
// par y mayor a 10. Usa condicionales.

function numberBoolean(numero){
	return numero % 2 === 0 && numero > 10;
}

console.log(numberBoolean(18)); // true
console.log(numberBoolean(9));  // false

// 5. Usa filter() para obtener del array [5, 12, 8, 130, 44] solo 
// los números mayores a 10.

let arrayNumber = [5, 12, 8, 130, 44]

let numMayores = arrayNumber.filter(num => num > 10)

console.log(numMayores);

// 6. Dado un array de frutas ["manzana", "pera", "kiwi"], usa map() 
// para devolver un nuevo array con las frutas en mayúsculas.

let frutas = ["manzana", "pera", "kiwi"]

let frutasMayuscula = frutas.map(fruta => fruta.toUpperCase())

console.log(frutasMayuscula);

/* =======================
	📙 DIFÍCIL
======================= */

// 7. Crea una función con un parámetro opcional:
//    Si se pasa un número, devuelve su triple.
//    Si no se pasa nada, devuelve "Ningún número recibido".

function numberOptional (x) {
	if (x === undefined){
		console.log("Ningún número recibido")
	}else{
		let calculo = x * 3;
		console.log("El triple de", x, "es:", calculo);
	}
}

numberOptional();
numberOptional(4);

// 8. Dado este array: [100, 200, 300], usa reduce() para obtener la suma total.

let arrayNumbers = [100, 200, 300]

let sumaTotal = arrayNumbers.reduce((acc, num) => acc + num, 0)

console.log(sumaTotal);

// 9. Crea una función recursiva que reste 1 en cada llamada hasta 
// llegar a 0. Al final, debe mostrar "Terminado".

function recursiva(n) {
	if (n === 0) {
		console.log("Terminado.");
		return;
	}
	console.log(n);
	recursiva(n - 1);
}

recursiva(5);
