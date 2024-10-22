//Funcion normal
function hola(a,b){
    return a+b;
}
console.log(hola(3,5));

//Funcion flecha
const suma = (a,b) => {
    return a+b;
}
console.log(suma(3,5));

//Simplificar funcion flecha
const suma2 = (a,b) => a+b;
console.log(suma2(5,5));

//Con un solo parametro
const cuadrado = (x) => x*x;
console.log(cuadrado(5));
