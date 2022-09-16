import { ICarData } from '@src/requests/InterfaceAPI';

interface ICarsDataView {
  carsData: ICarData[];
  setCarsData: React.Dispatch<React.SetStateAction<ICarData[]>>;
}

interface ICarsNumberView {
  carsNumber: number;
  setCarsNumber: React.Dispatch<React.SetStateAction<number>>;
}

export interface IPagesNumber {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

type TSelectedCar = {
  id: number;
  color: string;
  name: string;
};

export interface ISelectedCar {
  selectedCar: TSelectedCar;
  setSelectedCar: React.Dispatch<React.SetStateAction<TSelectedCar>>;
}

type TCreatedCar = {
  color: string;
  name: string;
};

export interface ICreatedCar {
  createdCar: TCreatedCar;
  setCreatedCar: React.Dispatch<React.SetStateAction<TCreatedCar>>;
}

export type TRaceWinners = {
  showWinMessage: boolean;
  winnerId: number;
  winnerTime: string;
  winnerName: string;
};

export interface IRaceWinners {
  raceWinner: TRaceWinners;
  setRaceWinner: React.Dispatch<React.SetStateAction<TRaceWinners>>;
}

export interface IGarageProps
  extends ICarsDataView,
    ICarsNumberView,
    IPagesNumber,
    ISelectedCar,
    ICreatedCar,
    IRaceWinners {}
