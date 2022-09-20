import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface AppState {
  loading: boolean;
  page: string;
}

export enum PageName {
  GARAGE = 'Garage',
  WINNERS = 'Winners',
}

const initialState: AppState = {
  loading: false,
  page: PageName.GARAGE,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    removeLoading: (state) => {
      state.loading = false;
    },
    setCurrPage: (state, action: PayloadAction<PageName>) => {
      state.page = action.payload;
    },
  },
});

export const { setLoading, removeLoading, setCurrPage } = appSlice.actions;

export const selectLoading = (state: RootState) => state.app.loading;
export const selectCurrPage = (state: RootState) => state.app.page;

export default appSlice.reducer;
