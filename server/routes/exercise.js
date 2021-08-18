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

router.route("/get").get((req, res) => {
  var date = new Date();
  const endDate = new Date(
    new Date().setUTCHours(23, 59, 59, 999)
  ).toISOString();
  Exercise.find({
    date: {
      $gte: new Date(date.getFullYear(), date.getMonth(), date.getDay()),
      $lt: endDate,
    },
  })
    .then((page) => res.json(page))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
