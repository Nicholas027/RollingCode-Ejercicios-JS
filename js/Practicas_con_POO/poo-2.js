// const cuenta = {
//     titular: 'Alex',
//     saldo: 0,
  
//     ingresar: function(cantidad) {
//       if (cantidad > 0) {
//         this.saldo += cantidad;
//         console.log(`Se depositaron $${cantidad} a la cuenta.`);
//       } else {
//         console.log('La cantidad a depositar debe ser mayor que 0.');
//       }
//     },
  
//     extraer: function(cantidad) {
//       if (cantidad > 0 && this.saldo >= cantidad) {
//         this.saldo -= cantidad;
//         console.log(`Se extrajeron $${cantidad} de la cuenta.`);
//       } else {
//         console.log('Fondos insuficientes');
//       }
//     },
  
//     informar: function() {
//       console.log(`Titular: ${this.titular}, Saldo: $${this.saldo}`);
//     }
//   };
  
//   cuenta.informar();
  
//   cuenta.ingresar(500);
//   cuenta.informar();
  
//   cuenta.extraer(100);
//   cuenta.informar();
  