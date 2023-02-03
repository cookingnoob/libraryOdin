let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');
let trueInput = document.getElementById('true');
let falseInput = document.getElementById('false');
let submitBtn = document.getElementById('submit');
let addBtn = document.getElementById('addBook')
let myLibrary = [];

submitBtn.addEventListener('click', submitClick) 
addBtn.addEventListener('click', openForm)
function checkedStatus (){

};

function submitClick(event){ 
    let newTitle = titleInput.value;
    let newAuthor = authorInput.value;
    let newPages = pagesInput.value;
    if (newTitle === '' || newAuthor === '' || newPages === ''){  
        return
    } else { 
    const bookForm = new Book(newTitle, newAuthor, newPages); 
    addBookToLibrary(bookForm); 
    event.preventDefault();
    closeForm();
    };
};

function openForm(){
    document.getElementById("myForm").style.display = "block";
};

function closeForm(){
    document.getElementById('myForm').style.display = "none";
};

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

// hace una copia del titulo y lo modifica para que sea camelCase
//crea una const CamelCase = new Book (pone aqui las variables, 3 string y 1 boolean)

//Loop que da -estilo- a cada elemento del array
//boton para eliminar del array
 