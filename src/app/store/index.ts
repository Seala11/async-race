import { configureStore } from '@reduxjs/toolkit';
import garageReducer from './garageSlice';
import winnersReducer from './winnersSlice';
import appReducer from './appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    garage: garageReducer,
    winners: winnersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
