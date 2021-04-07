import axios from "axios";

export const getWeather = async () => {
  const resp = await axios.get("http://localhost:5000/api/get");
  console.log(resp);
  return resp.data;
};
