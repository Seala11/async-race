import React from 'react';
import LinkItem from '@src/widgets/header/linkItem';
import '@src/widgets/header/linkList/style.scss';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@src/app/store/hooks';
import { RaceStatus, selectRaceStatus, setRaceStatus } from '@src/pages/garage/garageSlice';
import { PageName } from '@src/app/appSlice';
// import { resetRaceWinner } from '@src/pages/winners/winnersSlice';

const LinkList = () => {
  const dispatch = useDispatch();
  const raceStatus = useAppSelector(selectRaceStatus);

  const switchPage = () => {
    if (raceStatus === RaceStatus.START) dispatch(setRaceStatus(RaceStatus.PAUSE));
    if (raceStatus === RaceStatus.END) dispatch(setRaceStatus(RaceStatus.INIT));
  };

  return (
    <ul className="header__list">
      <LinkItem path="/" text={PageName.GARAGE} handler={switchPage} />
      <LinkItem path="/winners" text={PageName.WINNERS} handler={switchPage} />
    </ul>
  );
};

export default LinkList;
