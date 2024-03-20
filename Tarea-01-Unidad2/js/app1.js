
// Escriba un programa que pida dos números y escriba en la consola cuál es el mayor.

const numero1 = parseFloat(prompt("Ingrese un Numero x"))


const numero2 = parseFloat(prompt("Ingrese un Numero Y"))


switch (true) {
    case numero1>numero2:
        console.log(` ${numero1} es mayor a ${numero2}`);
        break;
    case numero1 < numero2:
        console.log(` ${numero1} es menor a ${numero2}`);
        break;
    case numero1 === numero2:
        console.log(` ${numero1} es igual a ${numero2}`);
        break;
    default:
        break;
}

