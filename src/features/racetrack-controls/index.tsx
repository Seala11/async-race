import React from 'react';
import '@src/features/racetrack-controls/style.scss';
import CreateCar from './create-car';
import UpdateCar from './update-car';
import StartRace from './start-race';
import ResetRace from './reset-race';
import GenerateCars from './generate-cars';

type Props = {
  pageNumber: number;
};

const RacetrackControls = ({ pageNumber }: Props) => (
  <div className="garage__controls controls">
    <CreateCar pageNumber={pageNumber} />
    <UpdateCar pageNumber={pageNumber} />
    <div className="controls__race">
      <StartRace />
      <ResetRace />
      <GenerateCars />
    </div>
  </div>
);

export default RacetrackControls;
