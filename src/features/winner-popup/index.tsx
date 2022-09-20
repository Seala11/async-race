import React, { useEffect } from 'react';
import '@src/features/winner-popup/style.scss';
import { useAppSelector } from '@src/app/store/hooks';
import { selectRaceWinner } from '@src/pages/winners/winnersSlice';

const WinnerPopoup = () => {
  const raceWinner = useAppSelector(selectRaceWinner);
  const { winnerId, winnerTime, winnerName } = raceWinner;
  const timeSec = Number(winnerTime.split('ms')[0]) / 1000;

  useEffect(() => {}, [winnerId]);

  return (
    <div className={`garage__message ${winnerId ? 'garage__message--show' : 'garage__message--hide'}`}>
      <h1>Winner is: {winnerName}</h1>
      <p>Time: {timeSec.toFixed(2)}</p>
    </div>
  );
};

export default WinnerPopoup;
