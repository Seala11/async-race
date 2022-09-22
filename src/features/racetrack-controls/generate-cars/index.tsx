import React from 'react';
import Button from '@src/shared/components/button';
import { useAppDispatch, useAppSelector } from '@src/app/store/hooks';
import { fetchGenerateCars, selectPageNumber } from '@src/pages/garage/garageSlice';

const GenerateCars = () => {
  const dispatch = useAppDispatch();
  const currPage = useAppSelector(selectPageNumber);

  const generateCars = async () => {
    dispatch(fetchGenerateCars(currPage));
  };

  return <Button text="Generate Cars" handler={generateCars} classes="button__generate" />;
};

export default GenerateCars;
