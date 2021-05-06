const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  title: { type: String, required: true },
  complete: { type: Boolean, required: true },
  date: { type: Date, required: true },
});

const Exercise = mongoose.model("ExerciseSchema", exerciseSchema);

module.exports = Exercise;
