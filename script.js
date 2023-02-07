let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');
let trueInput = document.getElementById('true');
let falseInput = document.getElementById('false');
let submitBtn = document.getElementById('submit');
let addBtn = document.getElementById('addBook');
const container = document.getElementById('container');

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkein', '295', true);
const berserk = new Book('Berserk', 'Kentaro Miura', '9500', true);
const tao = new Book ('Tao', 'Alan Watts', '131');
let myLibrary = [];



addBookToLibrary(berserk);
addBookToLibrary(theHobbit);
addBookToLibrary(tao);
addBookToLibrary(berserk);
addBookToLibrary(theHobbit);
addBookToLibrary(tao);


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

myLibrary.forEach(book =>{
    let cardsContainer = document.createElement('div');
    let cardAuthor = document.createElement('div');
    let cardTitle = document.createElement('div');
    let cardPages = document.createElement('div');
    let statusBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    container.appendChild(cardsContainer);
    cardsContainer.appendChild(cardAuthor);
    cardsContainer.appendChild(cardTitle);
    cardsContainer.appendChild(cardPages);
    cardsContainer.appendChild(statusBtn);
    cardsContainer.appendChild(deleteBtn);
    cardsContainer.classList.add('cardsContainer');
    cardAuthor.classList.add('author');
    cardTitle.classList.add('title');
    cardPages.classList.add('pages');
    statusBtn.classList.add('statusBtn');
    deleteBtn.classList.add('deleteBtn');
    cardAuthor.textContent = `Author: ${book.author}`;
    cardTitle.textContent = `Title: ${book.title}`;
    cardPages.textContent = `Number of pages: ${book.pages}`;
    statusBtn.textContent = 'Read status';
    deleteBtn.textContent = 'Delete';
})

function createCards(){ 
    
}


function addBookToLibrary(book){ 
    myLibrary.push(book)
};

function openForm(){
    document.getElementById("myForm").style.display = "block";
};
function closeForm(){
    document.getElementById('myForm').style.display = "none";
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



//boton para eliminar del array
 