import React, { useEffect } from 'react';
import '@src/features/racetrack/counter/style.scss';

type Props = {
  pageNumber: number;
  carsNumber: number;
};

const RacetrackCounter = ({ pageNumber, carsNumber }: Props) => {
  useEffect(() => {
    'update pagination';
  }, [carsNumber, pageNumber]);

  return (
    <div className="garage__header">
      <h2>Garage ({carsNumber})</h2>
      <h3>Page # {pageNumber}</h3>
    </div>
  );
};

export default RacetrackCounter;
