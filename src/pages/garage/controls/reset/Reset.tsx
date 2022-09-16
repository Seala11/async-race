import React, { useContext } from 'react';
import Button from '@src/components/button/Button';
import { IRaceWinners } from '@src/pages/garage/IGarageProps';
import AppContext from '@src/provider/AppContext';
import RaceStatusVal from '@src/pages/garage/controls/race/IRaceProps';
import GarageContext from '@src/provider/garage/GarageContext';

const Reset: React.FC<IRaceWinners> = () => {
  const providerValue = useContext(AppContext);
  const { setRaceStatus, raceStatus } = providerValue;

  const garageValue = useContext(GarageContext);
  const { setAnimationStatus } = garageValue;

  const reset = async () => {
    setAnimationStatus({ type: 'clear', id: 0, car: { id: 0, left: 0, active: false } });
    setRaceStatus(RaceStatusVal.end);
  };

  return (
    <Button
      disabled={raceStatus === RaceStatusVal.end || raceStatus === RaceStatusVal.initial}
      text="Reset"
      handler={reset}
      classes="button--controls"
    />
  );
};

export default Reset;
