import React from 'react';
import '@src/widgets/header/link-list/style.scss';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@src/app/store/hooks';
import { RaceStatus, selectRaceStatus, setRaceStatus } from '@src/pages/garage/garageSlice';
import { PageName } from '@src/app/appSlice';

const LinkList = () => {
  const dispatch = useDispatch();
  const raceStatus = useAppSelector(selectRaceStatus);
  const location = useLocation();

  const switchPage = () => {
    if (raceStatus === RaceStatus.START) dispatch(setRaceStatus(RaceStatus.PAUSE));
    if (raceStatus === RaceStatus.END) dispatch(setRaceStatus(RaceStatus.INIT));
  };

  return (
    <ul className="header__list">
      <li role="menuitem" className="header__item" onClick={switchPage} onKeyDown={switchPage}>
        <Link to="/" className={location.pathname === '/' ? 'header__link header__link--active' : 'header__link'}>
          {PageName.GARAGE}
        </Link>
      </li>
      <li role="menuitem" className="header__item" onClick={switchPage} onKeyDown={switchPage}>
        <Link
          to="/winners"
          className={location.pathname === '/winners' ? 'header__link header__link--active' : 'header__link'}
        >
          {PageName.WINNERS}
        </Link>
      </li>
    </ul>
  );
};

export default LinkList;
