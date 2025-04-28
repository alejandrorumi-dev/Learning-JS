/*
map() + join()

➡️ Tienes ['rojo', 'verde', 'azul']. Usa map 
para pasarlos a mayúsculas y luego join para 
unirlos con guiones ("-").
*/

let colores = ['rojo', 'verde', 'azul']

let mayuscula = colores.map(color => color.toUpperCase()).join("-");

console.log(mayuscula);