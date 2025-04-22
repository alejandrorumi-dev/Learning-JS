// Operadores aritméticos

let a = 10;
let b = 3;

console.log("Suma:", a + b); // a mas b
console.log("Resta:", a - b); // a menos b
console.log("Multiplicación:", a * b); // a multiplicado por b
console.log("División:", a / b); // a dividido por b
console.log("Módulo (resto):", a % b); // 
console.log("Exponente:", a ** b); // a elevado a la b

// Operadores de asignación

let x = 5;
x += 3; // x = x + 3 => x = 5 + 3 => x = 8
console.log("Suma asignada:", x);
x -= 2; // x = x - 2 => x = 8 - 2 => x = 6
console.log("Resta asignada:", x);
x *= 4; // x = x * 4 => x = 6 * 4 => x = 24
console.log("Multiplicación asignada:", x);
x /= 2; // x = x / 2 => x = 24 / 2 => x = 12
console.log("División asignada:", x);
x %= 3; // x = x % 3 => x = 12 % 3 => x = 0
console.log("Resto asignado:", x);
x **= 2; // x = x ** 2 => x = 0 ** 2 => x = 0 // 0 elevado a 2
console.log("Exponente asignado:", x);

// Operadores de comparación

let edad = 20;

console.log("Es mayor de edad?", edad >= 18); // true
console.log("Igualdad simple", edad == 20); // true
console.log("Igualdad estricta", edad === 20); // true
console.log("Desigualdad simple", edad != 20); // false
console.log("Desigualdad estricta", edad !== 20); // false

// Operadores lógicos

let tieneCarnet = true;
let tieneEdad = true;

console.log("¿Puede conducir?", tieneCarnet && tieneEdad); // true
console.log("Puede conducir?", tieneCarnet || tieneEdad); // true
console.log("Puede conducir?", !tieneCarnet); // false
