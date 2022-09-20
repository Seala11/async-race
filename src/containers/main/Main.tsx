import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Garage from '@src/pages/garage';
import Winners from '@src/pages/winners';

const Main = () => {
  // ?? this might be refactored
  // useEffect(() => {
  //   // if (raceStatus === RaceStatusVal.end || raceStatus === RaceStatusVal.initial) {
  //   //   setRaceWinner({ ...raceWinner, showWinMessage: false });
  //   // }
  // }, [raceStatus]);

  return (
    <Routes>
      <Route path="/" element={<Garage />} />
      <Route path="/winners" element={<Winners />} />
    </Routes>
  );
};

export default Main;
