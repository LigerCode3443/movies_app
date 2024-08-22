import axios from "axios";

export const moviesApi = axios.create({
  baseURL: "https://movies-api-xvp1.onrender.com/api/movies",
});
