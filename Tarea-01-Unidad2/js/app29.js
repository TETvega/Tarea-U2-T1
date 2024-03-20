
// Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
// vacío debe devolver cero.

const arreglo = [ -1,3 , 88 , 896 ,25]


function promedioArreglo(arreglo) {
    
    if (arreglo.length === 0 ) {
        return 0;
    }

    const suma = arreglo.reduce( (sumatoria , numero) => {

       return sumatoria+ numero;
    } , 0 )
    
    return (suma/Number(arreglo.length)).toFixed(2)
}
console.log('El promedio del arreglo es de');
console.log(promedioArreglo(arreglo));