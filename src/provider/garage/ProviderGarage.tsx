import React, { useReducer, useMemo } from 'react';
import { IProviderGarageProps, GarageProvType, ILeftAnimation } from '@src/provider/garage/IProviderGarageProps';
import GarageContext from './GarageContext';

const ProviderGarage: React.FC<IProviderGarageProps> = ({ children }) => {
  function racerAnimationReducer(state: ILeftAnimation[], action: { type: string; id: number; car: ILeftAnimation }) {
    if (action.type === GarageProvType.add) return [...state, action.car];
    if (action.type === GarageProvType.delete) {
      const newState = state.filter((item) => item.id !== action.id);
      return [...newState];
    }
    if (action.type === GarageProvType.clear) {
      return [];
    }
    if (action.type === GarageProvType.update) {
      const newState = state.map((item) =>
        item.id !== action.id ? { ...item, left: action.car.left, active: action.car.active } : item
      );
      return [...newState];
    }
    return [...state];
  }

  const [animationStatus, setAnimationStatus] = useReducer(racerAnimationReducer, []);

  const garageValue = useMemo(
    () => ({
      animationStatus,
      setAnimationStatus,
    }),
    [animationStatus]
  );

  return <GarageContext.Provider value={garageValue}>{children}</GarageContext.Provider>;
};

export default ProviderGarage;
