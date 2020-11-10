import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tab.scss';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Tab: React.FC<IOwnProps> = ({
}) => {
  return (
    <div className={cx('tab')}>
      <button type="button" className={cx('tab_btn')}>달력</button>
      <button type="button" className={cx('tab_btn')}>통계</button>
      <button type="button" className={cx('tab_btn')}>???</button>
      <button type="button" className={cx('tab_btn')}>설정</button>
    </div>
  );
};

export default Tab;
