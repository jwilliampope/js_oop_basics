const book1 = {
  title: "Book One",
  author: "John Smith",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by  ${this.author} in the year ${this.year}.`
  }
}

const book2 = {
  title: "Book Two",
  author: "Lisa Jones",
  year: "2014",
  getSummary: function () {
    return `${this.title} was written by  ${this.author} in the year ${this.year}.`
  }
}

console.log(`SUMMARY: ${book1.getSummary()}`)
console.log(`SUMMARY: ${book2.getSummary()}`)
console.log(Object.values(book2))
