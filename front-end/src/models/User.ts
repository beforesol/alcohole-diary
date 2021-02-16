import { IAlcoholeTypes } from "./AlcoholeTypes";

export interface IUserInfo {
  id: string;
  profile_image: string;
  alcohole_types: IAlcoholeTypes[];
  nickname: string;
}
