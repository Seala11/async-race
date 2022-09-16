import { ICarData, UrlPath } from '@src/requests/InterfaceAPI';

const updateCarAPI = async (name: string, color: string, id: number) => {
  try {
    const url = `${UrlPath.base}/${UrlPath.garage}/${id}`;
    const newCar = {
      name,
      color,
    };

    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCar),
    });

    const serverCarsData: ICarData[] = await response.json();

    return serverCarsData;
  } catch (error) {
    throw new Error();
  }
};

export default updateCarAPI;
