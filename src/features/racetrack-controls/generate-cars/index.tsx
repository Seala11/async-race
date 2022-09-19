import React from 'react';
import Button from '@src/components/button/Button';
import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';
import { fetchGenerateCars, selectPageNumber } from '@src/app/store/garageSlice';

const GenerateCars = () => {
  const dispatch = useAppDispatch();
  const currPage = useAppSelector(selectPageNumber);

  const generateCars = async () => {
    dispatch(fetchGenerateCars(currPage));
  };

  return <Button text="Generate Cars" handler={generateCars} classes="button--controls" />;
};

export default GenerateCars;
