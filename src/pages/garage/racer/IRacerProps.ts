import { ICarData } from '@src/requests/InterfaceAPI';
import { ISelectedCar, IRaceWinners } from '@src/pages/garage/IGarageProps';

export interface IRacerProps extends ISelectedCar, IRaceWinners {
  carData: ICarData;
  setCarsNumber: React.Dispatch<React.SetStateAction<number>>;
}

export enum CarCSS {
  initialPosition = 98,
  animationName = 'drive',
}
