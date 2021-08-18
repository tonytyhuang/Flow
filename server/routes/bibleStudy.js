const router = require("express").Router();
let bibleStudy = require("../models/bibleStudy.model.js");

router.route("/").get((req, res) => {
  bibleStudy
    .find()
    .then((page) => res.json(page))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  console.log(req);
  const title = req.body.title;
  const entry = req.body.entry;
  const date = req.body.date;

  const newEntry = new bibleStudy({
    title,
    entry,
    date,
  });

  newEntry
    .save()
    .then(() => res.json("Bible Journal Added!"))
    .catch((e) => res.status(400).json("Error: " + e));
});

router.route("/get").get((req, res) => {
  var date = new Date();
  const endDate = new Date(
    new Date().setUTCHours(23, 59, 59, 999)
  ).toISOString();
  bibleStudy
    .find({
      date: {
        $gte: new Date(date.getFullYear(), date.getMonth(), date.getDay()),
        $lt: endDate,
      },
    })
    .then((page) => res.json(page))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
