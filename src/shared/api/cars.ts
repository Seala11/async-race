import { apiInstance, UrlPath } from './base';

export enum GaragePageLimit {
  PARAMETER = '_limit',
  VALUE = 7,
}

export interface ICarData {
  name: string;
  color: string;
  id: number;
}

export const carsAPI = {
  getCars(page: number, limit = GaragePageLimit.VALUE) {
    return apiInstance.get<ICarData[]>(`${UrlPath.GARAGE}/?_page=${page}&_limit=${limit}`).then((response) => {
      return {
        cars: response.data,
        total: response.headers['x-total-count'],
      };
    });
  },
};
