import { UrlPath, EngineStatus, IEngine } from '@src/requests/InterfaceAPI';

const startEngineAPI = async (id: number, status: EngineStatus) => {
  try {
    const url = `${UrlPath.base}/${UrlPath.engine}/?id=${id}&status=${status}`;
    const response = await fetch(url, {
      method: 'PATCH',
    });
    const { distance, velocity }: IEngine = await response.json();

    return { distance, velocity };
  } catch (error) {
    throw new Error();
  }
};

export default startEngineAPI;
