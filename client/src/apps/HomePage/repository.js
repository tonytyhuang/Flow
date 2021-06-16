import axios from "axios";

export const getHighlight = async () => {
  const resp = axios.get("http://localhost:5000/highlight/get");
  return (await resp).data;
};
