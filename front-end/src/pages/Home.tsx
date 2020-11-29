import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import { Link } from 'react-router-dom';
import Calendar from '@components/Calendar';
import Controller from '@components/Controller';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Home: React.FC<IOwnProps> = ({
}) => {
  return (
    <div className={cx('home')}>
      <Calendar />
      <Controller />
    </div>
  );
};

export default Home;