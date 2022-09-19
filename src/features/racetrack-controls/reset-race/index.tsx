import React, { useContext } from 'react';
import Button from '@src/components/button/Button';
import GarageContext from '@src/provider/garage/GarageContext';
import { useAppSelector } from '@src/app/store/hooks';
import { RaceStatus, selectRaceStatus, setRaceStatus } from '@src/app/store/garageSlice';
import { useDispatch } from 'react-redux';

const ResetRace = () => {
  const dispatch = useDispatch();
  const raceStatus = useAppSelector(selectRaceStatus);

  const garageValue = useContext(GarageContext);
  const { setAnimationStatus } = garageValue;

  const reset = async () => {
    setAnimationStatus({ type: 'clear', id: 0, car: { id: 0, left: 0, active: false } });
    dispatch(setRaceStatus(RaceStatus.END));
  };

  return (
    <Button
      disabled={raceStatus === RaceStatus.END || raceStatus === RaceStatus.INIT}
      text="Reset"
      handler={reset}
      classes="button--controls"
    />
  );
};

export default ResetRace;
