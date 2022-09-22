import React from 'react';
import '@src/features/racetrack/counter/style.scss';
import RacetrackPagination from '../pagination';

type Props = {
  pageNumber: number;
  carsNumber: number;
};

const RacetrackCounter = ({ pageNumber, carsNumber }: Props) => {
  return (
    <div className="garage__header">
      <h2>Cars: {carsNumber}</h2>
      <div className="header__pagination">
        <h3>Page # {pageNumber}</h3>
        <RacetrackPagination />
      </div>
    </div>
  );
};

export default RacetrackCounter;
