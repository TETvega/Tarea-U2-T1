// Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
// ingresa un usuario.

function encuentraPares( numMayor, numMenor) {

    // dice entre ellos sin contar los extremos 
    numMenor++
    numMayor--

    // while
    while (numMenor<= numMayor) {
        if (numMenor%2 ==0 ) {
            console.log(numMenor);
        }
        numMenor++
    }
}

const numero = parseInt(prompt('Ingrese un numero M'))
const numero2 = parseInt(prompt('Ingrese un numero N'))

if (isNaN(numero) || isNaN(numero2)) {
    console.log('Entrada no Valida');
}else{ 
    switch (true) {
        case numero > numero2:
            encuentraPares(numero, numero2)
            break;
        case numero < numero2:
            encuentraPares(numero2, numero)
        break;
        case numero== numero2:
            console.log('No hay NUMEROS entre los rangos dados');
        break;
        default:
            console.log('Entrada no Valida');
            break;
    }

}

console.log(`se ingreso el rango : ${numero} - ${numero2}`);