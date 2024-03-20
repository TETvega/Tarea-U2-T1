
// Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres.

const numero1 = parseFloat(prompt("Ingrese un Numero X"))
const numero2 = parseFloat(prompt("Ingrese un Numero Y"))
const numero3 = parseFloat(prompt("Ingrese un Numero Z"))


switch (true) {
    case numero1>numero2 && numero1 > numero3:
        console.log(` ${numero1} es mayor que ${numero2} y ${numero3}`);
        break;
    case numero2>numero1 && numero2 > numero3:
        console.log(` ${numero2} es mayor que ${numero3} y ${numero1}`);
        break;
    case numero3>numero2 && numero3 > numero1:
        console.log(` ${numero3} es mayor que ${numero2} y ${numero1}`);
        break;
    case numero1===numero2 && numero1 === numero3:
        console.log(` ${numero1} , ${numero2} y ${numero3} son iguales los 3`);
        break;
    default:
        break;
}
