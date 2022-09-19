import { createContext } from 'react';
import { IAppContext } from '@src/provider/IAppContextProps';
import { WinnerSortOrder, WinnerSortParam } from '@src/requests/InterfaceAPI';

const defaultContext = {
  currPage: '',
  setCurrPage: () => '',
  winnerSort: WinnerSortParam.wins,
  setWinnerSort: () => '',
  winnerWinsOrder: WinnerSortOrder.ascending,
  setWinnerWinsOrder: () => '',
  winnerTimeOrder: '',
  setWinnerTimeOrder: () => '',
  setRaceStatus: () => '',
};

const AppContext = createContext<IAppContext>(defaultContext);

export default AppContext;
