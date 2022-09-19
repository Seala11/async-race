import React, { useEffect } from 'react';
import Racer from '@src/pages/garage/racer/Racer';
import '@src/pages/garage/racetrack/style.scss';
import { IRacetrackProps } from '@src/pages/garage/racetrack/IRacetrackProps';
import { useAppSelector } from '@src/app/store/hooks';
import { selectCurrentCars } from '@src/app/store/garageSlice';

const Racetrack: React.FC<IRacetrackProps> = ({ ...props }) => {
  const { setCarsData, setCarsNumber, pageNumber, setSelectedCar, selectedCar, raceWinner, setRaceWinner } = props;

  const carsData = useAppSelector(selectCurrentCars);

  useEffect(() => {
    console.log('update');
  }, [carsData]);

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
