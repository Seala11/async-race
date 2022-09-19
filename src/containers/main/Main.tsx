import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Garage from '@src/pages/garage/Garage';
import Winners from '@src/pages/winners/Winners';
import { ICarData } from '@src/requests/InterfaceAPI';
import getCarsAPI from '@src/requests/getCarsAPI';
// import AppContext from '@src/provider/AppContext';
// import RaceStatusVal from '@src/pages/garage/controls/race/IRaceProps';
import getWinnerAPI from '@src/requests/getWinnerAPI';
import createWinnersAPI from '@src/requests/createWinnersAPI';
import updateWinnersAPI from '@src/requests/updateWinnersAPI';
import { useAppDispatch } from '@src/app/store/hooks';
import { fetchCurrentPageCars } from '@src/app/store/garageSlice';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  // move to garageSlice
  const [pageNumber, setPageNumber] = useState(1); // done
  const [carsNumber, setCarsNumber] = useState(0); // totalcars
  const [carsData, setCarsData] = useState<ICarData[]>([]); // cars
  const [selectedCar, setSelectedCar] = useState({ id: 0, color: '#000000', name: '' }); // done
  const [createdCar, setCreatedCar] = useState({ color: '#000000', name: '' }); // done

  // move to winner slice
  const [winnersNumber, setWinnersNumber] = useState(0);
  const [winnersPage, setWinnersPage] = useState(1);
  const [raceWinner, setRaceWinner] = useState({
    showWinMessage: false,
    winnerId: 0,
    winnerTime: '',
    winnerName: '',
  });

  // const providerValue = useContext(AppContext);
  // const { raceStatus } = providerValue;

  // move to wiget - racetrack
  const getCars = async () => {
    dispatch(fetchCurrentPageCars(pageNumber));
    const { serverCarsData, serverCarsNumber } = await getCarsAPI(pageNumber);
    setCarsNumber(serverCarsNumber);
    setCarsData(serverCarsData);
  };

  // move to winner slice
  const createWinner = async (id: number, wins: number, time: number) => {
    await createWinnersAPI(id, wins, time);
    setWinnersNumber((oldValue) => oldValue + 1);
  };

  // move to winner slice
  const updateWinnersTable = async (id: number, wins: number, time: number) => {
    const currWinner = await getWinnerAPI(id);
    if (!currWinner) {
      await createWinner(id, wins, time);
    } else {
      const bestTime = Math.min(currWinner.time, time);
      const totalWins = currWinner.wins + 1;
      await updateWinnersAPI(id, totalWins, bestTime);
    }
  };

  // move to garage page
  useEffect(() => {
    if (raceWinner.showWinMessage === true) {
      const timeSec = Number(raceWinner.winnerTime.split('ms')[0]) / 1000;
      updateWinnersTable(raceWinner.winnerId, 1, +timeSec.toFixed(2));
    }
  }, [raceWinner.showWinMessage]);

  // move to wiget racetrack
  useEffect(() => {
    getCars();
  }, [carsNumber]);

  // ?? this might be refactored
  // useEffect(() => {
  //   // if (raceStatus === RaceStatusVal.end || raceStatus === RaceStatusVal.initial) {
  //   //   setRaceWinner({ ...raceWinner, showWinMessage: false });
  //   // }
  // }, [raceStatus]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Garage
            {...{
              pageNumber,
              setPageNumber,
              carsNumber,
              setCarsNumber,
              carsData,
              setCarsData,
              selectedCar,
              setSelectedCar,
              createdCar,
              setCreatedCar,
              raceWinner,
              setRaceWinner,
            }}
          />
        }
      />
      <Route
        path="/winners"
        element={<Winners {...{ winnersPage, setWinnersPage, raceWinner, setWinnersNumber, winnersNumber }} />}
      />
    </Routes>
  );
};

export default Main;
