import axios from "axios";

export const httpClient = (method, endpoint, contentType, body) => {
  if (method == "get") {
    return axios
      .get(endpoint)
      .then((res) => res)
      .catch((err) => err);
  }
};
