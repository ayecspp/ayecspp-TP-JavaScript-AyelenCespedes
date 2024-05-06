let edad = prompt("ingrese su edad");
if(edad >= 0 && edad <= 12){
    console.log("niño");
} 
else if(edad >= 13 && edad <= 19){
    console.log("adolescente");
} 
else if(edad >= 20 && edad <= 59){
    console.log("adulto");
} 
else if(edad >= 60 && edad <= 120){
    console.log("adulto Mayor");
} 
else(edad>=121); { 
    console.log("edad invalida");

}