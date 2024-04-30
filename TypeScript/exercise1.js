"use strict";
class Book {
    constructor(title, author, genre, available = true) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.available = available;
    }
}
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        this.bookps.push(book);
    }
    removeBookByTitle(title) {
        this.books = this.books.filter(book => book.title !== title);
    }
    removeBookByISBN(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }
    searchByTitle(title) {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }
    searchByAuthor(author) {
        return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    }
    searchByGenre(genre) {
        return this.books.filter(book => book.genre.toLowerCase().includes(genre.toLowerCase()));
    }
    displayAvailableBooks() {
        return this.books.filter(book => book.available);
    }
    borrowBook(title) {
        const book = this.books.find(book => book.title === title && book.available);
        if (book) {
            book.available = false;
            return true;
        }
        return false;
    }
    returnBook(title) {
        const book = this.books.find(book => book.title === title && !book.available);
        if (book) {
            book.available = true;
            return true;
        }
        return false;
    }
}
class User {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    borrowBook(library, title) {
        if (this.borrowedBooks.length >= 5) {
            console.log("You have reached the maximum limit for borrowing books.");
            return false;
        }
        const success = library.borrowBook(title);
        if (success) {
            const book = library.books.find(book => book.title === title);
            if (book) {
                this.borrowedBooks.push(book);
            }
        }
        return success;
    }
    viewBorrowedBooks() {
        return this.borrowedBooks;
    }
}
// Example usage
const library = new Library("My Library");
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction");
library.addBook(book1);
library.addBook(book2);
const user1 = new User("Alice");
user1.borrowBook(library, "The Hobbit");
console.log(user1.viewBorrowedBooks());
const user2 = new User("Bob");
user2.borrowBook(library, "To Kill a Mockingbird");
console.log(user2.viewBorrowedBooks());
library.displayAvailableBooks().forEach(book => console.log(book.title));
