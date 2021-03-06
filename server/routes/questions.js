const router = require("express").Router();
let Question = require("../models/question.model");

router.route("/questions").get((req, res) => {
  Question.find()
    .then((question) => res.json(question))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
