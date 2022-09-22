import React from 'react';
import Button from '@src/shared/components/button';
import { useAppSelector } from '@src/app/store/hooks';
import { clearRacersAnimation, RaceStatus, selectRaceStatus, setRaceStatus } from '@src/pages/garage/garageSlice';
import { useDispatch } from 'react-redux';
import { resetRaceWinner } from '@src/pages/winners/winnersSlice';

const ResetRace = () => {
  const dispatch = useDispatch();
  const raceStatus = useAppSelector(selectRaceStatus);

  const reset = async () => {
    dispatch(setRaceStatus(RaceStatus.END));
    dispatch(clearRacersAnimation());
    dispatch(resetRaceWinner());
  };

  return (
    <Button
      disabled={raceStatus === RaceStatus.END || raceStatus === RaceStatus.INIT}
      text="Reset"
      handler={reset}
      classes="button__race"
    />
  );
};

export default ResetRace;
