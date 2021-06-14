const router = require("express").Router();
let highlightModel = require("../models/highlight.model.js");

router.route("/").get((req, res) => {
  highlightModel
    .find({
      date: {
        $gte: new Date("2015-07-07T00:00:00.000Z"),
        $lt: new Date("2015-07-08T00:00:00.000Z"),
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
