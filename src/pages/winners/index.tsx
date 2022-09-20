import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';
import {
  fetchGetWinners,
  selectPageNumber,
  selectTableSort,
  selectTotalWinners,
  selectWinnersCars,
  WinnerSortParam,
} from '@src/app/store/winnersSlice';
import WinnersCounter from '@src/entities/winners-counter';
import WinnersPagination from '@src/entities/winners-pagination';
import WinnersTable from '@src/features/winners-table';

const Winners = () => {
  const dispatch = useAppDispatch();
  const winnersCars = useAppSelector(selectWinnersCars);
  const winnersPage = useAppSelector(selectPageNumber);
  const winnersNumber = useAppSelector(selectTotalWinners);
  const tableSort = useAppSelector(selectTableSort);

  useEffect(() => {
    console.log(tableSort);
    const currOrder = tableSort.sort === WinnerSortParam.WINS ? tableSort.winsOrder : tableSort.timeOrder;
    console.log(winnersPage, tableSort.sort, currOrder);
    dispatch(fetchGetWinners(winnersPage, tableSort.sort, currOrder));
  }, [tableSort.sort, tableSort.timeOrder, tableSort.winsOrder]);

  return (
    <main className="winners">
      <WinnersCounter winnersNumber={winnersNumber} winnersPage={winnersPage} />
      <WinnersTable winnersCars={winnersCars} winnersPage={winnersPage} winnersTable={tableSort} />
      <WinnersPagination winnersNumber={winnersNumber} winnersPage={winnersPage} />
    </main>
  );
};

export default Winners;
