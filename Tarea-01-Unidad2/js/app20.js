

// 20. La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla:
// function multiply(a, b){
// a * b
// }
function multiply(a, b){
    return a * b
}

const numero1 = parseFloat(prompt('Ingrese un numero'))
const numero2 = parseFloat(prompt('Ingrese un  segundo numero'))

if (isNaN(numero1) || isNaN(numero2)) {
    console.log(`Error al ingresar datos`);
}else{
    console.log(`El resultado de la Multiplicacion es: ${multiply(numero1,numero2)}`);
}

