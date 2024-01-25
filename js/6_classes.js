class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in the year ${this.year}.`
  }

  getAge() {
    const years = new Date().getFullYear() - this.year
    return `${this.title} was published ${years} years ago.`
  }

  revise(newYear) {
    this.year = newYear
    this.revised = true
  }

  static topBookStore() {
    return "Barnes & Noble"
  }
}

// INSTANTIATE OBJECT
const book1 = new Book("Book One", "John Smith", "2013")

// console.log(book1)
// book1.revise("2014")
// console.log(book1)

console.log(Book.topBookStore())
