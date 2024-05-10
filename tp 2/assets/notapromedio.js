let nota_a = parseInt(prompt("Ingrese nota a"));
let nota_b = parseInt(prompt("Ingrese nota b"));
let nota_c = parseInt(prompt("Ingrese nota c"));
if (nota_a, nota_b, nota_c >=11){
    console.log("nota invalida")
}
let suma = nota_a + nota_b + nota_c;
let promedio = suma / 3;
let calificacion;

if (promedio >= 1 && promedio <= 3) {
    calificacion = 'Nota Insuficiente';
} else if (promedio <= 5) {
    calificacion = 'Nota Regular';
} else if (promedio <= 7) {
    calificacion = 'Nota Buena';
} else if (promedio <= 9) {
    calificacion = 'Nota Muy Buena';
} else {
    calificacion = 'Nota Sobresaliente';
}

console.log('La calificación es:', calificacion);
console.log('El promedio es:', promedio.toFixed(2));
