import React from 'react';
import { IWinnerInfo } from '@src/shared/api/winners';
import { TableSortType } from '@src/pages/winners/winnersSlice';
import '@src/features/winners-table/style.scss';
import TableHead from './table-head';
import Body from './table-body';

type Props = {
  winnersPage: number;
  winnersCars: IWinnerInfo[];
  winnersTable: TableSortType;
};

const WinnersTable = ({ winnersCars, winnersPage, winnersTable }: Props) => {
  return (
    <table className="table">
      <TableHead winnersTable={winnersTable} />
      <Body winnersCars={winnersCars} winnersPage={winnersPage} />
    </table>
  );
};

export default WinnersTable;
