import { lazy } from 'react';

export const ROUTE_PATH: {
  [key: string]: any;
} = {
  HOME: {
    path: `/`,
    url: `/`,
    name: 'home',
    title: '홈',
  },
  DETAIL: {
    path: `/detail/:id`,
    url: `/detail/:id`,
    name: 'detail',
    title: '상세',
  },
};

export const routes = [
  {
    ...ROUTE_PATH.HOME,
    exact: true,
    component: lazy(() => import('@pages/Home')),
  },
  {
    ...ROUTE_PATH.DETAIL,
    exact: true,
    component: lazy(() => import('@pages/Detail')),
  },
  {
    // 정의된 라우터 이외 path는 홈으로 이동
    path: `/*`,
    url: `/`,
    name: 'home',
    exact: true,
    component: lazy(() => import('@pages/Home')),
    title: '홈',
  },
];