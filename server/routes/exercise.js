const router = require("express").Router();
let sevenArrows = require("../models/exercise.model");

router.route("/add").post((req, res) => {
  const exerciseTitle = req.body.exercise;
  const completed = req.body.completed;
  const date = req.body.date;

  const newExercise = new exercise({
    exerciseTitle,
    completed,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise Added!"))
    .catch((e) => res.status(400).json("Error: " + e));
});

module.exports = router;
