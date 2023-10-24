let varNum1 = parseInt(prompt("Inserte un primer numero"));
let varNum2 = parseInt(prompt("Inserte un segundo numero"));
let varNum3 = parseInt(prompt("Inserte un tercer numero"));

let varNumeroMayor;

if (varNum1 >= varNum2 && varNum1 >= varNum3) {
    varNumeroMayor = varNum1;
  } else if (varNum2 >= varNum1 && varNum2 >= varNum3) {
    varNumeroMayor = varNum2;
  } else {
    varNumeroMayor = varNum3;
  }

document.write("El " + varNumeroMayor + " es el número más grande.");