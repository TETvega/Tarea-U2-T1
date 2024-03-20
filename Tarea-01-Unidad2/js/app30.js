// 30. Crear una función que tome como parámetro un arreglo de números, retornar el número
// menor, si es un número negativo mostrar su valor absoluto.


const arreglo = [ , 3 , 88 , 896 ,25]


function numeroMenorDeArreglos(arreglo) {
    
    if (arreglo.length === 0 ) {
        return 0;
    }

    const menor = arreglo.reduce( ( menor , numero) => {
    
        if (menor > numero) {
            menor = numero
        }
        return menor
       
    })
    
    if (menor < 0 ) {
        return menor*(-1)
    }
    return menor
}
console.log(arreglo);
console.log('El menor del arreglo es: \n si es menor a 0 esta en valor absoluto');
console.log(numeroMenorDeArreglos(arreglo));
