import axios from "axios";

export const postBibleEntry = async (bibleEntry) => {
  const request = bibleEntry;
  const resp = axios.post("http://localhost:5000/bibleEntry/add", request);
  return (await resp).data;
};
