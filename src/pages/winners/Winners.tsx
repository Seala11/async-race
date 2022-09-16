import React, { useContext, useEffect, useState } from 'react';
import Counter from '@src/pages/winners/counter/Counter';
import Pagination from '@src/pages/winners/pagination/Pagination';
import { IWinnersProps } from '@src/pages/winners/IWinnerProps';
import Table from '@src/pages/winners/table/Table';
import AppContext from '@src/provider/AppContext';
import getWinnersAPI from '@src/requests/getWinnersAPI';
import getCarAPI from '@src/requests/getCarAPI';
import { IWinnersData, IWinnersInfo, WinnerSortParam, ICarData } from '@src/requests/InterfaceAPI';

const Winners: React.FC<IWinnersProps> = ({ winnersPage, setWinnersPage, setWinnersNumber, winnersNumber }) => {
  const providerValue = useContext(AppContext);
  const { winnerSort, winnerWinsOrder, winnerTimeOrder } = providerValue;

  const [winnerCars, setWinnerCars] = useState<IWinnersData[]>([]);
  const [winnersInfo, setWinnerInfo] = useState<IWinnersInfo[]>([]);

  const getWinners = async () => {
    const currOrder = winnerSort === WinnerSortParam.wins ? winnerWinsOrder : winnerTimeOrder;
    const { serverWinnersData, serverWinnersNumber } = await getWinnersAPI(winnersPage, winnerSort, currOrder);
    setWinnerCars(serverWinnersData);
    setWinnersNumber(serverWinnersNumber);
    return { serverWinnersData };
  };

  const getWinnersInfo = async () => {
    const dataPromises = winnerCars.map(async (winner) => {
      const carData: ICarData = await getCarAPI(winner.id);
      const winnerData: IWinnersInfo = Object.assign(winner, carData);
      return winnerData;
    });

    const info = await Promise.all(dataPromises);
    setWinnerInfo(info);
  };

  useEffect(() => {
    getWinnersInfo();
  }, [winnerCars]);

  useEffect(() => {
    getWinners();
  }, [winnersPage, winnerWinsOrder, winnerTimeOrder]);

  return (
    <main className="winners">
      <Counter {...{ winnersNumber, winnersPage }} />
      <Table {...{ winnersInfo, winnersPage }} />
      <Pagination {...{ winnersNumber, winnersPage, setWinnersPage }} />
    </main>
  );
};

export default Winners;
