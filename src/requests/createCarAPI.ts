import { ICarData, UrlPath } from '@src/requests/InterfaceAPI';

const createCarAPI = async (name: string, color: string) => {
  try {
    const url = `${UrlPath.base}/${UrlPath.garage}`;
    const newCar = {
      name,
      color,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCar),
    });

    const serverCarsData: ICarData[] = await response.json();

    return serverCarsData;
  } catch (error) {
    throw new Error();
  }
};

export default createCarAPI;
