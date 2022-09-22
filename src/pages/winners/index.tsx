import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';

import { selectLoading } from '@src/app/appSlice';
import {
  fetchGetWinners,
  selectPageNumber,
  selectTableSort,
  selectTotalWinners,
  selectWinnersCars,
  WinnerSortParam,
} from '@src/pages/winners/winnersSlice';

import WinnersCounter from '@src/features/winners-table/counter';
import WinnersTable from '@src/features/winners-table';
import Preloader from '@src/shared/components/preloader';

const Winners = () => {
  const dispatch = useAppDispatch();
  const winnersCars = useAppSelector(selectWinnersCars);
  const winnersPage = useAppSelector(selectPageNumber);
  const winnersNumber = useAppSelector(selectTotalWinners);
  const tableSort = useAppSelector(selectTableSort);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    const currOrder = tableSort.sort === WinnerSortParam.WINS ? tableSort.winsOrder : tableSort.timeOrder;
    dispatch(fetchGetWinners(winnersPage, tableSort.sort, currOrder));
  }, [tableSort.sort, tableSort.timeOrder, tableSort.winsOrder, winnersPage]);

  return (
    <main className="winners">
      {loading && <Preloader />}
      <WinnersCounter winnersNumber={winnersNumber} winnersPage={winnersPage} />
      <WinnersTable winnersCars={winnersCars} winnersPage={winnersPage} winnersTable={tableSort} />
    </main>
  );
};

export default Winners;
