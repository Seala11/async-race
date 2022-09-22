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
    return apiInstance
      .get<IWinnerData>(`${UrlPath.WINNERS}/${id}`)
      .then((response) => response.data)
      .catch((err) => {
        if (err.response?.status === 404) {
          console.error('no such winner exists');
          return null;
        }
        throw new Error(err);
      });
  },
  async updateWinner(id: number, wins: number, time: number) {
    const response = await apiInstance.put<IWinnerData>(`${UrlPath.WINNERS}/${id}`, { wins, time });
    return response.data;
  },
  async createWinner(id: number, wins: number, time: number) {
    return apiInstance
      .post<IWinnerData>(`${UrlPath.WINNERS}`, { id, wins, time })
      .then((response) => response.data)
      .catch((err) => {
        if (err.response?.status === 500) {
          console.error('such winner already exists');
          return null;
        }
        throw new Error(err);
      });
  },
  async deleteWinner(id: number) {
    return apiInstance
      .delete<IWinnerData>(`${UrlPath.WINNERS}/${id}`)
      .then((response) => response.data)
      .catch((err) => {
        if (err.response?.status === 404) {
          console.error('Invalid ID');
          return null;
        }
        throw new Error(err);
      });
  },
};
