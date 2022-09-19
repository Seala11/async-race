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

// ---

export enum GaragePageLimit {
  PARAMETER = '_limit',
  VALUE = 7,
}

export enum WinnersPageLimit {
  PARAMETER = '_limit',
  VALUE = 10,
}

export enum WinnerSortParam {
  WINS = 'wins',
  TIME = 'time',
}

export enum WinnerSortOrder {
  ASCENDING = 'ASC',
  DESCENDING = 'DESC',
}

export enum EngineStatus {
  START = 'started',
  STOP = 'stopped',
  DRIVE = 'drive',
}

// ----

export interface ICarData {
  name: string;
  color: string;
  id: number;
}

export interface IWinnersData {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnersInfo extends IWinnersData {
  name: string;
  color: string;
}

export interface IEngine {
  velocity: number;
  distance: number;
}

export interface IEngineDrive {
  success: boolean;
}
