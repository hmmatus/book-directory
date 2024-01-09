let books = (module.exports = {});
let booksData = require("../../mock/books.json");
books.getAll = (req, res) => {
  try {
    res.send(booksData);
  } catch (error) {
    console.log("🚀 ~ file: books.js:7 ~ error:", error);
    res.status(404).json({
      message: `${error}`,
    });
  }
};

books.add = (req, res) => {
  try {
    const newBook = {
      id: booksData.length + 1,
      name: req.body.name,
      description: req.body.description,
      amount: req.body.amount,
      nPages: req.body.nPages,
    };
    booksData.push(newBook);
    res.send(newBook);
  } catch (error) {
    res.status(400).send({
      message: `${error}`,
    });
  }
};

books.update = (req, res) => {
  try {
    const updatedBook = {
      id: req.params.id,
      name: req.body?.name,
      description: req.body?.description,
      amount: req.body?.amount,
      nPages: req.body?.nPages,
    };
    const newArrayOfBooks = booksData.filter(
      (item) => item.id !== req.params.id
    );
    newArrayOfBooks.push(updatedBook);
    booksData = newArrayOfBooks;
    res.send(newArrayOfBooks);
  } catch (error) {
    res.status(400).send({
      message: `${error}`,
    });
  }
};

books.delete = (req, res) => {
  try {
    const newArrayOfBooks = booksData.filter(
      (item) => item.id !== req.params.id
    );
    booksData = newArrayOfBooks;
    res.send(newArrayOfBooks);
  } catch (error) {
    res.status(400).send({
      message: `${error}`,
    });
  }
};
