import React from 'react';
import Racetrack from '@src/pages/garage/racetrack/Racetrack';
import Pagination from '@src/pages/garage/pagination/Pagination';
import Counter from '@src/pages/garage/counter/Counter';
import '@src/pages/garage/style.scss';
import { IGarageProps } from '@src/pages/garage/IGarageProps';
import WinMessage from '@src/features/winner-popup';
import RaceTrackControls from '@src/features/racetrack-controls';

const Garage: React.FC<IGarageProps> = ({ ...props }) => {
  const { pageNumber, setCarsNumber, carsData, setCarsData, selectedCar, setSelectedCar, raceWinner, setRaceWinner } =
    props;

  return (
    <main className="garage">
      <WinMessage />
      <RaceTrackControls />
      <Counter />
      <Racetrack
        {...{
          carsData,
          setCarsData,
          setCarsNumber,
          pageNumber,
          setSelectedCar,
          selectedCar,
          raceWinner,
          setRaceWinner,
        }}
      />
      <Pagination />
    </main>
  );
};

export default Garage;
