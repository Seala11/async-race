import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Garage = lazy(() => import('./garage'));
const Winners = lazy(() => import('./winners'));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Garage />} />
      <Route path="/winners" element={<Winners />} />
    </Routes>
  );
};

export default Routing;
