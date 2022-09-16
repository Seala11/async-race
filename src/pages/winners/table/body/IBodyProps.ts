import { IWinnersInfo } from '@src/requests/InterfaceAPI';

export interface IBodyProps {
  winnersInfo: IWinnersInfo[];
  winnersPage: number;
}
