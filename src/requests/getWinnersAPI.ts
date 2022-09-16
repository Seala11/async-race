import { IWinnersData, UrlPath, WinnersPageNumber, WinnersPageLimit } from '@src/requests/InterfaceAPI';

const getWinnersAPI = async (page?: number, sortBy?: string, order?: string) => {
  try {
    let url = `${UrlPath.base}/${UrlPath.winners}`;
    if (page)
      url = `${UrlPath.base}/${UrlPath.winners}/?_page=${page}&_limit=${WinnersPageLimit.value}&_sort=${sortBy}&_order=${order}`;

    const response = await fetch(url);
    const serverWinnersData: IWinnersData[] = await response.json();
    const serverWinnersNumber = Number(response.headers.get(WinnersPageNumber.totalCarsHeader));

    return {
      serverWinnersData,
      serverWinnersNumber,
    };
  } catch (error) {
    throw new Error();
  }
};

export default getWinnersAPI;
