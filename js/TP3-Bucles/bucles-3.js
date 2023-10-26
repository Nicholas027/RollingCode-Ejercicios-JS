// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”.
// Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// Ejemplo:

// Input: 5                      Output: Suficiente
// Input: 50                     Output: Número erróneo
// Input: hola10                 Output: Introduce un número válido

// let numero;

// while (true) {
//   numero = parseInt(prompt("Ingrese un numero"));
//   if (isNaN(numero)) { //pero si introduce "10hola" imprime suficiente o erroneo si el primer numero no es del rango 🤔
//     alert("Introduce un numero valido");
//     break;
//   } else if (numero < 0 || numero > 10) {
//     alert("Numero erroneo");
//     break;
//   } else {
//     alert("Suficiente");
//     break;
//   }
// }
