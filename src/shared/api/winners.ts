import { apiInstance, UrlPath } from './base';

export enum WinnersValues {
  PAGE_LIMIT = 10,
}

export interface IWinnerData {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnerInfo extends IWinnerData {
  name: string;
  color: string;
}

export const winnersAPI = {
  async getWinners(page: number, sortBy: string, order: string) {
    const response = await apiInstance.get<IWinnerData[]>(
      `${UrlPath.WINNERS}/?_page=${page}&_limit=${WinnersValues.PAGE_LIMIT}&_sort=${sortBy}&_order=${order}`
    );
    return {
      cars: response.data,
      total: response.headers['x-total-count'],
    };
  },
  async getWinner(id: number) {
    const response = await apiInstance.get<IWinnerData>(`${UrlPath.WINNERS}/${id}`);
    return response.data;
  },
  async updateWinner(id: number, wins: number, time: number) {
    const response = await apiInstance.put<IWinnerData>(`${UrlPath.WINNERS}/${id}`, { wins, time });
    return response.data;
  },
  async createWinner(id: number, wins: number, time: number) {
    const response = await apiInstance.post<IWinnerData>(`${UrlPath.WINNERS}/${id}`, { id, wins, time });
    return response.data;
  },
  async deleteWinner(id: number) {
    const response = await apiInstance.delete<IWinnerData>(`${UrlPath.WINNERS}/${id}`);
    if (response.status === 404) throw Error('Invalid ID');
    return response.data;
  },
};
