import React, { useEffect } from 'react';

import '@src/pages/garage/style.scss';

import Racetrack from '@src/features/racetrack';
import WinMessage from '@src/features/winner-popup';
import RacetrackControls from '@src/features/racetrack-controls';
import RacetrackCounter from '@src/features/racetrack/counter';
import RacetrackPagination from '@src/features/racetrack/pagination';

import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';
import { fetchCurrentPageCars, selectCurrentCars, selectPageNumber, selectTotalCars } from './garageSlice';

const Garage = () => {
  const dispatch = useAppDispatch();
  const carsData = useAppSelector(selectCurrentCars);
  const pageNumber = useAppSelector(selectPageNumber);
  const carsNumber = useAppSelector(selectTotalCars);

  useEffect(() => {
    console.log('update');
  }, [carsData, pageNumber]);

  useEffect(() => {
    dispatch(fetchCurrentPageCars(pageNumber));
  }, []);

  // // move to garage page
  // useEffect(() => {
  //   if (raceWinner.showWinMessage === true) {
  //     const timeSec = Number(raceWinner.winnerTime.split('ms')[0]) / 1000;
  //     updateWinnersTable(raceWinner.winnerId, 1, +timeSec.toFixed(2));
  //   }
  // }, [raceWinner.showWinMessage]);

  return (
    <main className="garage">
      <WinMessage />
      <RacetrackControls />
      <RacetrackCounter pageNumber={pageNumber} carsNumber={carsNumber} />
      <Racetrack carsData={carsData} pageNumber={pageNumber} />
      <RacetrackPagination />
    </main>
  );
};

export default Garage;

// interface ICarsDataView {
//   carsData: ICarData[];
//   setCarsData: React.Dispatch<React.SetStateAction<ICarData[]>>;
// }

// interface ICarsNumberView {
//   carsNumber: number;
//   setCarsNumber: React.Dispatch<React.SetStateAction<number>>;
// }

// export interface IPagesNumber {
//   pageNumber: number;
//   setPageNumber: React.Dispatch<React.SetStateAction<number>>;
// }

// type TSelectedCar = {
//   id: number;
//   color: string;
//   name: string;
// };

// export interface ISelectedCar {
//   selectedCar: TSelectedCar;
//   setSelectedCar: React.Dispatch<React.SetStateAction<TSelectedCar>>;
// }

// type TCreatedCar = {
//   color: string;
//   name: string;
// };

// export interface ICreatedCar {
//   createdCar: TCreatedCar;
//   setCreatedCar: React.Dispatch<React.SetStateAction<TCreatedCar>>;
// }

// export type TRaceWinners = {
//   showWinMessage: boolean;
//   winnerId: number;
//   winnerTime: string;
//   winnerName: string;
// };

// export interface IRaceWinners {
//   raceWinner: TRaceWinners;
//   setRaceWinner: React.Dispatch<React.SetStateAction<TRaceWinners>>;
// }

// export interface IGarageProps
//   extends ICarsDataView,
//     ICarsNumberView,
//     IPagesNumber,
//     ISelectedCar,
//     ICreatedCar,
//     IRaceWinners {}
