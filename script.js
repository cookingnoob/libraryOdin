let myLibrary = []; //array que va a guardar lista de libros
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkein', '295', true);
const Berserk = new Book('Berserk', 'Kentaro Miura', '9500', true);



myLibrary.forEach(console.table);



function addBookToLibrary(book){ //funcion que va a agregar a myLibrary
    myLibrary.push(book)
};
addBookToLibrary(Berserk);
addBookToLibrary(theHobbit);


function Book(title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
};




// Book.prototype.info = function() {
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus ? 'already read' : 'not read yet'}`
// }

//aparece el formulario con el boton "add book"
// al picar send se crean variables por cada elemento del formulario
// hace una copia del titulo y lo modifica para que sea camelCase
//crea una const CamelCase = new Book (pone aqui las variables, 3 string y 1 boolean)
//invoca a addBookToLibrary(camelCase)
//Loop que da -estilo- a cada elemento del array
//boton para eliminar del array
 