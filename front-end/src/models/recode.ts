export enum EInputMode {
  TEXT = 'text',
  INPUT = 'input',
};

export enum EUnit {
  BOTTLE = '병',
  CUP = '잔',
  ML = 'ml',
}

export interface IRecode {
  id: number;
  type: string;
  count: number | string;
  unit: EUnit;
  inputMode: EInputMode
}