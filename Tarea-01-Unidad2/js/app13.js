// Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

const numero = parseInt(prompt('Ingrese un numero'))
let i=1;
if (numero >= 1) {
    while ( i <= numero) {
        console.log(i);
        i++
    }
}else{
    console.log('Entrada no Valida');
}