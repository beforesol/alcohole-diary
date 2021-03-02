export interface IAlcoholeTypes {
  id: number;
  name: string;
  units: IUnits;
  thumb: string;
}

interface IUnits {
  bottle: number;
  cup: number;
}