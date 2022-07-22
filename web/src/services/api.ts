import axios from 'axios';

const api = axios.create({
  baseURL: 'http://154.53.36.47',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
