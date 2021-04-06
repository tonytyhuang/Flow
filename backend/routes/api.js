const router = require("express").Router();
import axios from "axios";

router.route("/get").get(async (req, res) => {
  try {
    return await axios.get(
      `api.openweathermap.org/data/2.5/weather?q=6091104&appid=${process.env.OPEN_WEATHER_KEY}}`
    );
  } catch (err) {
    return err;
  }
});
