let books = [];
let id = 1;

module.exports = {
  getAllBooks: (req, res) => {
    res.status(200).send(books);
  },
  createBook: (req, res) => {
    var { title, author } = req.body;
    let newBook = {
      title: title,
      author: author,
      id: id
    };
    id++;
    books.push(newBook);
    res.status(200).send(books);
  }
};
