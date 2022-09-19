import React, { useEffect } from 'react';
import '@src/pages/garage/counter/style.scss';
import { useAppSelector } from '@src/app/store/hooks';
import { selectPageNumber, selectTotalCars } from '@src/app/store/garageSlice';

const Counter = () => {
  const carsNumber = useAppSelector(selectTotalCars);
  const pageNumber = useAppSelector(selectPageNumber);

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

export default Counter;
