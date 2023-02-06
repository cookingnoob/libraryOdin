let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');
let trueInput = document.getElementById('true');
let falseInput = document.getElementById('false');
let submitBtn = document.getElementById('submit');
let addBtn = document.getElementById('addBook');
const container = document.getElementById('container');

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkein', '295', true);
const Berserk = new Book('Berserk', 'Kentaro Miura', '9500', true);
let myLibrary = [];



addBookToLibrary(Berserk);
addBookToLibrary(theHobbit);


submitBtn.addEventListener('click', submitClick);
addBtn.addEventListener('click', openForm);





function submitClick(event){ 
    let newTitle = titleInput.value;
    let newAuthor = authorInput.value;
    let newPages = pagesInput.value;
    if (newTitle === '' || newAuthor === '' || newPages === ''){  
        return
    } else { 
    container.innerHTML = "";
    const bookForm = new Book(newTitle, newAuthor, newPages); 
    addBookToLibrary(bookForm); 
    createCards();
    event.preventDefault();
    closeForm();
    };
};
function createCards(){ 

}
myLibrary.forEach(book =>{
    let cardsContainer = document.createElement('div');
    let cardAuthor = document.createElement('div');
    let cardTitle = document.createElement('div');
    let cardPages = document.createElement('div');
    container.appendChild(cardsContainer);
    cardsContainer.appendChild(cardAuthor);
    cardsContainer.appendChild(cardTitle);
    cardsContainer.appendChild(cardPages);
    cardAuthor.classList.add('card');
    cardsContainer.classList.add('cardsContainer')
    cardAuthor.textContent = book.author;
    cardTitle.textContent = book.title;
    cardPages.textContent = book.pages;
})

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



// hace una copia del titulo y lo modifica para que sea camelCase
//crea una const CamelCase = new Book (pone aqui las variables, 3 string y 1 boolean)
//Loop que da -estilo- a cada elemento del array
//boton para eliminar del array
 