import React, { useEffect, useState, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';
import {
  addRacerAnimation,
  RaceStatus,
  selectRacesAnimation,
  selectRaceStatus,
  selectSelectedCar,
  updateRacerAnimation,
} from '@src/pages/garage/garageSlice';

import Image from '@src/shared/components/image';
import Button from '@src/shared/components/button';
import { BsFillPlayFill, BsFillStopFill } from 'react-icons/bs';
import '@src/features/racetrack/racer/style.scss';

import { ICarData } from '@src/shared/api/cars';
import { engineAPI, IEngine } from '@src/shared/api/engine';
import { selectRaceWinner, setRaceWinner } from '@src/pages/winners/winnersSlice';

import RacerInfo from '../racerInfo';

enum CarCSS {
  initialPosition = 84,
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
  const animationStatus = useAppSelector(selectRacesAnimation);

  const image = useRef<HTMLDivElement>(null);
  const [isDriving, setIsDriving] = useState(false);
  const [animation, setAnimation] = useState({
    time: '',
    name: '',
    active: false,
    mode: '',
    pos: `${animationStatus.find((car) => carData.id === car.id)?.position}px`,
  });

  const getCarPosition = () => {
    return animationStatus.find((car) => carData.id === car.id);
  };

  const updateCarAnimation = (isActive: boolean) => {
    const currLeft = image.current?.offsetLeft;
    if (currLeft) {
      dispatch(
        updateRacerAnimation({
          id: carData.id,
          position: isActive ? currLeft - CarCSS.initialPosition : 0,
          active: isActive,
        })
      );
    }
  };

  const createCarAnimation = (isActive: boolean) => {
    const currLeft = image.current?.offsetLeft;
    if (currLeft) {
      dispatch(
        addRacerAnimation({
          id: carData.id,
          position: isActive ? currLeft - CarCSS.initialPosition : 0,
          active: isActive,
        })
      );
    }
  };

  const drive = async () => {
    if (isDriving) {
      const success = await engineAPI.drive(carData.id);
      if (!success) {
        const brokenPosition = image.current?.offsetLeft;
        if (!brokenPosition) return;
        setAnimation({
          ...animation,
          time: '',
          name: '',
          active: true,
          mode: '',
          pos: `${brokenPosition - CarCSS.initialPosition}px`,
        });
        const carExist = getCarPosition();
        if (carExist) updateCarAnimation(true);
        if (!carExist) createCarAnimation(true);
        setIsDriving(!isDriving);
      }
    }
  };

  useEffect(() => {
    drive();
  }, [isDriving]);

  const startAnimation = async () => {
    await engineAPI.start(carData.id).then(({ distance, velocity }: IEngine) => {
      const timeMS = parseInt((distance / velocity).toString(), 10);
      setAnimation({
        ...animation,
        time: `${timeMS}ms`,
        name: `${CarCSS.animationName}`,
        active: true,
        mode: 'forwards',
        pos: '0',
      });
      setIsDriving(!isDriving);
    });
  };

  const stopAnimation = async () => {
    await engineAPI.stop(carData.id);
    setAnimation({ ...animation, pos: '0', name: '', active: false });
    const carExist = getCarPosition();
    if (carExist) updateCarAnimation(false);
    if (!carExist) createCarAnimation(false);
  };

  const resetPosition = () => {
    setAnimation({ ...animation, pos: '0', name: '' });
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
    if (carExist) updateCarAnimation(true);
    if (!carExist) createCarAnimation(true);
  };

  useEffect(() => {
    const currPosition = getCarPosition();
    switch (raceStatus) {
      case RaceStatus.START:
        if (animation.pos !== '0') {
          resetPosition();
        } else {
          startAnimation();
        }
        break;

      case RaceStatus.INIT:
        if (currPosition && currPosition?.active === true) {
          setAnimation({
            ...animation,
            name: '',
            active: true,
            pos: `${currPosition?.position}`,
          });
        }
        break;

      case RaceStatus.END:
        stopAnimation();
        break;

      case RaceStatus.PAUSE:
        setAnimation({
          ...animation,
          pos: `${currPosition?.position}px`,
          active: currPosition?.active || false,
        });
      // no default
    }
  }, [raceStatus]);

  return (
    <li className={`track__item ${selectedCar.id === carData.id ? 'track__item--selected' : ''}`}>
      <RacerInfo carData={carData} selectedCar={selectedCar} pageNumber={pageNumber} />
      <div className="track__race">
        <Button
          text=""
          disabled={animation.active}
          handler={startAnimation}
          classes="button__start track__button start"
        >
          <BsFillPlayFill fill="#fff" className="track__start--icon" />
        </Button>

        <Button text="" disabled={!animation.active} handler={stopAnimation} classes="button__start track__button stop">
          <BsFillStopFill fill="#fff" className="track__start--icon" />
        </Button>

        <div
          className="track__animation"
          ref={image}
          style={{
            left: animation.pos,
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
