import React, { useEffect } from 'react';

import Racetrack from '@src/features/racetrack';
import WinMessage from '@src/features/winner-popup';
import RacetrackControls from '@src/features/racetrack-controls';
import RacetrackCounter from '@src/features/racetrack/counter';
import Preloader from '@src/shared/components/preloader';

import { selectLoading } from '@src/app/appSlice';
import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';
import { fetchCurrentPageCars, selectCurrentCars, selectPageNumber, selectTotalCars } from './garageSlice';

const Garage = () => {
  const dispatch = useAppDispatch();
  const carsData = useAppSelector(selectCurrentCars);
  const pageNumber = useAppSelector(selectPageNumber);
  const carsNumber = useAppSelector(selectTotalCars);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {}, [carsData, pageNumber]);

  useEffect(() => {
    dispatch(fetchCurrentPageCars(pageNumber));
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <WinMessage />
      <RacetrackControls pageNumber={pageNumber} />
      <RacetrackCounter pageNumber={pageNumber} carsNumber={carsNumber} />
      <Racetrack carsData={carsData} pageNumber={pageNumber} />
    </>
  );
};

export default Garage;
