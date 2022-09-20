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

  return (
    <main className="garage">
      <WinMessage />
      <RacetrackControls pageNumber={pageNumber} />
      <RacetrackCounter pageNumber={pageNumber} carsNumber={carsNumber} />
      <Racetrack carsData={carsData} pageNumber={pageNumber} />
      <RacetrackPagination />
    </main>
  );
};

export default Garage;
