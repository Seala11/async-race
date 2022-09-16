import { ISelectedCar } from '@src/pages/garage/IGarageProps';

export interface IUpdateProps extends ISelectedCar {
  updateRaceTrack: () => void;
}
