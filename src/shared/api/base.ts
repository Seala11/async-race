import axios from 'axios';

export enum UrlPath {
  BASE = 'https://async-race-sever.herokuapp.com',
  GARAGE = 'garage',
  WINNERS = 'winners',
  ENGINE = 'engine',
}

export const apiInstance = axios.create({
  baseURL: UrlPath.BASE,
});
