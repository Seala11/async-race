import { IWinnersData, UrlPath } from '@src/requests/InterfaceAPI';

const createWinnersAPI = async (id: number, wins: number, time: number) => {
  try {
    const url = `${UrlPath.base}/${UrlPath.winners}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
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

export default createWinnersAPI;
