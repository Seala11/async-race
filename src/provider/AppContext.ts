import { createContext } from 'react';
import { IAppContext } from '@src/provider/IAppContextProps';
import { WinnerSortOrder, WinnerSortParam } from '@src/requests/InterfaceAPI';
import RaceStatusVal from '@src/pages/garage/controls/race/IRaceProps';

const defaultContext = {
  currPage: '',
  setCurrPage: () => '',
  winnerSort: WinnerSortParam.wins,
  setWinnerSort: () => '',
  winnerWinsOrder: WinnerSortOrder.ascending,
  setWinnerWinsOrder: () => '',
  winnerTimeOrder: '',
  setWinnerTimeOrder: () => '',
  raceStatus: RaceStatusVal.end,
  setRaceStatus: () => '',
};

const AppContext = createContext<IAppContext>(defaultContext);

export default AppContext;
