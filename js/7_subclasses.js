class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in the year ${this.year}.`
  }
}

//MAGAZINE SUBCLASS
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year)
    this.month = month
  }
}

// INSTANTIATE MAGAZINE
const mag1 = new Magazine("Mag One", "John Smith", "2023", "Jan")

console.log(mag1.getSummary())
