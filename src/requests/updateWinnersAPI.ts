import { IWinnersData, UrlPath } from '@src/requests/InterfaceAPI';

const updateWinnersAPI = async (id: number, wins: number, time: number) => {
  try {
    const url = `${UrlPath.base}/${UrlPath.winners}/${id}`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        wins,
        time,
      }),
    });
    const serverWinnerData: IWinnersData = await response.json();

    return serverWinnerData;
  } catch (error) {
    throw new Error();
  }
};

export default updateWinnersAPI;
