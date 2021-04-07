const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.get("/get", (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=${process.env.OPEN_WEATHER_KEY}`;
  axios
    .get(url)
    .then((response) => {
      res.status(200);
      res.send(JSON.stringify(response.data));
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});

module.exports = router;
