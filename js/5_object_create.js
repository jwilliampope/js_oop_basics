// Object of protos
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}.`
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year
    return `${this.title} was published ${years} years ago.`
  }
}

// CREATE OBJECT
const book1 = Object.create(bookProtos)
book1.title = "Book One"
book1.author = "John Smith"
book1.year = "2023"

// OR

// const book1 = Object.create(bookProtos, {
//     title: { value: "Book One" },
//     author: { value: "John Smith" },
//     year: { value: "2023" },
// })

console.log(book1)
