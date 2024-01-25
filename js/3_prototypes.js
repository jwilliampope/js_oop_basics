function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year

  this.getSummary = function () {
    return `${this.title} was written by ${this.author}`
  }
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} and was published in ${this.year}.`
}

// GET AGE OF BOOK
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year
  return `${this.title} was published ${years} years ago.`
}

// REVISE/CHANGE YEAR
Book.prototype.revise = function (newYear) {
  this.year = newYear
  this.revised = true
}

// INSTANTIATE OBJECT
const book1 = new Book("Book One", "John Smith", "2013")
const book2 = new Book("Book Two", "Lisa Jones", "2014")

console.log(book1)
console.log(book2)
