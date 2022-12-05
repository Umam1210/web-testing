import axios from 'axios';

export const Server = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const SocketServer = axios.create({
  baseURL: 'http://localhost:8082',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});
