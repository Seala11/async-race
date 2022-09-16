import React from 'react';
import Button from '@src/components/button/Button';
import createCarAPI from '@src/requests/createCarAPI';
import { ICreateProps } from '@src/pages/garage/controls/create/ICreateProps';

const Create: React.FC<ICreateProps> = ({ updateRaceTrack, createdCar, setCreatedCar }) => {
  const createCar = async () => {
    await createCarAPI(createdCar.name || 'New Car', createdCar.color || '#000000');
    await updateRaceTrack();
  };

  const changeCarName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreatedCar({ ...createdCar, name: event.target.value });
  };

  const changeCarColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreatedCar({ ...createdCar, color: event.target.value });
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

export default Create;
