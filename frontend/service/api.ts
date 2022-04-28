import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3333`
});

api.interceptors.request.use(config =>  config );

export default api;