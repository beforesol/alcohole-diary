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
  LOGIN: {
    path: `/login`,
    url: `/login`,
    name: 'login',
    title: '로그인',
  },
  MODE: {
    path: `/mode`,
    url: `/mode`,
    name: 'mode',
    title: '모드',
  },
  INVITE: {
    path: `/invite`,
    url: `/invite`,
    name: 'invite',
    title: '초대',
  },
  SELECT: {
    path: `/select`,
    url: `/select`,
    name: 'select',
    title: '주종선택',
  },
  ROOM: {
    path: `/room`,
    url: `/room`,
    name: 'room',
    title: '방만들기/방수정하기',
  },
  WRITE: {
    path: `/write`,
    url: `/write`,
    name: 'write',
    title: '추가/수정',
  },
  ADDALCOHOL: {
    path: `/addalcohol`,
    url: `/addalcohol`,
    name: 'addalcohol',
    title: '주종추가',
  },
  STATISTICS: {
    path: `/statistics`,
    url: `/statistics`,
    name: 'statistics',
    title: '통계',
  },
};

export const routes = [
  {
    ...ROUTE_PATH.HOME,
    exact: true,
    component: lazy(() => import('@src/pages/Home')),
  },
  {
    ...ROUTE_PATH.DETAIL,
    exact: true,
    component: lazy(() => import('@src/pages/Detail')),
  },
  {
    ...ROUTE_PATH.LOGIN,
    exact: true,
    component: lazy(() => import('@src/pages/Login')),
  },
  {
    ...ROUTE_PATH.MODE,
    exact: true,
    component: lazy(() => import('@src/pages/Mode')),
  },
  {
    ...ROUTE_PATH.INVITE,
    exact: true,
    component: lazy(() => import('@src/pages/Invite')),
  },
  {
    ...ROUTE_PATH.SELECT,
    exact: true,
    component: lazy(() => import('@src/pages/Select')),
  },
  {
    ...ROUTE_PATH.ROOM,
    exact: true,
    component: lazy(() => import('@src/pages/Room')),
  },
  {
    ...ROUTE_PATH.STATISTICS,
    exact: true,
    component: lazy(() => import('@src/pages/Statistics')),
  },
  {
    ...ROUTE_PATH.ADDALCOHOL,
    exact: true,
    component: lazy(() => import('@src/pages/AddAlcohol')),
  },
  {
    ...ROUTE_PATH.WRTIE,
    exact: true,
    component: lazy(() => import('@src/pages/Write')),
  },
  {
    // 정의된 라우터 이외 path는 홈으로 이동
    path: `/*`,
    url: `/`,
    name: 'home',
    exact: true,
    component: lazy(() => import('@src/pages/Home')),
    title: '홈',
  },
];