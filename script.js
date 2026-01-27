const myLibrary = [];

const addBtn = document.querySelector('.new');
const closeBtn = document.querySelector('.close');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const removeBtns = document.querySelectorAll('.remove');

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function showBooks() {
    const parentContainer = document.querySelector('.book-container');
    parentContainer.innerHTML = "";

    myLibrary.forEach(book => {
        const newBook = document.createElement("div");
        newBook.classList.add('book');
        newBook.dataset.id = book.id;

        const title = document.createElement('h1');
        title.textContent = book.title;

        const author = document.createElement('h3');
        author.textContent = book.author;

        const pages = document.createElement('p');
        pages.textContent = `${book.pages} pages`;

        const read = document.createElement('p');
        read.textContent = book.read ? "read" : "not read yet";

        const remove = document.createElement('button');
        remove.classList.add('remove');
        removeCard(remove);

        newBook.append(title, author, pages, read, remove);
        parentContainer.appendChild(newBook);
    });
}

function getInputValues() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    return { title, author, pages, read };
}

addBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const { title, author, pages, read } = getInputValues();

    addBookToLibrary(title, author, pages, read);
    showBooks();
    dialog.close();
    form.reset();
});


removeBtns.forEach(function (button) {
    button.addEventListener('click', () => {
        console.log('botao funcionando')
    });
});
    

    console.log('botao funcionando')
    // const parent = removeBtn.closest(".book");
    // console.log(parent);
    // const id = parent.dataset.id;
    // myLibrary = myLibrary.filter(book => book.id === id);


function removeCard(button) {
    button.addEventListener('click', () => {
        const id = button.closest('.book').dataset.id;
        
        const index = myLibrary.findIndex(book => book.id === id);
        myLibrary.splice(index, 1)

        showBooks();
    })
}