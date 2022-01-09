let myLibrary = [];
// let book_desc = document.querySelector('book-description');
// row 0 is the headers, so current row starts at 1
let currentRow = 1;
// reference to the table
let table = document.getElementById('book-list');
//current book is the 0th index in the array
let currentBook = 0;
let authorInput = document.getElementById('authorInput');
let titleInput = document.getElementById('titleInput');
let pagesInput = document.getElementById('pagesInput');
let readInput = document.getElementById('readInput');
function Book(title,author,pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readBook = "read";
  this.info = function(){
      console.log(`The title of the book is ${title}, the author is ${author},there are ${pages} pages in the book`);
  }
}
function addBookToLibrary(title,author,pages) {
     title = titleInput.value;
     author = authorInput.value;
     pages = pagesInput.value;
     if(title === null || author === null || pages === null){
         return;
     }
     console.log(`${title} ${author} ${pages}`)
     let newBook = new Book(title,author,pages);
     if(readInput.value === 'read'){
         newBook.readBook = 'Read';
     }
     else{
         newBook.readBook = 'Not Read';
     }
     myLibrary.push(newBook);
     displayBooks();
     currentBook+=1;
    //  title = '';
    //  author = '';
    //  pages = '';      
}
function displayBooks(){
    // for(let book = 0; book < myLibrary.length; book++){

        let row = table.insertRow(currentRow);
        let titleCell = row.insertCell(0);
        let authorCell = row.insertCell(1);
        let pageCell = row.insertCell(2);
        let statusCell = row.insertCell(3);
        titleCell.innerHTML = `${myLibrary[currentBook].title}`;
        authorCell.innerHTML = `${myLibrary[currentBook].author}`;
        pageCell.innerHTML = `${myLibrary[currentBook].pages}`;
        statusCell.innerHTML = `${myLibrary[currentBook].readBook}`;
        console.log(currentBook);
    // }
}
function testFunction(title,author,pages){
    let testBook = new Book(title,author,pages);
    myLibrary.push(testBook);
    displayBooks();
    currentBook+=1;
}
testFunction('Harry Potter','JK Rowling',69);
testFunction('Intelligent Investor','Benjamin Graham',435);
// addBookToLibrary('Fundamentals','JK Rowling',69);
// addBookToLibrary('','JK Rowling',69);




