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
let imageUrl = "<img src=\"/Users/andrewtam/JS-Library/JS-Library/images/x.png\" width=\"20px\" height=\"25px\">";

let deleteRow = 0;
        

// function Book(title,author,pages) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.readBook = "Read";
//   this.info = function(){
//       console.log(`The title of the book is ${title}, the author is ${author},there are ${pages} pages in the book`);
//   }
// }

//This is class syntax for the constructor
class Book {
    constructor(title,author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
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
        deleteRow = currentRow;
        // <div id = 'delete'>
        // <img src = 'x.png'>
        // </div>

        // Delete Declaration and Functionality
        let deleteButton = document.createElement('button');
        deleteButton.id = 'delete';
        let img = document.createElement("img");
        img.src = "/Users/andrewtam/JS-Library/JS-Library/images/x.png";
        img.height = '25';
        img.width = '20';
        deleteButton.appendChild(img);
        deleteButton.addEventListener('click',function(){
            document.getElementById('book-list').deleteRow(deleteButton.closest('tr').rowIndex);
        });

        //Toggle Declaration and Functionality
        let toggle = document.createElement('button');
        toggle.id = 'changeStatus';
        toggle.textContent = "Change Status";
        toggle.addEventListener('click',function(){
            if(statusCell.innerHTML = 'Read'){
                statusCell.innerHTML = 'Not Read';
            }
            else if(statusCell.innerHTML = 'Not Read'){
                statusCell.innerHTML = 'Read';
            }
        });

        
        // document.getElementById("delete").appendChild(imageUrl);
        let toggleCell = row.insertCell(4);
        let deleteCell = row.insertCell(5);
        titleCell.innerHTML = `${myLibrary[currentBook].title}`;
        authorCell.innerHTML = `${myLibrary[currentBook].author}`;
        pageCell.innerHTML = `${myLibrary[currentBook].pages}`;
        statusCell.innerHTML = `${myLibrary[currentBook].readBook}`;
        deleteCell.appendChild(deleteButton);
        toggleCell.appendChild(toggle);
        currentRow+=1;
        console.log(currentBook);

        
           
        
        
    // }
}
function deleteBook(){
    displayBooks();
    deleteDiv.createElement('p');
   

}
function testFunction(title,author,pages){
    let testBook = new Book(title,author,pages);
    myLibrary.push(testBook);
    displayBooks();
    currentBook+=1;
}
function clearAll(){
    // myLibrary = [];
    
  var tb = document.getElementById('book-list');
  while(tb.rows.length > 1) {
  tb.deleteRow(1);
}
}



testFunction('Harry Potter','JK Rowling',69);
testFunction('Intelligent Investor','Benjamin Graham',435);
testFunction('Programming With Mosh','Mosh',100);

// addBookToLibrary('Fundamentals','JK Rowling',69);
// addBookToLibrary('','JK Rowling',69);




