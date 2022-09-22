import { apiInstance, UrlPath } from './base';

export enum GarageValues {
  PAGE_LIMIT = 7,
  GENERATE_CARS_NUMBER = 10,
}

export interface ICarData {
  name: string;
  color: string;
  id: number;
}

export const carsAPI = {
  async getCars(page: number, limit = GarageValues.PAGE_LIMIT) {
    const response = await apiInstance.get<ICarData[]>(`${UrlPath.GARAGE}/?_page=${page}&_limit=${limit}`);
    return {
      cars: response.data,
      total: response.headers['x-total-count'],
    };
  },
  async getCar(id: number) {
    const response = await apiInstance.get<ICarData>(`${UrlPath.GARAGE}/${id}`);
    return response.data;
  },
  async createCar(name: string, color: string) {
    const response = await apiInstance.post<ICarData[]>(`${UrlPath.GARAGE}`, { name, color });
    return response.data;
  },
  async updateCar(name: string, color: string, id: number) {
    const response = await apiInstance.put<ICarData[]>(`${UrlPath.GARAGE}/${id}`, { name, color });
    return response.data;
  },
  async deleteCar(id: number) {
    const response = await apiInstance.delete<ICarData>(`${UrlPath.GARAGE}/${id}`);
    if (response.status === 404) throw Error('Invalid ID');
    return response.data;
  },
};
