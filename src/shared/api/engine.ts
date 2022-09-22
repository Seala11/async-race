import { apiInstance, UrlPath } from './base';

export enum EngineStatus {
  START = 'started',
  STOP = 'stopped',
  DRIVE = 'drive',
}

export interface IEngine {
  velocity: number;
  distance: number;
}

export interface IEngineDrive {
  success: boolean;
}

export const engineAPI = {
  async drive(id: number) {
    return apiInstance
      .patch<boolean>(`${UrlPath.ENGINE}/?id=${id}&status=${EngineStatus.DRIVE}`)
      .then((response) => response.data)
      .catch((err) => {
        if (err.response?.status === 500) {
          console.error('car engine has broken down due to overheating');
          return false;
        }
        throw new Error(err);
      });
  },
  async start(id: number) {
    return apiInstance
      .patch<IEngine>(`${UrlPath.ENGINE}/?id=${id}&status=${EngineStatus.START}`)
      .then((response) => response.data)
      .catch((err) => {
        throw new Error(err);
      });
  },
  async stop(id: number) {
    return apiInstance
      .patch<IEngine>(`${UrlPath.ENGINE}/?id=${id}&status=${EngineStatus.STOP}`)
      .then((response) => response.data)
      .catch((err) => {
        throw new Error(err);
      });
  },
};
