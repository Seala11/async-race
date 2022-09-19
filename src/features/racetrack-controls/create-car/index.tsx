import React from 'react';
import Button from '@src/components/button/Button';
import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';
import { fetchCreateCar, selectCreatedCar, setCreatedCarColor, setCreatedCarName } from '@src/app/store/garageSlice';

const CreateCar = () => {
  const createdCar = useAppSelector(selectCreatedCar);
  const dispatch = useAppDispatch();

  const createCar = async () => {
    dispatch(fetchCreateCar(createdCar.name || 'New Car', createdCar.color || '#000000'));
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
      />
      <input type="color" value={createdCar.color} onChange={(e) => changeCarColor(e)} />
      <Button text="Create new car" handler={createCar} />
    </form>
  );
};

export default CreateCar;
