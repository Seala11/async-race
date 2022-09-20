import React from 'react';
import Button from '@src/shared/components/button';
import { ICarData } from '@src/shared/api/cars';
import { fetchDeleteCar, removeSelectedCar, SelectedCar, setSelectedCar } from '@src/pages/garage/garageSlice';
import { useAppDispatch } from '@src/app/store/hooks';

type Props = {
  carData: ICarData;
  selectedCar: SelectedCar;
  pageNumber: number;
};

const RacerInfo = ({ carData, selectedCar, pageNumber }: Props) => {
  const dispatch = useAppDispatch();

  const deleteRacer = async () => {
    if (selectedCar.id === carData.id) dispatch(removeSelectedCar());
    dispatch(fetchDeleteCar(carData.id, pageNumber));
  };

  const selectCar = () => {
    const carAlreadySelected = selectedCar.id === carData.id;
    return carAlreadySelected
      ? dispatch(removeSelectedCar())
      : dispatch(setSelectedCar({ id: carData.id, color: carData.color, name: carData.name }));
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
