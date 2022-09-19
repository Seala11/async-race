import React, { useContext } from 'react';
import LinkItem from '@src/components/linkItem/LinkItem';
import '@src/containers/header/linkList/style.scss';
import AppContext from '@src/provider/AppContext';
import Pages from '@src/containers/header/IHeaderProps';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@src/app/store/hooks';
import { RaceStatus, selectRaceStatus, setRaceStatus } from '@src/app/store/garageSlice';

const LinkList = () => {
  const dispatch = useDispatch();
  const raceStatus = useAppSelector(selectRaceStatus);

  const providerValue = useContext(AppContext);
  const { setCurrPage } = providerValue;

  const switchGarage = () => {
    if (raceStatus === RaceStatus.END) dispatch(setRaceStatus(RaceStatus.INIT));
    if (raceStatus === RaceStatus.START) dispatch(setRaceStatus(RaceStatus.PAUSE));
    setCurrPage(Pages.garage);
  };

  const switchWinners = () => {
    if (raceStatus === RaceStatus.START) dispatch(setRaceStatus(RaceStatus.PAUSE));
    if (raceStatus === RaceStatus.END) dispatch(setRaceStatus(RaceStatus.INIT));
    setCurrPage(Pages.winners);
  };

  return (
    <ul className="header__list">
      <LinkItem path="/" text={Pages.garage} handler={switchGarage} />
      <LinkItem path="/winners" text={Pages.winners} handler={switchWinners} />
    </ul>
  );
};

export default LinkList;
