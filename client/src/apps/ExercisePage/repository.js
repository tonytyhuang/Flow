import axios from "axios";

export const getWeather = async () => {
  const resp = await axios.get("http://localhost:5000/api/get");
  return resp.data;
};

export const postExercise = async (exercise) => {
  const request = exercise;
  const resp = axios.post("http://localhost:5000/exercise/add", request);
  return (await resp).data;
};
