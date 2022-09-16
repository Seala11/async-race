import React, { useContext } from 'react';
import TableHead from '@src/components/tableHead/TableHead';
import TableRow from '@src/components/tableRow/TableRow';
import TableHeader from '@src/components/tableHeader/TableHeader';
import { WinnerSortParam, WinnerSortOrder } from '@src/requests/InterfaceAPI';
import AppContext from '@src/provider/AppContext';

const Head: React.FC = () => {
  const providerValue = useContext(AppContext);
  const { setWinnerSort, winnerWinsOrder, setWinnerWinsOrder, winnerTimeOrder, setWinnerTimeOrder } = providerValue;

  const sortWins = () => {
    setWinnerSort(WinnerSortParam.wins);
    setWinnerWinsOrder(
      winnerWinsOrder === WinnerSortOrder.ascending ? WinnerSortOrder.descending : WinnerSortOrder.ascending
    );
  };

  const sortTime = () => {
    setWinnerSort(WinnerSortParam.time);
    setWinnerTimeOrder(
      winnerTimeOrder === WinnerSortOrder.ascending ? WinnerSortOrder.descending : WinnerSortOrder.ascending
    );
  };

  return (
    <TableHead>
      <TableRow>
        <TableHeader text="Number" />
        <TableHeader text="Car" />
        <TableHeader text="Name" />
        <TableHeader
          text="Wins"
          handler={sortWins}
          classes={`table__sort ${
            winnerWinsOrder === WinnerSortOrder.ascending ? 'table__sort--asc' : 'table__sort--desc'
          }`}
        />
        <TableHeader
          text="Time"
          handler={sortTime}
          classes={`table__sort ${
            winnerTimeOrder === WinnerSortOrder.ascending ? 'table__sort--asc' : 'table__sort--desc'
          }`}
        />
      </TableRow>
    </TableHead>
  );
};

export default Head;
