import { IAlcoholeTypes } from "@src/models/AlcoholeTypes";

export const initAlcoholeTypes: IAlcoholeTypes[] = [
  {
    id: 0,
    name: '소주',
    thumb: 'https://www.polinews.co.kr/data/photos/20200208/art_15822778407469_5cb30d.jpg',
    units: {
      bottle: 360,
      cup: 70,
    }
  },
  {
    id: 1,
    name: '맥주',
    thumb: 'https://news.imaeil.com/inc/photos/2020/05/21/2020052113283164926_l.jpg',
    units: {
      bottle: 500,
      cup: 330,
    }
  },
  {
    id: 2,
    name: '막걸리',
    thumb: 'https://www.thinkfood.co.kr/news/photo/201912/85903_110816_78.jpg',
    units: {
      bottle: 750,
      cup: 200,
    }
  }
]