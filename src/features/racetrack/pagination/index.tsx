import React from 'react';
import Button from '@src/shared/components/button';

import {
  clearRacersAnimation,
  fetchCurrentPageCars,
  RaceStatus,
  selectPageNumber,
  selectTotalCars,
  setPageNumber,
  setRaceStatus,
} from '@src/pages/garage/garageSlice';
import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';
import { resetRaceWinner } from '@src/pages/winners/winnersSlice';
import { GarageValues } from '@src/shared/api/cars';

const RacetrackPagination = () => {
  const dispatch = useAppDispatch();
  const carsNumber = useAppSelector(selectTotalCars);
  const pageNumber = useAppSelector(selectPageNumber);

  const resetRace = () => {
    dispatch(setRaceStatus(RaceStatus.INIT));
    dispatch(clearRacersAnimation());
    dispatch(resetRaceWinner());
  };

  const showNextPage = async () => {
    const nextPageExist = carsNumber - pageNumber * GarageValues.PAGE_LIMIT > 0;
    if (nextPageExist) {
      dispatch(setPageNumber(pageNumber + 1));
      dispatch(fetchCurrentPageCars(pageNumber + 1));
      resetRace();
    }
  };

  const showPrevPage = async () => {
    if (pageNumber !== 1) {
      dispatch(setPageNumber(pageNumber - 1));
      dispatch(fetchCurrentPageCars(pageNumber - 1));
      resetRace();
    }
  };

  return (
    <div className="garage__pagination">
      <Button text="prev" handler={showPrevPage} />
      <Button text="next" handler={showNextPage} />
    </div>
  );
};

export default RacetrackPagination;
