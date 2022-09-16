import React from 'react';
import { ICounterProps } from '@src/pages/winners/counter/ICounterProps';

const Counter: React.FC<ICounterProps> = ({ winnersNumber, winnersPage }) => {
  return (
    <div className="winners__header">
      <h2>Winners ({winnersNumber})</h2>
      <h3>Page # {winnersPage}</h3>
    </div>
  );
};

export default Counter;
