import axios from "axios";

export const getWeather = async () => {
  const resp = await axios.get("http://localhost:5000/api/get");
  return resp;
};
