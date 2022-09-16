import React from 'react';
import { ICounterProps } from '@src/pages/garage/counter/ICounterProps';
import '@src/pages/garage/counter/style.scss';

const Counter: React.FC<ICounterProps> = ({ carsNumber, pageNumber }) => {
  return (
    <div className="garage__header">
      <h2>Garage ({carsNumber})</h2>
      <h3>Page # {pageNumber}</h3>
    </div>
  );
};

export default Counter;
