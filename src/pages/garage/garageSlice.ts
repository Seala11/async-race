import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { carsAPI, GarageValues, ICarData } from '@src/shared/api/cars';
import getRandomName from '@src/shared/helpers/getRandomName';
import getRandomColor from '@src/shared/helpers/getRandomColor';
import { winnersAPI } from '@src/shared/api/winners';
import type { RootState, AppDispatch } from '../../app/store';

interface GarageState {
  cars: ICarData[];
  totalCars: number;
  pageNumber: number;
  selectedCar: SelectedCar;
  createdCar: CreatedCar;
  raceStatus: string;
}

export type SelectedCar = {
  id: number;
  color: string;
  name: string;
};

type CreatedCar = {
  color: string;
  name: string;
};

export enum RaceStatus {
  INIT = 'initial',
  START = 'start',
  END = 'end',
  PAUSE = 'pause',
}

const initialState: GarageState = {
  cars: [],
  totalCars: 0,
  pageNumber: 1,
  selectedCar: { id: 0, color: '#000000', name: '' },
  createdCar: { color: '#000000', name: '' },
  raceStatus: RaceStatus.INIT,
};

export const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {
    // cars
    setCars: (state, action: PayloadAction<ICarData[]>) => {
      state.cars = action.payload;
    },
    setTotalCars: (state, action: PayloadAction<number>) => {
      state.totalCars = action.payload;
    },
    updateTotalCars: (state) => {
      state.totalCars += 1;
    },

    // page
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },

    // selected car
    setSelectedCar: (state, action: PayloadAction<SelectedCar>) => {
      state.selectedCar = action.payload;
    },
    removeSelectedCar: (state) => {
      state.selectedCar = { id: 0, color: '#000000', name: '' };
    },
    setSelectedCarName: (state, action: PayloadAction<string>) => {
      state.selectedCar = { ...state.selectedCar, name: action.payload };
    },
    setSelectedCarColor: (state, action: PayloadAction<string>) => {
      state.selectedCar = { ...state.selectedCar, color: action.payload };
    },

    // created car
    setCreatedCarName: (state, action: PayloadAction<string>) => {
      state.createdCar = { ...state.createdCar, name: action.payload };
    },
    setCreatedCarColor: (state, action: PayloadAction<string>) => {
      state.createdCar = { ...state.createdCar, color: action.payload };
    },

    // race
    setRaceStatus: (state, action: PayloadAction<RaceStatus>) => {
      state.raceStatus = action.payload;
    },
  },
});

export const {
  setCars,
  setTotalCars,
  updateTotalCars,
  setPageNumber,
  setCreatedCarColor,
  setCreatedCarName,
  setSelectedCar,
  removeSelectedCar,
  setSelectedCarName,
  setSelectedCarColor,
  setRaceStatus,
} = garageSlice.actions;

export const fetchCurrentPageCars = (page: number) => async (dispatch: AppDispatch) => {
  const data = await carsAPI.getCars(page);
  console.log(data);
  dispatch(setCars(data.cars));
  dispatch(setTotalCars(+data.total));
};

export const fetchCreateCar = (name: string, color: string) => async (dispatch: AppDispatch) => {
  const data = await carsAPI.createCar(name, color);
  dispatch(setCars(data));
  dispatch(updateTotalCars());
};

export const fetchUpdateCar = (name: string, color: string, id: number) => async (dispatch: AppDispatch) => {
  const data = await carsAPI.updateCar(name, color, id);
  dispatch(setCars(data));
};

export const fetchDeleteCar = (id: number, page: number) => async (dispatch: AppDispatch) => {
  await carsAPI.deleteCar(id);
  dispatch(fetchCurrentPageCars(page));

  const winnerCar = await winnersAPI.getWinner(id);
  if (winnerCar) await winnersAPI.deleteWinner(id);
};

export const fetchGenerateCars = (page: number) => async (dispatch: AppDispatch) => {
  const carsPromises: Promise<ICarData[]>[] = Array.from(Array(GarageValues.GENERATE_CARS_NUMBER)).map(() =>
    carsAPI.createCar(getRandomName(), getRandomColor())
  );
  await Promise.all(carsPromises);
  dispatch(fetchCurrentPageCars(page));
};

export const selectCurrentCars = (state: RootState) => state.garage.cars;
export const selectTotalCars = (state: RootState) => state.garage.totalCars;
export const selectPageNumber = (state: RootState) => state.garage.pageNumber;
export const selectCreatedCar = (state: RootState) => state.garage.createdCar;
export const selectSelectedCar = (state: RootState) => state.garage.selectedCar;
export const selectRaceStatus = (state: RootState) => state.garage.raceStatus;

export default garageSlice.reducer;
