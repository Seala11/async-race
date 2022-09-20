import React from 'react';
import LinkItem from '@src/widgets/header/linkItem';
import '@src/widgets/header/linkList/style.scss';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@src/app/store/hooks';
import { RaceStatus, selectRaceStatus, setRaceStatus } from '@src/pages/garage/garageSlice';
import { PageName, setCurrPage } from '@src/app/appSlice';
import { resetRaceWinner } from '@src/pages/winners/winnersSlice';

const LinkList = () => {
  const dispatch = useDispatch();
  const raceStatus = useAppSelector(selectRaceStatus);

  const switchGarage = () => {
    if (raceStatus === RaceStatus.END) dispatch(setRaceStatus(RaceStatus.INIT));
    if (raceStatus === RaceStatus.START) dispatch(setRaceStatus(RaceStatus.PAUSE));
    dispatch(setCurrPage(PageName.GARAGE));
    dispatch(resetRaceWinner());
  };

  const switchWinners = () => {
    if (raceStatus === RaceStatus.START) dispatch(setRaceStatus(RaceStatus.PAUSE));
    if (raceStatus === RaceStatus.END) dispatch(setRaceStatus(RaceStatus.INIT));
    dispatch(setCurrPage(PageName.WINNERS));
    dispatch(resetRaceWinner());
  };

  // ?? this might be refactored
  // useEffect(() => {
  //   // if (raceStatus === RaceStatusVal.end || raceStatus === RaceStatusVal.initial) {
  //   //   setRaceWinner({ ...raceWinner, showWinMessage: false });
  //   // }
  // }, [raceStatus]);

  return (
    <ul className="header__list">
      <LinkItem path="/" text={PageName.GARAGE} handler={switchGarage} />
      <LinkItem path="/winners" text={PageName.WINNERS} handler={switchWinners} />
    </ul>
  );
};

export default LinkList;
