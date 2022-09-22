import React from 'react';
import { ICarData } from '@src/shared/api/cars';
import { fetchDeleteCar, removeSelectedCar, SelectedCar, setSelectedCar } from '@src/pages/garage/garageSlice';
import { useAppDispatch } from '@src/app/store/hooks';

import '@src/features/racetrack/racerInfo/style.scss';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

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
    <div className="track__info info">
      <p key={carData.id} className="info__name">
        {carData.name}
      </p>

      <div className="info__wrapper">
        <div className="info__button-wrapper">
          <button
            className={selectedCar.id === carData.id ? 'info__button info__button--active' : 'info__button'}
            type="button"
            onClick={selectCar}
          >
            <AiFillEdit className="info__icon" fill="#fff" />
            Edit
          </button>
        </div>

        <div className="info__button-wrapper">
          <button className="info__button info__button--delete" type="button" onClick={deleteRacer}>
            <AiFillDelete className="info__icon" fill="#fff" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RacerInfo;
