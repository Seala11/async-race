import React from 'react';
import Button from '@src/components/button/Button';
import { IPaginationProps } from '@src/pages/winners/pagination/IPaginationProps';
import { WinnersPageLimit } from '@src/requests/InterfaceAPI';

const Pagination: React.FC<IPaginationProps> = ({ winnersNumber, winnersPage, setWinnersPage }) => {
  const showNextPage = () => {
    const nextPageExist = winnersNumber - winnersPage * WinnersPageLimit.value > 0;
    if (nextPageExist) {
      setWinnersPage((oldValue) => oldValue + 1);
    }
  };

  const showPrevPage = () => {
    if (winnersPage !== 1) {
      setWinnersPage((oldValue) => oldValue - 1);
    }
  };

  return (
    <div className="garage__pagination">
      <Button text="prev" handler={showPrevPage} />
      <Button text="next" handler={showNextPage} />
    </div>
  );
};

export default Pagination;
