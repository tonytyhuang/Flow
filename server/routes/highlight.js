const router = require("express").Router();
let highlightModel = require("../models/highlight.model.js");

router.route("/get").get((req, res) => {
  var date = new Date();
  const endDate = new Date(
    new Date().setUTCHours(23, 59, 59, 999)
  ).toISOString();
  highlightModel
    .find({
      date: {
        $gte: new Date(date.getFullYear(), date.getMonth(), date.getDay()),
        $lt: endDate,
      },
    })
    .then((page) => res.json(page))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  console.log(req);
  const highlight = req.body.highlight;
  const date = req.body.date;

  const newEntry = new highlightModel({
    highlight,
    date,
  });

  newEntry
    .save()
    .then(() => res.json("Highlight Added!"))
    .catch((e) => res.status(400).json("Error: " + e));
});

module.exports = router;
