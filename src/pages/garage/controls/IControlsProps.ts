import { ICarData } from '@src/requests/InterfaceAPI';
import { ISelectedCar, ICreatedCar, IRaceWinners } from '@src/pages/garage/IGarageProps';

export interface IControlProps extends ISelectedCar, ICreatedCar, IRaceWinners {
  setCarsData: React.Dispatch<React.SetStateAction<ICarData[]>>;
  setCarsNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
  carsData: ICarData[];
}
