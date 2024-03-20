// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
// determine si el triángulo es válido o no.

const angulo1 = parseFloat(prompt('Ingrese el Primer Angulo'))
const angulo2 = parseFloat(prompt('Ingrese el segundo Angulo'))
const angulo3 = parseFloat(prompt('Ingrese el tercer Angulo'))

// console.log(angulo1 , angulo2 , angulo3);
// (angulo1 === 'NaN') || (angulo2 === 'NaN')|| (angulo3 === 'NaN') 
if ( isNaN(angulo1) || isNaN(angulo2) || isNaN(angulo3)) {
    console.log(`Error en angun angulo`);
}else{
    console.log(`Suma de Angulos: ${(angulo1+angulo2+angulo3)}`);
    switch (true) {
        
        case (angulo1+angulo2+angulo3) == 180:
            console.log(`El triangulo es valido`);
            
            break;
        case (angulo1+angulo2+angulo3) > 180:
            console.log(`Tiene mas de 180 grados no es un triangulo`);
            break;
        case (angulo1+angulo2+angulo3) < 180:
            console.log(`Tiene menos de 180 grados no es un triangulo`);
            break;
    
        default:
            console.log(`Ocurrio algun tipo de error`);
            break;
    }
}