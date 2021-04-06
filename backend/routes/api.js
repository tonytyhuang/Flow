const router = require("express").Router();
const axios = require("axios");

router.get("/get", (req, res) => {
  console.log("hi");
  // axios
  //   .get(
  //     `api.openweathermap.org/data/2.5/weather?q=6091104&appid=${process.env.OPEN_WEATHER_KEY}}`
  //   )
  //   .then((data) =>
  //     res
  //       .status(200)
  //       .send(data)
  //       .catch((err) => res.send(err))
  //   );
  return 41;
});

module.exports = router;
