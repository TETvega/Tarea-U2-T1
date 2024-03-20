// 27. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares, pista: utilizar reduce().

const numeros = [ 1, 2,3,4,5,6,7,8,9,10,12,13,14,15,16,17]

const numerosParesArray = devuelveArrayNumerosPares(numeros)
function devuelveArrayNumerosPares(arrayNumeros) {
    // let numerosPares=[]
   const numerosPares = numeros.reduce((arrayPares , numero) => {


        if (numero % 2 ===0) {
            arrayPares.push(numero)
        }
        return arrayPares
    }, [ ] )

//     reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, 
// array: number[]) => U, '''''''''initialValue: U): U''''''

// If initialValue is specified, 
// it is used as the initial value to start the accumulation.
//  The first call to the callbackfn function provides this 
// value as an argument instead of an array value.


// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    
    console.log(numerosPares);
    return numerosPares
}