import React from 'react';
import Button from '@src/components/button/Button';
import { IUpdateProps } from '@src/pages/garage/controls/update/IUpdateProps';
import updateCarAPI from '@src/requests/updateCarAPI';

const Update: React.FC<IUpdateProps> = ({ selectedCar, setSelectedCar, updateRaceTrack }) => {
  const changeCarName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCar({ ...selectedCar, name: event.target.value });
  };

  const changeCarColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCar({ ...selectedCar, color: event.target.value });
  };

  const updateCar = async () => {
    if (selectedCar.id === 0) return;
    await updateCarAPI(selectedCar.name, selectedCar.color, selectedCar.id);
    await updateRaceTrack();
  };

  return (
    <form className="controls__update">
      <input
        type="text"
        maxLength={25}
        value={selectedCar.name}
        placeholder="Car Name"
        onChange={(e) => changeCarName(e)}
      />
      <input type="color" value={selectedCar.color || '#000000'} onChange={(e) => changeCarColor(e)} />
      <Button text="Update selected car" handler={updateCar} />
      {}
    </form>
  );
};

export default Update;
