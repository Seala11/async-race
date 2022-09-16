import { IWinnersInfo } from '@src/requests/InterfaceAPI';

export interface ITableProps {
  winnersInfo: IWinnersInfo[];
  winnersPage: number;
}
