import React from 'react';
import { ICarData, GenerateCars } from '@src/requests/InterfaceAPI';
import createCarAPI from '@src/requests/createCarAPI';
import { IGenerateProps } from '@src/pages/garage/controls/generate/IGenerateProps';
import Button from '@src/components/button/Button';
import getRandomName from '@src/utils/getRandomName';
import getRandomColor from '@src/utils/getRandomColor';

const Generate: React.FC<IGenerateProps> = ({ updateRaceTrack }) => {
  const generateCars = async () => {
    const carsPromises: Promise<ICarData[]>[] = Array.from(Array(GenerateCars.number)).map(() =>
      createCarAPI(getRandomName(), getRandomColor())
    );
    await Promise.all(carsPromises);
    await updateRaceTrack();
  };

  return <Button text="Generate Cars" handler={generateCars} classes="button--controls" />;
};

export default Generate;
