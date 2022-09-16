import { createContext } from 'react';
import { ILeftAnimation } from '@src/provider/garage/IProviderGarageProps';
import { IGarageContext } from './IGarageContextProps';

const defaultContext = {
  animationStatus: <ILeftAnimation[]>[],
  setAnimationStatus: () => <ILeftAnimation[]>[],
};

const GarageContext = createContext<IGarageContext>(defaultContext);

export default GarageContext;
