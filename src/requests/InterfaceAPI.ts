export enum UrlPath {
  base = 'https://async-race-sever.herokuapp.com',
  garage = 'garage',
  winners = 'winners',
  engine = 'engine',
}

export enum GaragePageLimit {
  parameter = '_limit',
  value = 7,
}

export enum GaragePageNumber {
  parameter = '_page',
  totalCarsHeader = 'X-Total-Count',
}

export interface ICarData {
  name: string;
  color: string;
  id: number;
}

export enum GenerateCars {
  number = 100,
}

export interface IWinnersData {
  id: number;
  wins: number;
  time: number;
}

export enum WinnersPageLimit {
  parameter = '_limit',
  value = 10,
}

export enum WinnersPageNumber {
  parameter = '_page',
  totalCarsHeader = 'X-Total-Count',
}

export enum WinnerSortParam {
  wins = 'wins',
  time = 'time',
}

export enum WinnerSortOrder {
  ascending = 'ASC',
  descending = 'DESC',
}

export interface IWinnersInfo extends IWinnersData {
  name: string;
  color: string;
}

export enum EngineStatus {
  start = 'started',
  stop = 'stopped',
  drive = 'drive',
}

export interface IEngine {
  velocity: number;
  distance: number;
}

export interface IEngineDrive {
  success: boolean;
}
