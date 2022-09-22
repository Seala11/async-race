import React from 'react';
import { useAppDispatch } from '@src/app/store/hooks';
import { setPageNumber } from '@src/pages/winners/winnersSlice';
import { WinnersValues } from '@src/shared/api/winners';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

type Props = {
  winnersPage: number;
  winnersNumber: number;
};

const WinnersPagination = (props: Props) => {
  const { winnersNumber, winnersPage } = props;
  const dispatch = useAppDispatch();
  const nextPageExist = winnersNumber - winnersPage * WinnersValues.PAGE_LIMIT > 0;

  const showNextPage = () => {
    if (nextPageExist) dispatch(setPageNumber(winnersPage + 1));
  };

  const showPrevPage = () => {
    if (winnersPage !== 1) dispatch(setPageNumber(winnersPage - 1));
  };

  return (
    <div className="winners__wrapper">
      <button type="button" onClick={showPrevPage} className="pagination__button" disabled={winnersPage === 1}>
        <AiOutlineArrowLeft className="pagination__icon" fill="#fff" />
      </button>
      <button type="button" onClick={showNextPage} className="pagination__button" disabled={!nextPageExist}>
        <AiOutlineArrowRight className="pagination__icon" fill="#fff" />
      </button>
    </div>
  );
};

export default WinnersPagination;
