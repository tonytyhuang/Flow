const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/add").post((req, res) => {
  console.log(req.body);
  const title = req.body.exercise;
  const complete = req.body.completed;
  const date = req.body.date;

  const newExercise = new Exercise({
    title,
    complete,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise Added!"))
    .catch((e) => res.status(400).json("Error: " + e));
});

module.exports = router;
