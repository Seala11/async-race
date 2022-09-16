import { UrlPath } from '@src/requests/InterfaceAPI';

const deleteWinnerAPI = async (id: number) => {
  try {
    const url = `${UrlPath.base}/${UrlPath.winners}/${id}`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
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

export default deleteWinnerAPI;
