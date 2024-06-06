import axios from "axios";
// const token = "f54278a35144df305346256c1733a8fa";
// const urlApi = "http://reviews-api.app.jairo3478.c35.integrator.host/reviews";
// const urlMovie = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_API_TOKEN;
const urlApi = import.meta.env.VITE_URL_API;
const urlMovie = import.meta.env.VITE_URL_MOVIEDB;
export const instance = axios.create({
  baseURL:urlMovie,
  headers:{'Authorization' : `Bearer ${token}`}
})
instance.interceptors.request.use((config)=>{
  config.params = config.params|| {};
  config.params['api_key'] = token
  return config
})
export const review = axios.create({
  baseURL:urlApi,
  headers:{
    
  }
})
