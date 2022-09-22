import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { removeLoading, setLoading } from '@src/app/appSlice';

import { carsAPI, GarageValues, ICarData } from '@src/shared/api/cars';
import { winnersAPI } from '@src/shared/api/winners';
import getRandomName from '@src/shared/helpers/getRandomName';
import getRandomColor from '@src/shared/helpers/getRandomColor';

import type { RootState, AppDispatch } from '../../app/store';

export type SelectedCar = {
  id: number;
  color: string;
  name: string;
};

type CreatedCar = {
  color: string;
  name: string;
};

export type RacerAnimationType = {
  id: number;
  position: number;
  active: boolean;
};

export enum RaceStatus {
  INIT = 'initial',
  START = 'start',
  END = 'end',
  PAUSE = 'pause',
}

interface GarageState {
  cars: ICarData[];
  totalCars: number;
  pageNumber: number;
  totalPages: number;
  selectedCar: SelectedCar;
  createdCar: CreatedCar;
  raceStatus: string;
  racersAnimation: RacerAnimationType[];
}

const initialState: GarageState = {
  cars: [],
  totalCars: 0,
  pageNumber: 1,
  totalPages: 1,
  selectedCar: { id: 0, color: '#000000', name: '' },
  createdCar: { color: '#000000', name: '' },
  raceStatus: RaceStatus.INIT,
  racersAnimation: [],
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
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
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
    addRacerAnimation: (state, action: PayloadAction<RacerAnimationType>) => {
      state.racersAnimation = [...state.racersAnimation, action.payload];
    },
    updateRacerAnimation: (state, action: PayloadAction<RacerAnimationType>) => {
      const newState = state.racersAnimation.filter((item) => item.id !== action.payload.id);
      state.racersAnimation = [...newState, action.payload];
    },
    clearRacersAnimation: (state) => {
      state.racersAnimation = [];
    },
  },
});

export const {
  setCars,
  setTotalCars,
  updateTotalCars,
  setPageNumber,
  setTotalPages,
  setCreatedCarColor,
  setCreatedCarName,
  setSelectedCar,
  removeSelectedCar,
  setSelectedCarName,
  setSelectedCarColor,
  setRaceStatus,
  addRacerAnimation,
  updateRacerAnimation,
  clearRacersAnimation,
} = garageSlice.actions;

export const fetchCurrentPageCars = (page: number) => async (dispatch: AppDispatch) => {
  dispatch(setLoading());
  try {
    const data = await carsAPI.getCars(page);
    const totalPages = Math.ceil(+data.total / GarageValues.PAGE_LIMIT);
    dispatch(setTotalPages(totalPages));
    dispatch(setCars(data.cars));
    dispatch(setTotalCars(+data.total));
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(removeLoading());
  }
};

export const fetchCreateCar = (name: string, color: string, page: number) => async (dispatch: AppDispatch) => {
  await carsAPI.createCar(name, color);
  dispatch(fetchCurrentPageCars(page));
};

export const fetchUpdateCar =
  (name: string, color: string, id: number, page: number) => async (dispatch: AppDispatch) => {
    await carsAPI.updateCar(name, color, id);
    dispatch(removeSelectedCar());
    dispatch(fetchCurrentPageCars(page));
  };

export const fetchDeleteCar = (id: number, page: number) => async (dispatch: AppDispatch) => {
  await carsAPI.deleteCar(id);
  dispatch(fetchCurrentPageCars(page));

  const winnerCar = await winnersAPI.getWinner(id);
  if (winnerCar) await winnersAPI.deleteWinner(id);
};

export const fetchGenerateCars = (page: number) => async (dispatch: AppDispatch) => {
  dispatch(setLoading());
  try {
    const carsPromises: Promise<ICarData[]>[] = Array.from(Array(GarageValues.GENERATE_CARS_NUMBER)).map(() =>
      carsAPI.createCar(getRandomName(), getRandomColor())
    );
    await Promise.all(carsPromises);
    dispatch(fetchCurrentPageCars(page));
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(removeLoading());
  }
};

export const selectCurrentCars = (state: RootState) => state.garage.cars;
export const selectTotalCars = (state: RootState) => state.garage.totalCars;
export const selectPageNumber = (state: RootState) => state.garage.pageNumber;
export const selectTotalPages = (state: RootState) => state.garage.totalPages;
export const selectCreatedCar = (state: RootState) => state.garage.createdCar;
export const selectSelectedCar = (state: RootState) => state.garage.selectedCar;
export const selectRaceStatus = (state: RootState) => state.garage.raceStatus;
export const selectRacesAnimation = (state: RootState) => state.garage.racersAnimation;

export default garageSlice.reducer;
