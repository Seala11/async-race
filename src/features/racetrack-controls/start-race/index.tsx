import React from 'react';
import Button from '@src/shared/components/button';
import { useAppSelector } from '@src/app/store/hooks';
import { RaceStatus, selectRaceStatus, setRaceStatus } from '@src/pages/garage/garageSlice';
import { useDispatch } from 'react-redux';

const StartRace = () => {
  const dispatch = useDispatch();
  const raceStatus = useAppSelector(selectRaceStatus);

  const start = async () => {
    dispatch(setRaceStatus(RaceStatus.START));
  };

  return (
    <Button
      disabled={raceStatus === RaceStatus.START || raceStatus === RaceStatus.PAUSE}
      text="Race"
      handler={start}
      classes="button__race"
    />
  );
};

export default StartRace;
