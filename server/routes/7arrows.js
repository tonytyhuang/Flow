const router = require("express").Router();
let sevenArrows = require("../models/7arrows.model");

router.route("/").get((req, res) => {
  sevenArrows
    .find()
    .then((page) => res.json(page))
    .catch((err) => res.status(400).json("Error: " + err));
});
