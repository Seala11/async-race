import React from 'react';

import '@src/features/racetrack/style.scss';
import { ICarData } from '@src/shared/api/cars';

import Racer from '@src/features/racetrack/racer';

type Props = {
  carsData: ICarData[];
  pageNumber: number;
};

const Racetrack = ({ carsData, pageNumber }: Props) => {
  return (
    <ul className="garage__track track">
      {carsData.map((carData) => (
        <Racer
          key={carData.id}
          {...{
            carsData,
            carData,
            pageNumber,
          }}
        />
      ))}
    </ul>
  );
};

export default Racetrack;
