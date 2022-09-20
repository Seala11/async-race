import React from 'react';
import LinkItem from '@src/shared/components/linkItem';
import '@src/containers/header/linkList/style.scss';
import Pages from '@src/containers/header/IHeaderProps';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@src/app/store/hooks';
import { RaceStatus, selectRaceStatus, setRaceStatus } from '@src/pages/garage/garageSlice';

const LinkList = () => {
  const dispatch = useDispatch();
  const raceStatus = useAppSelector(selectRaceStatus);

  const switchGarage = () => {
    if (raceStatus === RaceStatus.END) dispatch(setRaceStatus(RaceStatus.INIT));
    if (raceStatus === RaceStatus.START) dispatch(setRaceStatus(RaceStatus.PAUSE));
    // setCurrPage(Pages.garage);
  };

  const switchWinners = () => {
    if (raceStatus === RaceStatus.START) dispatch(setRaceStatus(RaceStatus.PAUSE));
    if (raceStatus === RaceStatus.END) dispatch(setRaceStatus(RaceStatus.INIT));
    // setCurrPage(Pages.winners);
  };

  return (
    <ul className="header__list">
      <LinkItem path="/" text={Pages.garage} handler={switchGarage} />
      <LinkItem path="/winners" text={Pages.winners} handler={switchWinners} />
    </ul>
  );
};

export default LinkList;
