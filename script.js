function Book(title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
};

let myLibrary = [];

// book examples
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkein', '295', true);
const berserk = new Book('Berserk', 'Kentaro Miura', '9500', true);
const tao = new Book ('Tao', 'Alan Watts', '131', false);
addBookToLibrary(berserk);
addBookToLibrary(theHobbit);
addBookToLibrary(tao);



//DOM elements
const container = document.getElementById('container');

let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');
let checkbox = document.getElementById('readStatus');
let submitBtn = document.getElementById('submit');
let addBtn = document.getElementById('addBook');
let inputs = document.querySelectorAll('input')






submitBtn.addEventListener('click', submitClick);
addBtn.addEventListener('click', openForm);





function submitClick(event){ 
    let newTitle = titleInput.value;
    let newAuthor = authorInput.value;
    let newPages = pagesInput.value;
    let readStatus = checkbox.checked ? true : false;
    if (newTitle === '' || newAuthor === '' || newPages === ''){  
        return
    } else { 
    container.innerHTML = "";
    const bookForm = new Book(newTitle, newAuthor, newPages, readStatus); 
    addBookToLibrary(bookForm); 
    createCards();
    clearForm();
    event.preventDefault();
    closeForm();
    };
};


function createCards(){ 
    myLibrary.forEach(book =>{
        let cardsContainer = createElementWithClass('div', 'cardsContainer');
        let cardAuthor = createElementWithClass('div', 'cardAuthor');
        let cardTitle = createElementWithClass('div', 'cardTitle');
        let cardPages = createElementWithClass('div', 'cardPages');
        let statusBtn = createElementWithClass('button', 'statusBtn');
        let deleteBtn = createElementWithClass('button', 'deleteBtn');
        container.appendChild(cardsContainer);
        cardsContainer.appendChild(cardAuthor);
        cardsContainer.appendChild(cardTitle);
        cardsContainer.appendChild(cardPages);
        cardsContainer.appendChild(statusBtn);
        cardsContainer.appendChild(deleteBtn);
        cardAuthor.textContent = `Author: ${book.author}`;
        cardTitle.textContent = `Title: ${book.title}`;
        cardPages.textContent = `Number of pages: ${book.pages}`;
        book.readStatus ? statusBtn.textContent = "Done reading it" : statusBtn.textContent = "I'll read it later";
        book.readStatus ? statusBtn.classList.add('trueBtn') : statusBtn.classList.add('falseBtn');
        deleteBtn.textContent = 'Delete';
    })
}

function createElementWithClass (elementType, className){
    let element = document.createElement(elementType);
    element.classList.add(className);
    return element
}


function addBookToLibrary(book){ 
    myLibrary.push(book)
};


function clearForm (){
    inputs.forEach(input => input.value ='');
};
function openForm(){
    document.getElementById("myForm").style.display = "block";
};
function closeForm(){
    document.getElementById('myForm').style.display = "none";
};







// Book.prototype.info = function() {
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus ? 'already read' : 'not read yet'}`
// }




 