import { ICarData } from '@src/requests/InterfaceAPI';
import { ISelectedCar, IRaceWinners } from '@src/pages/garage/IGarageProps';

export interface IRacetrackProps extends ISelectedCar, IRaceWinners {
  carsData: ICarData[];
  setCarsData: React.Dispatch<React.SetStateAction<ICarData[]>>;
  setCarsNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
  // setWinnersNumber: React.Dispatch<React.SetStateAction<number>>;
}
