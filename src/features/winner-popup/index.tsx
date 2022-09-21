import React, { useEffect } from 'react';
import '@src/features/winner-popup/style.scss';
import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';
import { fetchUpdateWinnersTable, selectRaceWinner } from '@src/pages/winners/winnersSlice';
import { RaceStatus, selectRaceStatus } from '@src/pages/garage/garageSlice';

const WinnerPopoup = () => {
  const dispatch = useAppDispatch();
  const raceWinner = useAppSelector(selectRaceWinner);
  const raceStatus = useAppSelector(selectRaceStatus);

  const { winnerId, winnerTime, winnerName } = raceWinner;
  const timeSec = Number(winnerTime.split('ms')[0]) / 1000;

  useEffect(() => {
    if (raceStatus === RaceStatus.PAUSE || raceStatus === RaceStatus.INIT) return;
    if (winnerId) dispatch(fetchUpdateWinnersTable(+winnerId, +timeSec.toFixed(2)));
  }, [winnerId]);

  return (
    <div className={`garage__message ${winnerId ? 'garage__message--show' : 'garage__message--hide'}`}>
      <h1>Winner is: {winnerName}</h1>
      <p>Time: {timeSec.toFixed(2)}</p>
    </div>
  );
};

export default WinnerPopoup;
