import React from 'react';
import '@src/features/winners-table/table-head/style.scss';
import { useAppDispatch } from '@src/app/store/hooks';
import {
  setTableSortParam,
  TableSortType,
  toggleTableTimeOrder,
  toggleTableWinsOrder,
  WinnerSortOrder,
  WinnerSortParam,
} from '@src/pages/winners/winnersSlice';
import TableHeader from '../table-header';

type Props = {
  winnersTable: TableSortType;
};

const TableHead = ({ winnersTable }: Props) => {
  const { winsOrder, timeOrder } = winnersTable;
  const dispatch = useAppDispatch();

  const sortWins = () => {
    dispatch(setTableSortParam(WinnerSortParam.WINS));
    dispatch(toggleTableWinsOrder(winsOrder));
  };

  const sortTime = () => {
    dispatch(setTableSortParam(WinnerSortParam.TIME));
    dispatch(toggleTableTimeOrder(timeOrder));
  };

  return (
    <thead className="table__head">
      <tr className="table__row">
        <TableHeader text="Number" />
        <TableHeader text="Car" />
        <TableHeader text="Name" />
        <TableHeader
          text="Wins"
          handler={sortWins}
          classes={`table__sort ${winsOrder === WinnerSortOrder.ASC ? 'table__sort--asc' : 'table__sort--desc'}`}
        />
        <TableHeader
          text="Time"
          handler={sortTime}
          classes={`table__sort ${timeOrder === WinnerSortOrder.ASC ? 'table__sort--asc' : 'table__sort--desc'}`}
        />
      </tr>
    </thead>
  );
};

export default TableHead;
