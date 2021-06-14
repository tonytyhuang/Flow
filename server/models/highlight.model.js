const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const highlightSchema = new Schema(
  {
    highlight: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const highlight = mongoose.model("highlight", highlightSchema);

module.exports = highlight;
