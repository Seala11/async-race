import React from 'react';
import Button from '@src/shared/components/button';
import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';
import { fetchCreateCar, selectCreatedCar, setCreatedCarColor, setCreatedCarName } from '@src/pages/garage/garageSlice';

type Props = {
  pageNumber: number;
};

const CreateCar = ({ pageNumber }: Props) => {
  const createdCar = useAppSelector(selectCreatedCar);
  const dispatch = useAppDispatch();

  const createCar = async () => {
    dispatch(fetchCreateCar(createdCar.name || 'New Car', createdCar.color || '#000000', pageNumber));
  };

  const changeCarName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCreatedCarName(event.target.value));
  };

  const changeCarColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCreatedCarColor(event.target.value));
  };

  return (
    <form className="controls__create">
      <input
        type="text"
        maxLength={25}
        value={createdCar.name}
        placeholder="Car Name"
        onChange={(e) => changeCarName(e)}
        className="controls__input"
      />
      <input type="color" value={createdCar.color} onChange={(e) => changeCarColor(e)} className="controls__input" />
      <Button text="Create car" handler={createCar} classes="button__create" />
    </form>
  );
};

export default CreateCar;
