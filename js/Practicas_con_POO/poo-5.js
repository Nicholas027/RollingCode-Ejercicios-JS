// class Persona {
//     constructor(nombre, nacimiento) {
//       this.nombre = nombre;
//       this.nacimiento = nacimiento;
//     }
  
//     mostrarGeneracion() {
//       const generacion = this.obtenerGeneracion();
//       console.log(`Esta persona pertenece a la generacion: ${generacion}`);
//       this.caracteristicaGeneracion(generacion);
//     }
  
//     obtenerGeneracion() {
//       const año = new Date().getFullYear();
//       const edad = año - this.nacimiento;
  
//       if (edad >= 1994 && edad <= 2010) {
//         return 'Generacion Z';
//       } else if (edad >= 1981 && edad <= 1993) {
//         return 'Generacion Y (Millennials)';
//       } else if (edad >= 1969 && edad <= 1980) {
//         return 'Generacion X';
//       } else if (edad >= 1949 && edad <= 1968) {
//         return 'Baby Boom';
//       } else if (edad >= 1930 && edad <= 1938) {
//         return 'Silent Generation';
//       } else {
//         return 'Generacion Desconocida';
//       }
//     }
  
//     caracteristicaGeneracion(generacion) {
//       switch (generacion) {
//         case 'Generacion Z':
//           console.log('Circunstancia Historica: Expansion masiva de internet.');
//           console.log('Rasgo Caracteristico: Irreverencia.');
//           break;
//         case 'Generacion Y (Millennials)':
//           console.log('Circunstancia Historica: Inicio de la digitalización.');
//           console.log('Rasgo Caracteristico: Frustracion.');
//           break;
//         case 'Generacion X':
//           console.log('Circunstancia Historica: Crisis del 73 y transicion española.');
//           console.log('Rasgo Caracteristico: Obsesión por el exito.');
//           break;
//         case 'Baby Boom':
//           console.log('Circunstancia Historica: Paz y explosión demográfica.');
//           console.log('Rasgo Caracteristico: Ambicion.');
//           break;
//         case 'Silent Generation':
//           console.log('Circunstancia Historica: Conflictos bélicos.');
//           console.log('Rasgo Caracteristico: Austeridad.');
//           break;
//         default:
//           console.log('No se encontraron datos para esta generacion.');
//       }
//     }
  
//     esMayorDeEdad() {
//       const año = new Date().getFullYear();
//       const edad = año - this.nacimiento;
//       return edad >= 18 ? 'Es mayor de edad.' : 'No es mayor de edad.';
//     }
  
//     mostrarDatos() {
//       console.log(`Nombre: ${this.nombre}`);
//       console.log(`Año de Nacimiento: ${this.nacimiento}`);
//     }
//   }
  
//   const nuevaPersona = new Persona('Nicolas', 1999);
//   nuevaPersona.mostrarGeneracion();
//   console.log(nuevaPersona.esMayorDeEdad());
//   nuevaPersona.mostrarDatos();
  