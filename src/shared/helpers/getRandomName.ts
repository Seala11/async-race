import carBrands from '@src/shared/data/carBrands';
import carModels from '@src/shared/data/carModels';
import getRandomNumber from './getRandomNumber';

const getRandomName = () => {
  const randomBrand = carBrands[getRandomNumber(0, carBrands.length)];
  const randomModel = carModels[getRandomNumber(0, carModels.length)];
  return `${randomBrand} ${randomModel}`;
};

export default getRandomName;
