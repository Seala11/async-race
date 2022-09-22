import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { removeLoading, setLoading } from '@src/app/appSlice';

import { IWinnerInfo, winnersAPI, WinnersValues } from '@src/shared/api/winners';
import { carsAPI, ICarData } from '@src/shared/api/cars';

import type { AppDispatch, RootState } from '../../app/store';

export enum WinnerSortParam {
  WINS = 'wins',
  TIME = 'time',
}

export enum WinnerSortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

type RaceWinnerType = {
  winnerId: number | null;
  winnerTime: string;
  winnerName: string;
};

export type TableSortType = {
  sort: WinnerSortParam;
  winsOrder: WinnerSortOrder;
  timeOrder: WinnerSortOrder;
};

interface WinnersState {
  winners: IWinnerInfo[];
  totalWinners: number;
  pageNumber: number;
  totalPages: number;
  raceWinner: RaceWinnerType;
  tableSort: TableSortType;
}

const initialState: WinnersState = {
  winners: [],
  totalWinners: 0,
  pageNumber: 1,
  totalPages: 1,
  raceWinner: {
    winnerId: null,
    winnerTime: '',
    winnerName: '',
  },
  tableSort: {
    sort: WinnerSortParam.WINS,
    winsOrder: WinnerSortOrder.ASC,
    timeOrder: WinnerSortOrder.ASC,
  },
};

export const winnersSlice = createSlice({
  name: 'winners',
  initialState,
  reducers: {
    setWinners: (state, action: PayloadAction<IWinnerInfo[]>) => {
      state.winners = action.payload;
    },
    setTotalWinners: (state, action: PayloadAction<number>) => {
      state.totalWinners = action.payload;
    },
    addTotalWinners: (state) => {
      state.totalWinners += 1;
    },

    // page
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },

    // race
    setRaceWinner: (state, action: PayloadAction<RaceWinnerType>) => {
      state.raceWinner = action.payload;
    },
    resetRaceWinner: (state) => {
      state.raceWinner = {
        winnerId: null,
        winnerTime: '',
        winnerName: '',
      };
    },

    // table sort
    setTableSortParam: (state, action: PayloadAction<WinnerSortParam>) => {
      state.tableSort = { ...state.tableSort, sort: action.payload };
    },
    toggleTableWinsOrder: (state, action: PayloadAction<WinnerSortOrder>) => {
      const sortOrder = action.payload === WinnerSortOrder.ASC ? WinnerSortOrder.DESC : WinnerSortOrder.ASC;
      state.tableSort = { ...state.tableSort, winsOrder: sortOrder };
    },
    toggleTableTimeOrder: (state, action: PayloadAction<WinnerSortOrder>) => {
      const sortOrder = action.payload === WinnerSortOrder.ASC ? WinnerSortOrder.DESC : WinnerSortOrder.ASC;
      state.tableSort = { ...state.tableSort, timeOrder: sortOrder };
    },
  },
});

export const {
  setWinners,
  setTotalWinners,
  addTotalWinners,
  setPageNumber,
  setTotalPages,
  setRaceWinner,
  setTableSortParam,
  toggleTableWinsOrder,
  toggleTableTimeOrder,
  resetRaceWinner,
} = winnersSlice.actions;

export const fetchGetWinners = (page: number, sortBy: string, order: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading());
  try {
    const { cars, total } = await winnersAPI.getWinners(page, sortBy, order);
    const dataPromises = cars.map(async (winner) => {
      const carData: ICarData = await carsAPI.getCar(winner.id);
      const winnerData: IWinnerInfo = Object.assign(winner, carData);
      return winnerData;
    });

    const info = await Promise.all(dataPromises);
    dispatch(setWinners(info));
    dispatch(setTotalWinners(+total));

    const totalPages = Math.ceil(+total / WinnersValues.PAGE_LIMIT);
    dispatch(setTotalPages(totalPages));
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(removeLoading());
  }
};

export const fetchCreateWinner = (id: number, wins: number, time: number) => async (dispatch: AppDispatch) => {
  await winnersAPI.createWinner(id, wins, time);
  dispatch(addTotalWinners());
};

export const fetchUpdateWinner = (id: number, wins: number, time: number) => async () => {
  await winnersAPI.updateWinner(id, wins, time);
};

export const fetchUpdateWinnersTable = (id: number, time: number) => async (dispatch: AppDispatch) => {
  const currWinner = await winnersAPI.getWinner(id);
  if (!currWinner) {
    dispatch(fetchCreateWinner(id, 1, time));
  } else {
    const bestTime = Math.min(currWinner.time, time);
    const totalWins = currWinner.wins + 1;
    dispatch(fetchUpdateWinner(id, totalWins, bestTime));
  }
};

export const selectWinnersCars = (state: RootState) => state.winners.winners;
export const selectTotalWinners = (state: RootState) => state.winners.totalWinners;
export const selectRaceWinner = (state: RootState) => state.winners.raceWinner;
export const selectPageNumber = (state: RootState) => state.winners.pageNumber;
export const selectTotalPages = (state: RootState) => state.winners.totalPages;
export const selectTableSort = (state: RootState) => state.winners.tableSort;

export default winnersSlice.reducer;
