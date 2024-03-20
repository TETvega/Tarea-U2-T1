
// Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
// tabla del número hasta 12.


const numero = parseInt(prompt('Ingrese un numero'))
let i=0
const tablaResultado = []
if (isNaN(numero)) {
    console.log('Entrada no Valida');
}else{ 
    while ( i <= 12) {
        tablaResultado.push( numero*i )
        i++
    }
    console.table(tablaResultado);
}

console.log(`se ingreso: ${numero}`);