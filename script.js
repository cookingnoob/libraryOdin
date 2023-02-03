let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');
let statusInput = document.getElementById('status');
let newTitle = titleInput.value;
let newAuthor = authorInput.value;
let newPages = pagesInput.value;
let myLibrary = [];
const prueba = new Book(newTitle, newAuthor, newPages) //pasarla por un event listener
addBookToLibrary(prueba)



function addBookToLibrary(book){ 
    myLibrary.push(book)
};

function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
};


// readStatus
// this.readStatus = readStatus


// Book.prototype.info = function() {
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus ? 'already read' : 'not read yet'}`
// }

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkein', '295', true);
// const Berserk = new Book('Berserk', 'Kentaro Miura', '9500', true);
// addBookToLibrary(Berserk);
// addBookToLibrary(theHobbit);

//aparece el formulario con el boton "add book"
// al picar send se crean variables por cada elemento del formulario
// hace una copia del titulo y lo modifica para que sea camelCase
//crea una const CamelCase = new Book (pone aqui las variables, 3 string y 1 boolean)
//invoca a addBookToLibrary(camelCase)
//Loop que da -estilo- a cada elemento del array
//boton para eliminar del array
 