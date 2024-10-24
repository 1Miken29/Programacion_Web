//arreglos

const array = ["dato1", 1, Boolean];

console.log("Tamaño del array : " + array.length);
array.push("insert nuevo val")
console.log(array[3]);
console.log("Nuevo tamaño : " + array.length);
console.log(array[3]);

//Tabla del 5 hasta la posicion 6
const tabla = []
for (let i = 0; i < 10; i++) {
    tabla.push(5 * (i + 1)) ;

    if(tabla.length === 6){
        console.log("Posicion 6 = " + tabla[i]);
        break;
    }

}
console.log(tabla);
