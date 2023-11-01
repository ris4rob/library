const myLibrary = [];
const addBtn = document.querySelector('#addBtn');
const closeBtn = document.querySelector('#closeBtn');
const bookDialog = document.querySelector('#bookDialog');
const formInputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const mainSection = document.querySelector('.main-section');
let cardCloseBtn = document.querySelectorAll('#cardCloseBtn');
let readBtn = document.querySelectorAll('#read');

function Book(title, author, pages, read) {
  // Book object constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(form) {
  // Create book from form data
  const newBook = new Book(
    form.title.value,
    form.author.value,
    form.pages.value,
    form.read.checked
  );
  console.log(`New book created = ${newBook}`);
  // Push book to myLibrary array
  myLibrary.push(newBook);
}

function displayBook(myLibrary) {
  // create a div for book and append all the details to it
  let book = myLibrary[myLibrary.length - 1];
  let index = myLibrary.length - 1;
  console.log(index);
  createBookCard(book, index);

  cardCloseBtn = document.querySelectorAll('#cardCloseBtn');
  readBtn = document.querySelectorAll('#read');

  cardCloseBtn.forEach((closebutton) => {
    closebutton.addEventListener('click', eventHandler);
  });

  readBtn.forEach((readbutton) => {
    readbutton.addEventListener('change', changeReadStatus);
  });
}

function changeReadStatus(e) {
  const readPushed = e.target.index;

  console.log(readPushed);
}

function eventHandler(e) {
  const buttonPressed = e.target;
  const removeIndex = e.target.index;
  myLibrary.splice(removeIndex, 1);
  buttonPressed.parentNode.remove();
}

function createBookCard(book, index) {
  const div = document.createElement('div');
  div.classList.add('book-card');

  const titleH5 = document.createElement('h5');
  titleH5.innerText = 'Title';
  div.appendChild(titleH5);

  const titleP = document.createElement('p');
  titleP.innerText = book.title;
  div.appendChild(titleP);

  const authorH5 = document.createElement('h5');
  authorH5.innerText = 'Author';
  div.appendChild(authorH5);

  const authorP = document.createElement('p');
  authorP.innerText = book.author;
  div.appendChild(authorP);

  const pagesH5 = document.createElement('h5');
  pagesH5.innerText = 'Pages';
  div.appendChild(pagesH5);

  const pagesP = document.createElement('p');
  pagesP.innerText = book.pages;
  div.appendChild(pagesP);

  // Read title and checkbox
  const readH5 = document.createElement('h5');
  readH5.innerText = 'Read';

  const readCheckbox = document.createElement('input');
  readCheckbox.type = 'checkbox';
  readCheckbox.id = 'read';
  // Add check to checkbox if required
  readCheckbox.checked = book.read;
  readCheckbox.index = index;
  readH5.appendChild(readCheckbox);
  div.appendChild(readH5);

  //Create button
  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.innerText = 'Close';
  closeBtn.classList.add('card-closeBtn');
  closeBtn.id = 'cardCloseBtn';
  closeBtn.index = index;

  div.appendChild(closeBtn);

  mainSection.appendChild(div);
}

// EVENT HANDLERS

addBtn.addEventListener('click', () => {
  bookDialog.showModal();
});

addBookBtn.addEventListener('click', () => {
  // get all data from form
  addBookToLibrary(form);

  displayBook(myLibrary);

  // Close dialog & reset form inputs after book is submitted
  bookDialog.close();
  formInputs.forEach((input) => {
    input.value = '';
  });
});

closeBtn.addEventListener('click', () => {
  bookDialog.close();
  formInputs.forEach((input) => {
    input.value = '';
  });
});
