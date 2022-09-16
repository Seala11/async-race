import React, { useContext } from 'react';
import LinkItem from '@src/components/linkItem/LinkItem';
import '@src/containers/header/linkList/style.scss';
import AppContext from '@src/provider/AppContext';
import Pages from '@src/containers/header/IHeaderProps';
import RaceStatusVal from '@src/pages/garage/controls/race/IRaceProps';

const LinkList = () => {
  const providerValue = useContext(AppContext);
  const { setCurrPage, setRaceStatus, raceStatus } = providerValue;

  const switchGarage = () => {
    if (raceStatus === RaceStatusVal.end) setRaceStatus(RaceStatusVal.initial);
    if (raceStatus === RaceStatusVal.start) setRaceStatus(RaceStatusVal.pause);
    setCurrPage(Pages.garage);
  };

  const switchWinners = () => {
    if (raceStatus === RaceStatusVal.start) setRaceStatus(RaceStatusVal.pause);
    if (raceStatus === RaceStatusVal.end) setRaceStatus(RaceStatusVal.initial);
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
