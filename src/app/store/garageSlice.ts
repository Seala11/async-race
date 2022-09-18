import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { carsAPI, ICarData } from '@src/shared/api/cars';
import type { RootState, AppDispatch } from '.';

interface GarageState {
  cars: ICarData[];
  totalCars: number;
}

const initialState: GarageState = {
  cars: [],
  totalCars: 0,
};

export const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {
    setCars: (state, action: PayloadAction<ICarData[]>) => {
      state.cars = action.payload;
    },
    setTotalCars: (state, action: PayloadAction<number>) => {
      state.totalCars = action.payload;
    },
  },
});

export const { setCars, setTotalCars } = garageSlice.actions;

export const fetchCurrentPageCars = (page: number) => async (dispatch: AppDispatch) => {
  const data = await carsAPI.getCars(page);
  dispatch(setCars(data.cars));
  dispatch(setTotalCars(+data.total));
};

export const selectCurrentCars = (state: RootState) => state.garage.cars;

export default garageSlice.reducer;
