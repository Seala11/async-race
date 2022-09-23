import axios from 'axios';

export enum UrlPath {
  BASE = 'https://async-race-seala11.onrender.com',
  GARAGE = 'garage',
  WINNERS = 'winners',
  ENGINE = 'engine',
}

export const apiInstance = axios.create({
  baseURL: UrlPath.BASE,
});
