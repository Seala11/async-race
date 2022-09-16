export interface IWinnersProps {
  winnersNumber: number;
  winnersPage: number;
  setWinnersPage: React.Dispatch<React.SetStateAction<number>>;
  setWinnersNumber: React.Dispatch<React.SetStateAction<number>>;
}
