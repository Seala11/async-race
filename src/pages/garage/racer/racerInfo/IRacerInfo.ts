import { ICarData } from '@src/requests/InterfaceAPI';
import { ISelectedCar } from '@src/pages/garage/IGarageProps';

export interface IRacerInfo extends ISelectedCar {
  carData: ICarData;
  setCarsNumber: React.Dispatch<React.SetStateAction<number>>;
}
