// 18. Todos los ejercicios de while anteriores los debe replicar con el ciclo for.
// 13. Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

function numAumentoOneForOne() {
    const numero = parseInt(prompt('Ingrese un numero'))
    if (numero >= 1) {
        for (let i = 1; i <= numero; i++) {
            console.log(i);
            
        }
    }else{
        console.log('Entrada no Valida\nSaliendo del Programa');
    }
}
// 14. Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
// ingresa el usuario en un prompt.
function numAumentoOneForTwo() {
    const numero = parseInt(prompt('Ingrese un numero'))
    let i=1;
    if (numero >= 1) {
        for (let i = 1; i <= numero; i+=2) {
            console.log(i);
        }

    }else{
        console.log('Entrada no Valida\nSaliendo del Programa');
    }

    console.log(`se ingreso: ${numero}`);
}
// 15. Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
// ingresa el usuario en un prompt.
function numReduccionOneForOne() {
    let numero = parseInt(prompt('Ingrese un numero'))
    if (numero >= 1) {
        for (let i = numero; i >= 1; i--) {
            console.log(i);
            
        }

    }else{
        console.log('Entrada no Valida\nSaliendo del Programa');
    }

    console.log(`se ingreso: ${numero}`);
}
// 16. Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
// tabla del número hasta 12.
function numTablaMultiplicarTo12() {
    const numero = parseInt(prompt('Ingrese un numero'))
    const tablaResultado = []
    if (isNaN(numero)) {
        console.log('Entrada no Valida\nSaliendo del Programa');
    }else{ 
        for (let i = 1; i <= 12; i++) {
            tablaResultado.push( numero*i )
            
        }
        console.table(tablaResultado);
    }

    console.log(`se ingreso: ${numero}`);
}

// 17. Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
// ingresa un usuario.
function encuentraPares( numMayor, numMenor) {
    console.log('en el encuentra pares');
    // dice entre ellos sin contar los extremos 
    numMenor++
    numMayor--
    // while
    for (let i =numMenor; i <= numMayor; i++) {
        if (i%2 == 0 ) {
            console.log(i);
        }
        
    }
}
function numEntreNyM() {
    
    const numero = parseInt(prompt('Ingrese un numero M'))
    const numero2 = parseInt(prompt('Ingrese un numero N'))
    
    if (isNaN(numero) || isNaN(numero2)) {
        console.log('Entrada no Valida\nSaliendo del Programa');
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
    
    console.log(`se ingreso el rango : ${numero} a ${numero2}`);
}

let op =0
while (op!=6) {
    
    op = parseInt(prompt("Ingrese un numero segun la Opcion:\n" +
        '1- Aumento de numeros 1 en 1\n2- Aumento de numeros 2 en 2\n'+
        '3- Reduccion de numeros 1 en 1\n4- Tabla de Multiplicar hasta 12\n'+
        '5- Numeros entre N y M\n6- SALIR'
        ))

    switch (op) {
        // 13. Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
        case 1:
            console.log('1- Aumento de numeros 1 en 1');
            numAumentoOneForOne()
            break;
        case 2:
            console.log('2- Aumento de numeros 2 en 2');
            numAumentoOneForTwo()
            break;
        case 3:
            console.log('3- Reduccion de numeros 1 en 1');
            numReduccionOneForOne()
            break;
        case 4:
            console.log('4- Tabla de Multiplicar hasta 12');
            numTablaMultiplicarTo12()
            break;
        case 5:
            console.log('5- Numeros entre N y M');
            numEntreNyM()
            break;   
        case 6:
            console.log('Saliendo del Programa');
            break;  
        default:
            console.log('Opcion Invalida');
            break;
    }

}