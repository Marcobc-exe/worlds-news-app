import { API_KEY_NEWS, BASE_URL, API_V2 } from "../urlapi";

export const getHeadlinesByCategory = async ({ country, category, delay }) => {
  const url = `${BASE_URL}${API_V2}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY_NEWS}`;

  const response = await fetch(url).then((response) => response.json());
  return response;
};

export const getHeadlines = async ({ country, delay }) => {
  const url = `${BASE_URL}${API_V2}/top-headlines?country=${country}&apiKey=${API_KEY_NEWS}`;

  const response = await fetch(url).then((response) => response.json());
  return response;
};
