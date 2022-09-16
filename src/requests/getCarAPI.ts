import { ICarData, UrlPath } from '@src/requests/InterfaceAPI';

const getCarAPI = async (id: number) => {
  try {
    const url = `${UrlPath.base}/${UrlPath.garage}/${id}`;

    const response = await fetch(url);
    const serverCarData: ICarData = await response.json();

    return serverCarData;
  } catch (error) {
    throw new Error();
  }
};

export default getCarAPI;
