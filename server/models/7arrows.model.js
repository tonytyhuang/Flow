const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sevenArrowsSchema = new Schema(
  {
    title: { type: String, required: true },
    entry: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const sevenArrows = mongoose.model("sevenArrows", sevenArrowsSchema);

module.exports = sevenArrows;
