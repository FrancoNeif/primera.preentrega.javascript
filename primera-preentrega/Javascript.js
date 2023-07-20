
let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
  alert("¡Bienvenido/a a la página!"); // Acción si es mayor de edad
} else {
  alert("Lo siento, debes ser mayor de edad para acceder."); // Acción si es menor de edad
}

let zapatillas = prompt(`Genial, Elige el producto segun el numero
1:Nike Air Force 1 
2:Nike Jordan Black 
3:Nike Retro white
`)

switch (zapatillas) {
    case "1":
        console.log(`Producto Nike Air Force 1 ${zapatillas}, valor $1000`)
        
        break;
        case "2":
        console.log(`Producto Nike Jordan Black  ${zapatillas}, valor $1500`)

       break;
       case "3":
        console.log(`Producto Nike Retro white ${zapatillas}, valor $2000`) 

    default:
        console.log("Por el momento son 3 zapatillas que tenemos en stock, ya vamos agregar mas...")
}

let cantidadsumas = Number(prompt("Ingrese la cantidad de numeros que desea sumar:"));
let suma = 0;

for (let i = 0; i < cantidadsumas; i++) {
let numero = Number(prompt("Cantidad º" + (i + 1) + ":"));
  suma += numero;
}

console.log("La suma total es: " + suma);

