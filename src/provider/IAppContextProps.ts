interface ICurrPage {
  currPage: string;
  setCurrPage: React.Dispatch<React.SetStateAction<string>>;
}

interface IWinnerSort {
  winnerSort: string;
  setWinnerSort: React.Dispatch<React.SetStateAction<string>>;
}

// interface IRaceStatus {
//   raceStatus: string;
//   setRaceStatus: React.Dispatch<React.SetStateAction<string>>;
// }

interface IWinnerSortOrder {
  winnerWinsOrder: string;
  setWinnerWinsOrder: React.Dispatch<React.SetStateAction<string>>;
  winnerTimeOrder: string;
  setWinnerTimeOrder: React.Dispatch<React.SetStateAction<string>>;
}

export interface IAppContext extends ICurrPage, IWinnerSort, IWinnerSortOrder {}
