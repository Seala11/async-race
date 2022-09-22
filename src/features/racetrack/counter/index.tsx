import React from 'react';
import '@src/features/racetrack/counter/style.scss';

import { useAppSelector } from '@src/app/store/hooks';
import { selectTotalPages } from '@src/pages/garage/garageSlice';
import RacetrackPagination from '../pagination';

type Props = {
  pageNumber: number;
  carsNumber: number;
};

const RacetrackCounter = ({ pageNumber, carsNumber }: Props) => {
  const totalPages = useAppSelector(selectTotalPages);
  return (
    <div className="garage__header">
      <h2>Cars: {carsNumber}</h2>
      <div className="header__pagination">
        <h3>
          Page: {pageNumber} / {totalPages}
        </h3>
        <RacetrackPagination />
      </div>
    </div>
  );
};

export default RacetrackCounter;
