import { IWinnersData, UrlPath } from '@src/requests/InterfaceAPI';

const getWinnerAPI = async (id: number) => {
  try {
    const url = `${UrlPath.base}/${UrlPath.winners}/${id}`;
    const response = await fetch(url);

    const { status } = response;
    let data: IWinnersData | undefined | null;

    if (status === 200) data = await response.json();
    if (status === 404) data = null;

    return data;
  } catch (err) {
    throw new Error();
  }
};

export default getWinnerAPI;
