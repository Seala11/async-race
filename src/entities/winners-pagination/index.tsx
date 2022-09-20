import React from 'react';
import Button from '@src/components/button/Button';
import { WinnersPageLimit } from '@src/requests/InterfaceAPI';
import { useAppDispatch } from '@src/app/store/hooks';
import { setPageNumber } from '@src/app/store/winnersSlice';

type Props = {
  winnersPage: number;
  winnersNumber: number;
};

const WinnersPagination = (props: Props) => {
  const { winnersNumber, winnersPage } = props;
  const dispatch = useAppDispatch();

  const showNextPage = () => {
    const nextPageExist = winnersNumber - winnersPage * WinnersPageLimit.value > 0;
    if (nextPageExist) dispatch(setPageNumber(winnersPage + 1));
  };

  const showPrevPage = () => {
    if (winnersPage !== 1) dispatch(setPageNumber(winnersPage - 1));
  };

  return (
    <div className="garage__pagination">
      <Button text="prev" handler={showPrevPage} />
      <Button text="next" handler={showNextPage} />
    </div>
  );
};

export default WinnersPagination;
