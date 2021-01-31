import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import { Link } from 'react-router-dom';
import Calendar from '@src/components/Calendar';
import Controller from '@src/components/Controller';
import { ROUTE_PATH } from '../routes';
import { useDispatch } from 'react-redux';
import { initRecodeList } from '@src/reducers/RecodeReducer';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Home: React.FC<IOwnProps> = ({
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initRecodeList({}));
  }, []);
  return (
    <div className={cx('home')}>
      <Calendar />
      <Controller />
      <Link to={ROUTE_PATH.SELECT.path} className={cx('add_btn')}>추가하기</Link>
    </div>
  );
};

export default Home;