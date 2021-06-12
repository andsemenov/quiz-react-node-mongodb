const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  id: { type: Number, required: true },
  question: { type: String, required: true },
  options: { type: Array, required: true },
  rightAnswer: { type: Number, required: true },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
