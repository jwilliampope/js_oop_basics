function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} and was published in ${this.year}.`
  }
}

// INSTANTIATE OBJECT
const book1 = new Book("Book One", "John Smith", "2013")
const book2 = new Book("Book Two", "Lisa Jones", "2014")

console.log(book1.getSummary())
console.log(book2.getSummary())
