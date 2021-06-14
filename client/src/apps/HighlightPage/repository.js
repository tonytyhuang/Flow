import axios from "axios";

export const postHighlight = async (highlight) => {
  const request = highlight;
  const resp = axios.post("http://localhost:5000/highlight/add", request);
  return (await resp).data;
};
