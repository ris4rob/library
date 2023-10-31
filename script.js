const myLibrary = [];
const addBtn = document.querySelector('#addBtn');
const closeBtn = document.querySelector('#closeBtn');
const bookDialog = document.querySelector('#bookDialog');
const newDiv = document.createElement('div');
const formInputs = document.querySelectorAll('input');
const form = document.querySelector('form');

function Book(title, author, pages, read) {
  // Book object constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(data) {
  // Create book from form data
  const newBook = new Book(
    form.title.value,
    form.author.value,
    form.pages.value,
    form.read.value
  );
  console.log(`New book created = ${newBook}`);
  // Push book to myLibrary array
  myLibrary.push(newBook);
}

function displayBook(book) {
  // create a div for book and append all the details to it
}

addBtn.addEventListener('click', () => {
  bookDialog.showModal();
});

addBookBtn.addEventListener('click', () => {
  // get all data from form
  addBookToLibrary(form);

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
