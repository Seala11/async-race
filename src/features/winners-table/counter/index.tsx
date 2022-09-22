import { useAppSelector } from '@src/app/store/hooks';
import { selectTotalPages } from '@src/pages/winners/winnersSlice';
import React from 'react';
import WinnersPagination from '../pagination';
import '@src/features/winners-table/counter/style.scss';

type Props = {
  winnersNumber: number;
  winnersPage: number;
};

const WinnersCounter = (props: Props) => {
  const { winnersNumber, winnersPage } = props;
  const totalPages = useAppSelector(selectTotalPages);

  return (
    <div className="winners__header">
      <h2>Winners: {winnersNumber}</h2>
      <div className="winners__pagination">
        <h3>
          Page: {winnersPage} / {totalPages}
        </h3>
        <WinnersPagination winnersNumber={winnersNumber} winnersPage={winnersPage} />
      </div>
    </div>
  );
};

export default WinnersCounter;
