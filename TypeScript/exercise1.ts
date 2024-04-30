class Book {
  title: string;
  author: string;
  genre: string;
  available: boolean;

  constructor(title: string, author: string, genre: string, available: boolean = true) {
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.available = available;
  }
}

class Library {
  name: string;
  books: Book[];

  constructor(name: string) {
      this.name = name;
      this.books = [];
  }

  addBook(book: Book): void {
      this.books.push(book);
  }

  removeBookByTitle(title: string): void {
      this.books = this.books.filter(book => book.title !== title);
  }

  removeBookByISBN(isbn: number): void {
      this.books = this.books.filter(book => book.isbn !== isbn);
  }

  searchByTitle(title: string): Book[] {
      return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  }

  searchByAuthor(author: string): Book[] {
      return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
  }

  searchByGenre(genre: string): Book[] {
      return this.books.filter(book => book.genre.toLowerCase().includes(genre.toLowerCase()));
  }

  displayAvailableBooks(): Book[] {
      return this.books.filter(book => book.available);
  }

  borrowBook(title: string): boolean {
      const book = this.books.find(book => book.title === title && book.available);
      if (book) {
          book.available = false;
          return true;
      }
      return false;
  }

  returnBook(title: string): boolean {
      const book = this.books.find(book => book.title === title && !book.available);
      if (book) {
          book.available = true;
          return true;
      }
      return false;
  }
}

class User {
  name: string;
  borrowedBooks: Book[];

  constructor(name: string) {
      this.name = name;
      this.borrowedBooks = [];
  }

  borrowBook(library: Library, title: string): boolean {
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

  viewBorrowedBooks(): Book[] {
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