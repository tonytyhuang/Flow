import axios from "axios";

export const getHighlight = async () => {
  const resp = axios.get("http://localhost:5000/highlight/get");
  return (await resp).data;
};

export const getExercise = async () => {
  const resp = axios.get("http://localhost:5000/exercise/get");
  return (await resp).data;
};

export const getBibleStudy = async () => {
  const resp = axios.get("http://localhost:5000/bibleEntry/get");
  return (await resp).data;
};
