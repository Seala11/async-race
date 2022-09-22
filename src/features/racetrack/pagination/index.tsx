import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

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
  const nextPageExist = carsNumber - pageNumber * GarageValues.PAGE_LIMIT > 0;

  const resetRace = () => {
    dispatch(setRaceStatus(RaceStatus.INIT));
    dispatch(clearRacersAnimation());
    dispatch(resetRaceWinner());
  };

  const showNextPage = async () => {
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
    <div className="garage__pagination pagination">
      <button type="button" onClick={showPrevPage} className="pagination__button" disabled={pageNumber === 1}>
        <AiOutlineArrowLeft className="pagination__icon" fill="#fff" />
      </button>
      <button type="button" onClick={showNextPage} className="pagination__button" disabled={!nextPageExist}>
        <AiOutlineArrowRight className="pagination__icon" fill="#fff" />
      </button>
    </div>
  );
};

export default RacetrackPagination;
