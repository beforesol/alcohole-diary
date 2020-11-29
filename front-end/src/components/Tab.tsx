import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tab.scss';
import { ROUTE_PATH } from '../routes';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Tab: React.FC<IOwnProps> = ({
}) => {
  return (
    <div className={cx('tab')}>
      <button type="button" className={cx('tab_btn')}>달력</button>
      <Link 
        to={ROUTE_PATH.STATISTICS.path}
        type = 'button'
        className={cx('tab_btn')}>통계</Link> 
      <button type="button" className={cx('tab_btn')}>???</button>
      <button type="button" className={cx('tab_btn')}>설정</button>
    </div>
  );
};

export default Tab;
