import React from 'react';
import deleteCarAPI from '@src/requests/deleteCarAPI';
import deleteWinnerAPI from '@src/requests/deleteWinnerAPI';
import getWinnersAPI from '@src/requests/getWinnersAPI';
import Button from '@src/shared/components/button';
import { IRacerInfo } from './IRacerInfo';

const RacerInfo: React.FC<IRacerInfo> = ({ ...props }) => {
  const { carData, setCarsNumber, setSelectedCar, selectedCar } = props;

  const deleteRacer = async () => {
    if (selectedCar.id === carData.id) setSelectedCar({ id: 0, color: '#000000', name: '' });

    await deleteCarAPI(carData.id).then(() => setCarsNumber((oldValue) => oldValue - 1));
    const { serverWinnersData } = await getWinnersAPI();
    const isWinnerCar = serverWinnersData.some((winner) => {
      return winner.id === carData.id;
    });
    if (!isWinnerCar) return;
    await deleteWinnerAPI(carData.id);
  };

  const selectCar = () => {
    const carAlreadySelected = selectedCar.id === carData.id;
    return carAlreadySelected
      ? setSelectedCar({ name: '', color: '', id: 0 })
      : setSelectedCar({ name: carData.name, color: carData.color, id: carData.id });
  };

  return (
    <div className="track__info">
      <Button
        text={`${selectedCar.id === carData.id ? 'unselect' : 'select'}`}
        classes="button--info"
        handler={selectCar}
      />
      <Button text="delete" classes="button--info" handler={deleteRacer} />
      <div key={carData.id}>{carData.name}</div>
    </div>
  );
};

export default RacerInfo;
