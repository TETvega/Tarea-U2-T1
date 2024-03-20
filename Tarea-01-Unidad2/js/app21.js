// 21. Crear una función que reciba un número entero y muestre un error si el tipo de dato
// pasado es de otro tipo.


const numero = prompt("Ingrese un numero entero")

esNumEntero(numero)

function esNumEntero(numero) {
    
    // conversion a tipo numero
    const convertidoANumber = Number(numero)
    // si no es numero deuelve nan
    // si es entero, si no tiene . o , pasa
    if (Number.isInteger(convertidoANumber)) {
        return console.log(`Numero ingresado ${numero}`);
        
    }else{
        console.log(convertidoANumber);
        return console.log('No ha ingresado el tipo de dato correcto ');
    }
    
}


