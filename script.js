const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`
    }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("bruno", "rombi", "120", true);


function showBooks() {
    myLibrary.forEach(book => {
        const parentContainer = document.querySelector('.book-container');

        const newBook = document.createElement("div");
        newBook.classList.add('book');


        const title = document.createElement('h1');
        title.textContent = book.title;
        const author = document.createElement('h3');
        author.textContent = book.author;
        const pages = document.createElement('p');
        pages.textContent = book.pages
        const read = document.createElement('p');
        read.textContent = book.read ? "read" : "not read yet";

        newBook.append(title, author, pages, read);
        parentContainer.appendChild(newBook);
    })
}

showBooks();