import React, { useContext } from 'react';
import Button from '@src/components/button/Button';
import { GaragePageLimit } from '@src/requests/InterfaceAPI';
import GarageContext from '@src/provider/garage/GarageContext';
import {
  fetchCurrentPageCars,
  RaceStatus,
  selectPageNumber,
  selectTotalCars,
  setPageNumber,
  setRaceStatus,
} from '@src/app/store/garageSlice';
import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const carsNumber = useAppSelector(selectTotalCars);
  const pageNumber = useAppSelector(selectPageNumber);

  const garageValue = useContext(GarageContext);
  const { setAnimationStatus } = garageValue;

  const showNextPage = async () => {
    const nextPageExist = carsNumber - pageNumber * GaragePageLimit.value > 0;
    if (nextPageExist) {
      dispatch(setPageNumber(pageNumber + 1));
      dispatch(fetchCurrentPageCars(pageNumber + 1));
      dispatch(setRaceStatus(RaceStatus.INIT));
      setAnimationStatus({ type: 'clear', id: 0, car: { id: 0, left: 0, active: false } });
      console.log('show next page');
    }
  };

  const showPrevPage = async () => {
    if (pageNumber !== 1) {
      dispatch(setPageNumber(pageNumber - 1));
      dispatch(fetchCurrentPageCars(pageNumber - 1));
      dispatch(setRaceStatus(RaceStatus.INIT));
      setAnimationStatus({ type: 'clear', id: 0, car: { id: 0, left: 0, active: false } });
    }
  };

  return (
    <div className="garage__pagination">
      <Button text="prev" handler={showPrevPage} />
      <Button text="next" handler={showNextPage} />
    </div>
  );
};

export default Pagination;
