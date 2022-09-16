export interface ILeftAnimation {
  id: number;
  left: number;
  active: boolean;
}

export interface IGarageContext {
  animationStatus: ILeftAnimation[];
  setAnimationStatus: React.Dispatch<{ type: string; id: number; car: ILeftAnimation }>;
}
