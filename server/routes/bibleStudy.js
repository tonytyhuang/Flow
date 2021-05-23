const router = require("express").Router();
let bibleStudy = require("../models/bibleStudy.model.js");

router.route("/").get((req, res) => {
  sevenArrows
    .find()
    .then((page) => res.json(page))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const complete = req.body.entry;
  const date = req.body.date;

  const newEntry = new bibleStudy({
    title,
    complete,
    date,
  });

  newEntry
    .save()
    .then(() => res.json("Bible Journal Added!"))
    .catch((e) => res.status(400).json("Error: " + e));
});
