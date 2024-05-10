import axios from "axios";
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
