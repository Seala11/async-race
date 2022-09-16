import { ICreatedCar } from '@src/pages/garage/IGarageProps';

export interface ICreateProps extends ICreatedCar {
  updateRaceTrack: () => void;
}
