import React from 'react';
import Racer from '@src/pages/garage/racer/Racer';
import '@src/pages/garage/racetrack/style.scss';
import { IRacetrackProps } from '@src/pages/garage/racetrack/IRacetrackProps';

const Racetrack: React.FC<IRacetrackProps> = ({ ...props }) => {
  const { carsData, setCarsData, setCarsNumber, pageNumber, setSelectedCar, selectedCar, raceWinner, setRaceWinner } =
    props;

  return (
    <ul className="garage__track track">
      {carsData.map((carData) => (
        <Racer
          key={carData.id}
          {...{
            carsData,
            carData,
            setCarsData,
            setCarsNumber,
            pageNumber,
            setSelectedCar,
            selectedCar,
            raceWinner,
            setRaceWinner,
          }}
        />
      ))}
    </ul>
  );
};

export default Racetrack;
