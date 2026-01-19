const myLib = [];

function Book(Name, Author, Read) {
    this.Name=Name;
    this.Author=Author;
    this.Read=Read;
}

function addBookToLib() {
    const nameofBook = document.getElementById("book_name").value;
    const nameofAuthor = document.getElementById("author").value;
    const readCheck = document.getElementById("read").checked;

    const newBook = new Book(nameofBook, nameofAuthor, readCheck);
    myLib.push(newBook);
}

