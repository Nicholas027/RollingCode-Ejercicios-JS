// class Libro {
//     #ISBN;
//     #titulo;
//     #autor;
//     #numPaginas;
  
//     constructor(ISBN, titulo, autor, numPaginas) {
//       this.#ISBN = ISBN;
//       this.#titulo = titulo;
//       this.#autor = autor;
//       this.#numPaginas = numPaginas;
//     }
  
//     setISBN(ISBN) {
//       this.#ISBN = ISBN;
//     }
//     getISBN() {
//       return this.#ISBN;
//     }
  
//     setTitulo(titulo) {
//       this.#titulo = titulo;
//     }
//     getTitulo() {
//       return this.#titulo;
//     }
  
//     setAutor(autor) {
//       this.#autor = autor;
//     }
//     getAutor() {
//       return this.#autor;
//     }
  
//     setNumPaginas(numPaginas) {
//       this.#numPaginas = numPaginas;
//     }
//     getNumPaginas() {
//       return this.#numPaginas;
//     }
  
//     mostrarLibro() {
//       console.log(`El libro ${this.#titulo} de ISBN ${this.#ISBN} del autor ${this.#autor} tiene ${this.#numPaginas} paginas.`);
//     }
//   }
  
//   const libro1 = new Libro('9788467046489', 'Luna de Pluton', 'Dross Rotzank', 419);
//   const libro2 = new Libro('9788445012666', 'La llamada de Cthulhu', 'Howard Phillips Lovecraft', 96);
  
//   libro1.mostrarLibro();
//   libro2.mostrarLibro();
  
//   if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
//     console.log(`El libro "${libro1.getTitulo()}" tiene mas páginas.`);
//   } else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
//     console.log(`El libro "${libro2.getTitulo()}" tiene mas páginas.`);
//   } else {
//     console.log('Ambos libros tienen la misma cantidad de páginas.');
//   }