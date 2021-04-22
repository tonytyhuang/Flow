const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exercise: { type: String, required: true },
  complete: { type: Boolean, required: true },
  date: { type: Date, required: true },
});

const exercise = mongoose.model("exercise", exerciseSchema);

module.exports = exercise;
