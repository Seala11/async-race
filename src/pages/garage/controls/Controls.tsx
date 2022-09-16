import React from 'react';
import Create from '@src/pages/garage/controls/create/Create';
import Generate from '@src/pages/garage/controls/generate/Generate';
import Update from '@src/pages/garage/controls/update/Update';
import Race from '@src/pages/garage/controls/race/Race';
import Reset from '@src/pages/garage/controls/reset/Reset';
import { IControlProps } from '@src/pages/garage/controls/IControlsProps';
import '@src/pages/garage/controls/style.scss';
import getCarsAPI from '@src/requests/getCarsAPI';

const Controls: React.FC<IControlProps> = ({ ...props }) => {
  const {
    setCarsData,
    setCarsNumber,
    pageNumber,
    selectedCar,
    setSelectedCar,
    createdCar,
    setCreatedCar,
    raceWinner,
    setRaceWinner,
  } = props;

  const updateRaceTrack = async () => {
    const { serverCarsData, serverCarsNumber } = await getCarsAPI(pageNumber);
    setCarsNumber(serverCarsNumber);
    setCarsData(serverCarsData);
  };

  return (
    <div className="garage__controls controls">
      <Create {...{ updateRaceTrack, createdCar, setCreatedCar }} />
      <Update {...{ selectedCar, setSelectedCar, updateRaceTrack }} />
      <div className="controls__race">
        <Race />
        <Reset {...{ raceWinner, setRaceWinner }} />
        <Generate {...{ updateRaceTrack }} />
      </div>
    </div>
  );
};

export default Controls;
