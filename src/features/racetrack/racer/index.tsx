import React, { useEffect, useState, useContext, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';
import { RaceStatus, selectRaceStatus, selectSelectedCar } from '@src/pages/garage/garageSlice';

import GarageContext from '@src/provider/garage/GarageContext';
import Image from '@src/shared/components/image';
import Button from '@src/shared/components/button';
import '@src/features/racetrack/racer/style.scss';
import startEngineAPI from '@src/requests/startEngineAPI';
import { EngineStatus, IEngine } from '@src/requests/InterfaceAPI';

import driveEngineAPI from '@src/requests/driveEngineAPI';
import { GarageProvType } from '@src/provider/garage/IProviderGarageProps';

import { ICarData } from '@src/shared/api/cars';
import { selectRaceWinner, setRaceWinner } from '@src/pages/winners/winnersSlice';

import RacerInfo from '../racerInfo';

enum CarCSS {
  initialPosition = 98,
  animationName = 'drive',
}

type Props = {
  carData: ICarData;
  pageNumber: number;
};

const Racer = ({ carData, pageNumber }: Props) => {
  const dispatch = useAppDispatch();
  const raceStatus = useAppSelector(selectRaceStatus);
  const selectedCar = useAppSelector(selectSelectedCar);
  const raceWinner = useAppSelector(selectRaceWinner);

  const garageValue = useContext(GarageContext);
  const { animationStatus, setAnimationStatus } = garageValue;

  const image = useRef<HTMLDivElement>(null);
  const [isDriving, setIsDriving] = useState(false);
  const [animation, setAnimation] = useState({
    time: '',
    name: '',
    active: false,
    mode: '',
    left: `${animationStatus.find((car) => carData.id === car.id)?.left}px`,
  });

  const getCarPosition = () => {
    return animationStatus.find((car) => carData.id === car.id);
  };

  const updateProviderAnimation = (isActive: boolean) => {
    const currLeft = image.current?.offsetLeft;
    if (currLeft) {
      setAnimationStatus({
        type: GarageProvType.delete,
        id: carData.id,
        car: { id: 0, left: 0, active: false },
      });
      setAnimationStatus({
        type: GarageProvType.add,
        id: carData.id,
        car: { id: carData.id, left: isActive ? currLeft - CarCSS.initialPosition : 0, active: isActive },
      });
    }
  };

  const createProviderAnimation = (isActive: boolean) => {
    const currLeft = image.current?.offsetLeft;
    if (currLeft) {
      setAnimationStatus({
        type: GarageProvType.add,
        id: carData.id,
        car: { id: carData.id, left: isActive ? currLeft - CarCSS.initialPosition : 0, active: isActive },
      });
    }
  };

  const drive = async () => {
    if (isDriving) {
      const { success } = await driveEngineAPI(carData.id);
      if (!success) {
        // console.log('broken car: ', carData.name);
        const brokenPosition = image.current?.offsetLeft;
        if (!brokenPosition) return;
        setAnimation({
          ...animation,
          time: '',
          name: '',
          active: true,
          mode: '',
          left: `${brokenPosition - CarCSS.initialPosition}px`,
        });
        const carExist = getCarPosition();
        if (carExist) updateProviderAnimation(true);
        if (!carExist) createProviderAnimation(true);
        setIsDriving(!isDriving);
      }
    }
  };

  useEffect(() => {
    drive();
  }, [isDriving]);

  const startAnimation = async () => {
    await startEngineAPI(carData.id, EngineStatus.start).then(({ distance, velocity }: IEngine) => {
      const timeMS = parseInt((distance / velocity).toString(), 10);
      setAnimation({
        ...animation,
        time: `${timeMS}ms`,
        name: `${CarCSS.animationName}`,
        active: true,
        mode: 'forwards',
        left: '0',
      });
      setIsDriving(!isDriving);
    });
  };

  const stopAnimation = async () => {
    await startEngineAPI(carData.id, EngineStatus.stop);
    setAnimation({ ...animation, left: '0', name: '', active: false });
    const carExist = getCarPosition();
    if (carExist) updateProviderAnimation(false);
    if (!carExist) createProviderAnimation(false);
  };

  const resetPosition = () => {
    setAnimation({ ...animation, left: '0', name: '' });
    startAnimation();
  };

  const animationEnd = () => {
    if (!raceWinner.winnerId && raceStatus === RaceStatus.START && animation.name === CarCSS.animationName)
      dispatch(
        setRaceWinner({
          winnerId: carData.id,
          winnerTime: animation.time,
          winnerName: carData.name,
        })
      );
    const carExist = getCarPosition();
    if (carExist) updateProviderAnimation(true);
    if (!carExist) createProviderAnimation(true);
  };

  useEffect(() => {
    const providerPosition = getCarPosition();
    switch (raceStatus) {
      case RaceStatus.START:
        if (animation.left !== '0') {
          resetPosition();
        } else {
          startAnimation();
        }
        break;

      case RaceStatus.INIT:
        if (providerPosition && providerPosition?.active === true) {
          setAnimation({
            ...animation,
            name: '',
            active: true,
            left: `${providerPosition?.left}`,
          });
        }
        break;

      case RaceStatus.END:
        stopAnimation();
        break;

      case RaceStatus.PAUSE:
        setAnimation({
          ...animation,
          left: `${providerPosition?.left}px`,
          active: providerPosition?.active || false,
        });
      // no default
    }
  }, [raceStatus]);

  return (
    <li className={`track__item ${selectedCar.id === carData.id ? 'track__item--selected' : ''}`}>
      <RacerInfo carData={carData} selectedCar={selectedCar} pageNumber={pageNumber} />
      <div className="track__race">
        <Button text="start" disabled={animation.active} handler={startAnimation} classes="start" />
        <Button text="stop" disabled={!animation.active} handler={stopAnimation} classes="stop" />
        <div
          className="track__animation"
          ref={image}
          style={{
            left: animation.left,
            animationDuration: animation.time,
            animationName: animation.name,
            animationFillMode: animation.mode,
            animationTimingFunction: 'linear',
          }}
          onAnimationEnd={animationEnd}
        >
          <Image color={carData.color} />
        </div>
      </div>
    </li>
  );
};

export default Racer;
