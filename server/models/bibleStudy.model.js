const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bibleStudySchema = new Schema(
  {
    title: { type: String, required: true },
    entry: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const bibleStudy = mongoose.model("bibleStudy", bibleStudySchema);

module.exports = bibleStudy;
