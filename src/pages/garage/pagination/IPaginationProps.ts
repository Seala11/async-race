import { ICarData } from '@src/requests/InterfaceAPI';

export interface IPaginationProps {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  carsNumber: number;
  setCarsData: React.Dispatch<React.SetStateAction<ICarData[]>>;
}
