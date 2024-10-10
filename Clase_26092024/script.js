//Esta funcion sirve para concatenar los números que se vayan tecleando
function appendToDisplay(value){
    document.getElementById('display').value += value;
}
//Esta funcion sirve para quitar todo los numeros del display
function clearDisplay(){
    document.getElementById('display').value = '';
}
//Esta funcion sirve para eliminar el ultimo valor que se ingreso
function deleteLast(){
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0,-1);
}
//Esta funcion sirve para calcular las operaciones que se vayan agregando
function calculateResult(){
    try{
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    }  catch(error){
        alert('Expresion invalida');
    }
}