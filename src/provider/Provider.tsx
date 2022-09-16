import React, { useState } from 'react';
import { IProviderProps } from '@src/provider/IProviderProps';
import AppContext from '@src/provider/AppContext';

const Provider: React.FC<IProviderProps> = ({ children }) => {
  const [currPage, setCurrPage] = useState('');
  const [winnerSort, setWinnerSort] = useState('wins');
  const [winnerWinsOrder, setWinnerWinsOrder] = useState('ASC');
  const [winnerTimeOrder, setWinnerTimeOrder] = useState('ASC');
  const [raceStatus, setRaceStatus] = useState('initial');

  const providerValue = React.useMemo(
    () => ({
      currPage,
      setCurrPage,
      winnerSort,
      setWinnerSort,
      winnerWinsOrder,
      setWinnerWinsOrder,
      winnerTimeOrder,
      setWinnerTimeOrder,
      raceStatus,
      setRaceStatus,
    }),
    [currPage, winnerSort, winnerWinsOrder, winnerTimeOrder, raceStatus]
  );

  return <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>;
};

export default Provider;
