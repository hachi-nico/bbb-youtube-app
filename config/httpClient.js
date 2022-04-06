import axios from "axios";

export const httpClient = (method, endpoint, headers, body) => {
  if (method == "get") {
    return axios
      .get(endpoint)
      .then((res) => res)
      .catch((err) => err);
  } else if (method == "post") {
    return axios
      .post(endpoint, body, { headers: headers })
      .then((res) => res)
      .catch((err) => err);
  }
};
