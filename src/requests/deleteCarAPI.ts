import { UrlPath } from '@src/requests/InterfaceAPI';

const deleteCarAPI = async (id: number) => {
  try {
    const url = `${UrlPath.base}/${UrlPath.garage}/${id}`;

    const response = await fetch(url, {
      method: 'DELETE',
    });

    const { status } = response;
    let data;

    if (status === 200) data = await response.json();
    if (status === 404) throw Error('Invalid ID');

    return data;
  } catch (error) {
    throw new Error();
  }
};

export default deleteCarAPI;
