import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://web-journey.herokuapp.com/api/v1/'
});
