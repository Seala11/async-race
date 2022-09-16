export interface IProviderGarageProps {
  children: React.ReactElement[] | React.ReactElement;
}

export enum GarageProvType {
  add = 'add',
  delete = 'delete',
  update = 'update',
  clear = 'clear',
}

export interface ILeftAnimation {
  id: number;
  left: number;
  active: boolean;
}
