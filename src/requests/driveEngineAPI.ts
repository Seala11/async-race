import { UrlPath, EngineStatus, IEngineDrive } from '@src/requests/InterfaceAPI';

const driveEngineAPI = async (id: number) => {
  try {
    const url = `${UrlPath.base}/${UrlPath.engine}/?id=${id}&status=${EngineStatus.drive}`;
    const response = await fetch(url, {
      method: 'PATCH',
    });

    if (response.status === 500 || response.status === 404 || response.status === 429) return { success: false };
    const { success }: IEngineDrive = await response.json();

    return { success };
  } catch (error) {
    throw new Error();
  }
};

export default driveEngineAPI;
