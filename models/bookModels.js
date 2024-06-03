const mongoose = require("mongoose");

//Schema is used to set rules for sending exact data from frontend to backend there shouldn't be any conflict between the path.
const bookModel = new mongoose.Schema({
  poster: String,
  bookname: String,
  authorname: String,
  isbnNo: String,
  bookprice: Number,
  description: String,
});

//Model is used to create a collection in the database.
// const bookCollection = mongoose.model('bookCollectionName', bookModel)
const bookCollection = mongoose.model("books", bookModel);

module.exports = bookCollection;
