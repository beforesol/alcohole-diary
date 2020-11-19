import React from 'react';
import classNames from 'classnames/bind';
import styles from './Statistics.scss';
import { Link } from 'react-router-dom';
import Close from '@assets/img/svg/icon_x.svg';
import { ROUTE_PATH } from '../routes';
import Search from '@assets/img/svg/icon_search.svg';
import Profile from '@components/Profile';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Statistics: React.FC<IOwnProps> = ({

}) => {
  return (
    <div className={cx('statistics')}>
      <div className={cx('btn_area')}>
        <button type="button" className={cx('btn')}>일</button>
        <button type="button" className={cx('btn')}>주</button>
        <button type="button" className={cx('btn')}>월</button>
        <button type="button" className={cx('btn')}>년</button>
      </div>
      <div className={cx('info_area')}>
        <strong className={cx('title')}>음주 섭취량</strong>
        <ul className={cx('list_set')}>
          <li className={cx('list')}>소주 3병</li>
          <li className={cx('list')}>맥주 2병</li>
          <li className={cx('list')}>와인 1.5병</li>
        </ul>
      </div>
      <div className={cx('chart_area')}>차트 영역</div>
    </div>
  );
};

export default Statistics;
