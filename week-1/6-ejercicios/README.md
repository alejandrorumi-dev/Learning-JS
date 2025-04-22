
## 📝 Plantilla básica para ejercicios con bucles

```javascript
// 1. Preguntar cuántos elementos se van a procesar
let cantidad = parseInt(prompt("¿Cuántos [elementos] vas a ingresar?"));

// 2. Variables globales para llevar control
let total = 0;
let acumuladoresExtra = 0; // (por ejemplo: kilos, unidades, entradas gratuitas...)

// 3. Bucle for para repetir el proceso por cada elemento
for (let i = 1; i <= cantidad; i++) {
    // 3.1 Pedir información de cada elemento
    let nombre = prompt("¿Nombre del [elemento]?");
    let precio = parseFloat(prompt("¿Precio por unidad/kilo/etc?"));
    let cantidadElemento = parseFloat(prompt("¿Cantidad de unidades/kilos/etc?"));

    // 3.2 Calcular subtotal
    let subtotal = precio * cantidadElemento;

    // 3.3 Aplicar descuentos si corresponde
    if (/* condición de descuento */) {
        subtotal -= subtotal * 0.10; // o el % que sea
        console.log("Se aplicó un descuento");
    }

    // 3.4 Acumular en el total
    total += subtotal;

    // 3.5 Acumular en otras variables si se necesita
    acumuladoresExtra += cantidadElemento;
}

// 4. Mostrar resultados finales
console.log("Total a pagar:", total.toFixed(2));
console.log("Cantidad total de [extra]:", acumuladoresExtra);
```