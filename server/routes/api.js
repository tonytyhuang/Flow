const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.get("/get", (req, res) => {
  const locUrl = "http://ip-api.com/json/";
  axios
    .get(locUrl)
    .then((response) => {
      const lon = response.data.lon;
      const lat = response.data.lat;
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily,alerts&units=metric&appid=${process.env.OPEN_WEATHER_KEY}`;
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
    })
    .catch((err) => {
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=43.783&lon=-79.4122&exclude=minutely,daily,alerts&units=metric&appid=${process.env.OPEN_WEATHER_KEY}`;
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
});

module.exports = router;
