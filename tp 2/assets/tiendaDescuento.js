let cantidadArticulos = parseInt(prompt("Ingrese la cantidad de artículos:"));
let precioTotal = parseFloat(prompt("Ingrese el precio total de los artículos:"));

let descuentoAplicado = false;
let mensaje = "";

switch (true) {
    case cantidadArticulos >= 10 && precioTotal > 20000:
        let descuento = precioTotal * 0.15;
        let precioConDescuento = precioTotal - descuento;
        mensaje = "Se aplicó un descuento del 15%. El total a pagar es de ${precioConDescuento.toFixed(2)} pesos.";
        descuentoAplicado = true;
        break;
    case cantidadArticulos >= 10:
        mensaje = "No se superó el monto de compra para aplicar el descuento.";
        break;
    case precioTotal > 20000:
        mensaje = "No se superó la cantidad de artículos para aplicar el descuento.";
        break;
    default:
        mensaje = "No se superó ni la cantidad de artículos ni el monto de compra para aplicar el descuento.";
}

console.log(mensaje);
if (descuentoAplicado) {
    console.log("Se aplicó un descuento del 15%.")}