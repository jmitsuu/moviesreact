import axios from "axios";
const token = import.meta.env.VITE_API_TOKEN;
export const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  headers:{'Authorization' : `Bearer ${token}`}
})
instance.interceptors.request.use((config)=>{
  config.params = config.params|| {};
  config.params['api_key'] = token
  return config
})
export const review = axios.create({
  baseURL:"https://reviews-api.com.jairo3478.c35.integrator.host/reviews",
  headers:{
    
  }
})
// https://reviews-api.com.jairo3478.c35.integrator.host/reviews"