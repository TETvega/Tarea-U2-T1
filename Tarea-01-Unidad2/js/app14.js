// 14. Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
// ingresa el usuario en un prompt.

const numero = parseInt(prompt('Ingrese un numero'))
let i=1;
if (numero >= 1) {
    while ( i <= numero) {
        console.log(i);
        i+=2
    }
}else{
    console.log('Entrada no Valida');
}

console.log(`se ingreso: ${numero}`);