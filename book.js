function Book(title, author, numberPages, readOrNot){
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.readOrNot = readOrNot;
    this.status = function(){
        return title, author, 
        numberPages, readOrNot   
    }
}

console.log(Book.status);