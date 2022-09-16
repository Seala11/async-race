import React, { useContext } from 'react';
import Button from '@src/components/button/Button';
import { IPaginationProps } from '@src/pages/garage/pagination/IPaginationProps';
import getCarsAPI from '@src/requests/getCarsAPI';
import { GaragePageLimit } from '@src/requests/InterfaceAPI';
import AppContext from '@src/provider/AppContext';
import RaceStatusVal from '@src/pages/garage/controls/race/IRaceProps';
import GarageContext from '@src/provider/garage/GarageContext';

const Pagination: React.FC<IPaginationProps> = ({ pageNumber, setPageNumber, carsNumber, setCarsData }) => {
  const providerValue = useContext(AppContext);
  const { setRaceStatus } = providerValue;

  const garageValue = useContext(GarageContext);
  const { setAnimationStatus } = garageValue;

  const updatePage = async (currPage: number) => {
    const { serverCarsData } = await getCarsAPI(currPage);
    setCarsData(serverCarsData);
    setAnimationStatus({ type: 'clear', id: 0, car: { id: 0, left: 0, active: false } });
    setRaceStatus(RaceStatusVal.initial);
  };

  const showNextPage = async () => {
    const nextPageExist = carsNumber - pageNumber * GaragePageLimit.value > 0;
    if (nextPageExist) {
      setPageNumber((oldValue) => {
        updatePage(oldValue + 1);
        return oldValue + 1;
      });
    }
  };

  const showPrevPage = async () => {
    if (pageNumber !== 1) {
      setPageNumber((oldValue) => {
        updatePage(oldValue - 1);
        return oldValue - 1;
      });
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
