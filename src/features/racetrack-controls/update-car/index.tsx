import React from 'react';
import Button from '@src/shared/components/button';
import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';
import {
  fetchUpdateCar,
  selectSelectedCar,
  setSelectedCarColor,
  setSelectedCarName,
} from '@src/pages/garage/garageSlice';

type Props = {
  pageNumber: number;
};

const UpdateCar = ({ pageNumber }: Props) => {
  const selectedCar = useAppSelector(selectSelectedCar);
  const dispatch = useAppDispatch();

  const changeCarName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedCarName(event.target.value));
  };

  const changeCarColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedCarColor(event.target.value));
  };

  const updateCar = async () => {
    if (selectedCar.id === 0) return;
    dispatch(fetchUpdateCar(selectedCar.name || 'New Car', selectedCar.color || '#000000', selectedCar.id, pageNumber));
  };

  return (
    <form className="controls__update">
      <input
        type="text"
        maxLength={25}
        value={selectedCar.name}
        placeholder="Car Name"
        onChange={(e) => changeCarName(e)}
        disabled={selectedCar.id === 0}
        className="controls__input"
      />
      <input
        type="color"
        value={selectedCar.color || '#000000'}
        onChange={(e) => changeCarColor(e)}
        disabled={selectedCar.id === 0}
        className="controls__input"
      />
      <Button text="Edit car" handler={updateCar} disabled={selectedCar.id === 0} classes="button__edit" />
    </form>
  );
};

export default UpdateCar;
