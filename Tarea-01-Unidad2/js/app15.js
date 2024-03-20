// Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

let numero = parseInt(prompt('Ingrese un numero'))
let i=numero;
if (numero >= 1) {
    while ( numero >= 1) {
        console.log(numero);
        numero--
    }
}else{
    console.log('Entrada no Valida');
}

console.log(`se ingreso: ${i}`);