import React, { useEffect } from 'react';
import { IWinMessageProps } from '@src/pages/garage/message/IWinMessageProps';
import '@src/pages/garage/message/style.scss';

const WinMessage: React.FC<IWinMessageProps> = ({ raceWinner }) => {
  const { showWinMessage, winnerTime, winnerName } = raceWinner;
  const timeSec = Number(winnerTime.split('ms')[0]) / 1000;

  useEffect(() => {}, [showWinMessage]);
  return (
    <div className={`garage__message ${showWinMessage ? 'garage__message--show' : 'garage__message--hide'}`}>
      <h1>Winner is: {winnerName}</h1>
      <p>Time: {timeSec.toFixed(2)}</p>
    </div>
  );
};

export default WinMessage;
