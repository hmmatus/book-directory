const express = require("express");
const router = express.Router();

const books = require("./books");

router.get("/", (req, res) => {
  res.send({
    message: "Welcome to the Books api",
  });
});

router
  .get("/books", books.getAll)
  .post("/books", books.add)
  .put("/books/:id", books.update)
  .delete("/books/:id", books.delete);

module.exports = router;
