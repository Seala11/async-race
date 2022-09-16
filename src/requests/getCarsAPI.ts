import { ICarData, UrlPath, GaragePageNumber, GaragePageLimit } from '@src/requests/InterfaceAPI';

const getCarsAPI = async (page: number, limit = GaragePageLimit.value) => {
  try {
    const url = `${UrlPath.base}/${UrlPath.garage}/?_page=${page}&_limit=${limit}`;

    const response = await fetch(url);
    const serverCarsData: ICarData[] = await response.json();
    const serverCarsNumber = Number(response.headers.get(GaragePageNumber.totalCarsHeader));

    return {
      serverCarsData,
      serverCarsNumber,
    };
  } catch (error) {
    throw new Error();
  }
};

export default getCarsAPI;
