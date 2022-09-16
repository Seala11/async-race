import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Garage from '@src/pages/garage/Garage';
import Winners from '@src/pages/winners/Winners';
import { ICarData } from '@src/requests/InterfaceAPI';
import getCarsAPI from '@src/requests/getCarsAPI';
import AppContext from '@src/provider/AppContext';
import RaceStatusVal from '@src/pages/garage/controls/race/IRaceProps';
import getWinnerAPI from '@src/requests/getWinnerAPI';
import createWinnersAPI from '@src/requests/createWinnersAPI';
import updateWinnersAPI from '@src/requests/updateWinnersAPI';

const Main: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [carsNumber, setCarsNumber] = useState(0);
  const [carsData, setCarsData] = useState<ICarData[]>([]);
  const [winnersNumber, setWinnersNumber] = useState(0);
  const [winnersPage, setWinnersPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState({ id: 0, color: '#000000', name: '' });
  const [createdCar, setCreatedCar] = useState({ color: '#000000', name: '' });
  const [raceWinner, setRaceWinner] = useState({
    showWinMessage: false,
    winnerId: 0,
    winnerTime: '',
    winnerName: '',
  });

  const providerValue = useContext(AppContext);
  const { raceStatus } = providerValue;

  const getCars = async () => {
    const { serverCarsData, serverCarsNumber } = await getCarsAPI(pageNumber);
    setCarsNumber(serverCarsNumber);
    setCarsData(serverCarsData);
  };

  const createWinner = async (id: number, wins: number, time: number) => {
    await createWinnersAPI(id, wins, time);
    setWinnersNumber((oldValue) => oldValue + 1);
  };

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

  useEffect(() => {
    if (raceWinner.showWinMessage === true) {
      const timeSec = Number(raceWinner.winnerTime.split('ms')[0]) / 1000;
      updateWinnersTable(raceWinner.winnerId, 1, +timeSec.toFixed(2));
    }
  }, [raceWinner.showWinMessage]);

  useEffect(() => {
    getCars();
  }, [carsNumber]);

  useEffect(() => {
    if (raceStatus === RaceStatusVal.end || raceStatus === RaceStatusVal.initial) {
      setRaceWinner({ ...raceWinner, showWinMessage: false });
    }
  }, [raceStatus]);

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
