const prompt = require("prompt-sync")({ sigint: true }); 

// Paso 1: Pedir los tres números al usuario
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

// Paso 2: Comparar los números para determinar cuál es el mayor
if (num1 > num2 && num1 > num3) {
  console.log(`El número mayor es: ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`El número mayor es: ${num2}`);
} else {
  console.log(`El número mayor es: ${num3}`);
}
