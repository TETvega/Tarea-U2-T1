// 19. Usando for, crear un programa que determine si un número es perfecto o no, (se dice
//     que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3).

let numero = parseInt(prompt('Ingrese un numero entero'))

const divisores= []
if (isNaN(numero)) {
    console.log('Entrada Invalida');
}else{
    for (let i = 0; i < numero; i++) {
        
        if (numero % i ==0) {
            divisores.push(i)
        }
        
    }
    console.log(divisores);

    const sumaDivisores= divisores.reduce((acumulado , divisor) => acumulado+=divisor)
    console.log(`Numero : ${numero}\nSuma de sus Divisores : ${sumaDivisores}`);
    if ( numero == sumaDivisores) {
        console.log('Es un Numero perfecto');
        
    }else{
        console.log('NO es un Numero perfecto\nIngresa otro numero');
    }
}