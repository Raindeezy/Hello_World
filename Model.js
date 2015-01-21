// Model a library using objects. *  
// A library contains shelves. Shelves contain books. Books have an author and a title. 
// Give the library methods to add and remove a shelf. A shelf should have methods to add/remove a book. 
// Use a modular approach so that each type of object is contained in its own file. Add any functionality you think appropriate.



var myLibrary = [
		tolkien = { 
			author: "J.R.R Tolkien",
			bookTitle: "Lord of the Rings"
			},
		dostoyevsky = { 
			author: "Fyodor Dostoyevsky",
			bookTitle: "Crime and Punishment"
			},
		steinbeck = { 
			author: "John Steinbeck",
			bookTitle: "Of Mice and Men"
			}
]



prompt("What would you like to do?")
puts "-- Type 'add' to add a book."
puts "-- Type 'delete' to delete a book."
puts "-- Type 'display' to display all books."
puts "-- Type 'addshelf' to add a shelf."
puts "-- Type 'deleteshelf' to delete a shelf."

var choice = gets.chomp.downcase
switch choice

case: 'add'

addBook = function(author, bookTitle) {
	this.author = author;
	this.bookTitle = bookTitle;
};
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


// Book shelf[shelf.length] = {

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


when 'add'
  puts "What movie do you want to add?"
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "What's the rating? (Type a number 0 to 4.)"
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts "#{title} has been added with a rating of #{rating}."
  else
    puts "That movie already exists! Its rating is #{movies[title.to_sym]}."
  end
when 'update'
  puts "What movie do you want to update?"
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "Movie not found!"
  else
    puts "What's the new rating? (Type a number 0 to 4.)"
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts "#{title} has been updated with new rating of #{rating}."
  end
when 'display'
  movies.each do |movie, rating|
    puts "#{movie}: #{rating}"
  end
when 'delete'
  puts "What movie do you want to delete?"
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "Movie not found!"
  else
    movies.delete(title.to_sym)
    puts "#{title} has been removed."
  end
else
  puts "Sorry, I didn't understand you."
end

*/