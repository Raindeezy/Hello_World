// Model a library using objects. *  
// A library contains shelves. Shelves contain books. Books have an author and a title. 
// Give the library methods to add and remove a shelf. A shelf should have methods to add/remove a book. 
// Use a modular approach so that each type of object is contained in its own file. Add any functionality you think appropriate.
var myLibrary = [];

function Book(author, bookTitle) {
  this.author = author;
  this.bookTitle = bookTitle;
}

function Shelf() {
  this.Shelf = Shelf;
}

function addShelfToLibrary(Shelf) {
  myLibrary.push(Shelf);
}

function addToShelf(Book, Shelf) {
  Shelf.push(Book);
}

function removeBook(Book) {
  Shelf.splice(Book);
}

function removeShelf(Shelf) {
  myLibrary.splice(Shelf);
}

var tolkien = new Book("J.R.R Tolkien", "Lord of the Rings");
var dostoyevsky = new Book("Fyodor Dostoyevsky", "Crime and Punishment");
var steinbeck = new Book("John Steinbeck", "Of Mice and Men");

var topShelf = new Shelf();
var bottomShelf = new Shelf();

addToShelf(tolkien, topShelf);
addToShelf(dostoyevsky, bottomShelf);
addToShelf(steinbeck, bottomShelf);

addShelfToLibrary(topShelf);
addShelfToLibrary(bottomShelf);



function list(item) {
  var i = 0;
  for (i; i < item.length; i++) {
    console.log(item[i]);
  }
}

list(myLibrary);



/*


var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};



function Person(job, married) {
    this.job = job;
    this.married = true;
}

// create a "gabby" object using the Person constructor!
var gabby = new Person("student", true);
console.log(gabby);

prompt("What would you like to do?")
puts "-- Type 'add' to add a book."
puts "-- Type 'delete' to delete a book."
puts "-- Type 'display' to display all books."
puts "-- Type 'addshelf' to add a shelf."
puts "-- Type 'deleteshelf' to delete a shelf."

var choice = gets.chomp.downcase
switch choice

case: 'add'


break;

case: 'delete'
    prompt("What book do you want to remove?")
    title = gets.chomp
    if myLibrary[title.to_sym].nil?
      console.log("Book not found!")
    else
      myLibrary.delete(title.to_sym)
      console.log(myLibrary.bookTitle + "has been removed.")
    end
  }
break;

case: 'display'
  var list = function(obj) {
  for (var book in obj {
    console.log(book); 
    }
  }
  list(myLibrary.bookTitle)
break;

default: puts "Sorry, I didn't understand you."
break;
end
*/