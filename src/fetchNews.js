import { API_KEY_NEWS, BASE_URL, API_V2 } from "./api/urlapi";

const getSuspender = (promise) => {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending": 
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  }

  return { read };
};

export const fetchNewsHeadlines = ({ country, category, delay }) => {
  const url = `${BASE_URL}${API_V2}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY_NEWS}`
  const promise = fetch(url).then((response) => response.json())

  return getSuspender(promise);
};
