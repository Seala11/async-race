import React from 'react';
import Racetrack from '@src/pages/garage/racetrack/Racetrack';
import Pagination from '@src/pages/garage/pagination/Pagination';
import Controls from '@src/pages/garage/controls/Controls';
import Counter from '@src/pages/garage/counter/Counter';
import '@src/pages/garage/style.scss';
import { IGarageProps } from '@src/pages/garage/IGarageProps';
import WinMessage from '@src/pages/garage/message/WinMessage';

const Garage: React.FC<IGarageProps> = ({ ...props }) => {
  const {
    pageNumber,
    setPageNumber,
    carsNumber,
    setCarsNumber,
    carsData,
    setCarsData,
    selectedCar,
    setSelectedCar,
    createdCar,
    setCreatedCar,
    raceWinner,
    setRaceWinner,
  } = props;

  return (
    <main className="garage">
      <Controls
        {...{
          setCarsData,
          setCarsNumber,
          pageNumber,
          selectedCar,
          setSelectedCar,
          createdCar,
          setCreatedCar,
          raceWinner,
          setRaceWinner,
          carsData,
        }}
      />
      <Counter {...{ carsNumber, pageNumber }} />
      <WinMessage {...{ raceWinner, setRaceWinner }} />
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
      <Pagination {...{ pageNumber, setPageNumber, carsNumber, setCarsData }} />
    </main>
  );
};

export default Garage;
