import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import { Link } from 'react-router-dom';
import Calendar from '@src/components/Calendar';
import Controller from '@src/components/Controller';
import { ROUTE_PATH } from '../routes';
import { useDispatch, useSelector } from 'react-redux';
import { initRecodeList } from '@src/reducers/RecodeReducer';
import { RootState } from '@src/config/store';
import { EMode } from '@src/constants/Mode';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Home: React.FC<IOwnProps> = ({
}) => {
  const dispatch = useDispatch();
  const [useStatistics, setUseStatistics] = useState<boolean>(false);
  const { mode } = useSelector((state: RootState) => state.mode);

  useEffect(() => {
    dispatch(initRecodeList({}));
  }, []);

  return (
    <div className={cx('home')}>
      <Calendar />
      <Controller />
      <Link to={ROUTE_PATH.SELECT.path} className={cx('add_btn')}>추가하기</Link>
      {mode === EMode.GROUP && (
        <div className={cx('statistics_toggle', useStatistics && 'active')}>
          <button type="button" className={cx('statistics_toggle_btn')} onClick={() => setUseStatistics(!useStatistics)} />
        </div>
      )}
    </div>
  );
};

export default Home;