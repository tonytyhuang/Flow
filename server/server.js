const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// setup for express

const app = express();

// choose between local and
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});

// setup mongoose

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// setup routes

const apiRouter = require("./routes/weather");
app.use("/api", apiRouter);

const exerciseRouter = require("./routes/exercise");
app.use("/exercise", exerciseRouter);

const bibleStudyRouter = require("./routes/bibleStudy");
app.use("/bibleEntry", bibleStudyRouter);

const highlightRouter = require("./routes/highlight");
app.use("/highlight", highlightRouter);
