import React from 'react';
import classNames from 'classnames/bind';

import styles from './Calendar.scss';
const cx = classNames.bind(styles);

interface IOwnProps {
};

const Calendar: React.FC<IOwnProps> = ({

}) => {
  return (
    <div className={cx('calendar')}>달력</div>
  );
};

export default Calendar;
