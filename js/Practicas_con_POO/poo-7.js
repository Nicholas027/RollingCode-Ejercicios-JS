// class Contacto {
//     constructor(nombre, telefono) {
//       this.nombre = nombre;
//       this.telefono = telefono;
//     }
  
//     esIgual(contacto) {
//       return this.nombre === contacto.nombre;
//     }
//   }
  
//   class Agenda {
//     constructor(tamaño = 10) {
//       this.contactos = [];
//       this.tamaño = tamaño;
//     }
  
//     aniadirContacto(contacto) {
//       if (this.agendaLlena()) {
//         console.log('Agenda llena');
//         return;
//       }
//       if (!this.existeContacto(contacto)) {
//         this.contactos.push(contacto);
//         console.log(`Contacto "${contacto.nombre}" añadido a la agenda.`);
//       } else {
//         console.log(`El contacto "${contacto.nombre}" ya existe en la agenda.`);
//       }
//     }
  
//     existeContacto(contacto) {
//       return this.contactos.some(c => c.esIgual(contacto));
//     }
  
//     listarContactos() {
//       console.log('Lista de contactos en la agenda:');
//       this.contactos.forEach(contacto => {
//         console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
//       });
//     }
  
//     buscarContacto(nombre) {
//       const contactoEncontrado = this.contactos.find(c => c.nombre === nombre);
//       if (contactoEncontrado) {
//         console.log(`El teléfono de ${nombre} es: ${contactoEncontrado.telefono}`);
//       } else {
//         console.log(`No se encontró el contacto ${nombre} en la agenda.`);
//       }
//     }
  
//     eliminarContacto(contacto) {
//       const index = this.contactos.findIndex(c => c.esIgual(contacto));
//       if (index !== -1) {
//         this.contactos.splice(index, 1);
//         console.log(`Contacto "${contacto.nombre}" eliminado de la agenda.`);
//       } else {
//         console.log(`El contacto "${contacto.nombre}" no existe en la agenda.`);
//       }
//     }
  
//     agendaLlena() {
//       return this.contactos.length >= this.tamaño;
//     }
  
//     huecosLibres() {
//       return this.tamaño - this.contactos.length;
//     }
//   }
  
//   function mostrarMenu() {
//     console.log('1. Añadir Contacto');
//     console.log('2. Verificar Contacto');
//     console.log('3. Listar Contactos');
//     console.log('4. Buscar Contacto');
//     console.log('5. Eliminar Contacto');
//     console.log('6. Verificar si la agenda está llena');
//     console.log('7. Espacios disponibles en la agenda');
//     console.log('0. Salir');
//   }
  
//   const agenda = new Agenda();
  
//   let opcion;
//   do {
//     mostrarMenu();
//     opcion = prompt('Seleccione una opcion (0-7):');
  
//     switch (opcion) {
//       case '1':
//         const nombre = prompt('Ingrese el nombre del contacto:');
//         const telefono = prompt('Ingrese el telefono del contacto:');
//         agenda.aniadirContacto(new Contacto(nombre, telefono));
//         break;
//       case '2':
//         const nombreVerificar = prompt('Ingrese el nombre del contacto a verificar:');
//         const contactoVerificado = new Contacto(nombreVerificar);
//         console.log(agenda.existeContacto(contactoVerificado) ? 'El contacto existe.' : 'El contacto no existe.');
//         break;
//       case '3':
//         agenda.listarContactos();
//         break;
//       case '4':
//         const nombreBuscar = prompt('Ingrese el nombre del contacto a buscar:');
//         agenda.buscarContacto(nombreBuscar);
//         break;
//       case '5':
//         const nombreEliminar = prompt('Ingrese el nombre del contacto a eliminar:');
//         agenda.eliminarContacto(new Contacto(nombreEliminar));
//         break;
//       case '6':
//         console.log(agenda.agendaLlena() ? 'La agenda está llena.' : 'La agenda no está llena.');
//         break;
//       case '7':
//         console.log(`Espacios disponibles en la agenda: ${agenda.huecosLibres()}`);
//         break;
//       case '0':
//         console.log('Saliendo...');
//         break;
//       default:
//         console.log('Opción invalida.');
//     }
//   } while (opcion !== '0');
  