import React from 'react';
import '@src/features/racetrack-controls/style.scss';
import CreateCar from './create-car';
import UpdateCar from './update-car';
import StartRace from './start-race';
import ResetRace from './reset-race';
import GenerateCars from './generate-cars';

const RaceTrackControls = () => (
  <div className="garage__controls controls">
    <CreateCar />
    <UpdateCar />
    <div className="controls__race">
      <StartRace />
      <ResetRace />
      <GenerateCars />
    </div>
  </div>
);

export default RaceTrackControls;
