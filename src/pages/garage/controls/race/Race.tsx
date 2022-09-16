import React, { useContext } from 'react';
import Button from '@src/components/button/Button';
import AppContext from '@src/provider/AppContext';
import RaceStatusVal from './IRaceProps';

const Race: React.FC = () => {
  const providerValue = useContext(AppContext);
  const { raceStatus, setRaceStatus } = providerValue;

  const start = async () => {
    setRaceStatus(RaceStatusVal.start);
  };

  return (
    <Button
      disabled={raceStatus === RaceStatusVal.start || raceStatus === RaceStatusVal.pause}
      text="Race"
      handler={start}
      classes="button--controls"
    />
  );
};

export default Race;
