import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../routes';
import Personal from '@src/assets/img/svg/icon_user.svg';
import Group from '@src/assets/img/svg/icon_group.svg';
import { RootState } from '@src/config/store';
import { useSelector } from 'react-redux';
import { EMode } from '@src/constants/Mode';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Header: React.FC<IOwnProps> = ({
}) => {
  const thumbnail_image_url = useSelector((state: RootState) => state.user.profile?.kakao_account.profile.thumbnail_image_url);
  const { mode } = useSelector((state: RootState) => state.mode);

  return (
    <div className={cx('header')}>
      <Link
        to={ROUTE_PATH.LOGIN.path}
        className={cx('logout_btn')}>
        <img src={thumbnail_image_url} alt="" />
      </Link>
      <h1 className={cx('title')}>
        <Link to={mode === EMode.GROUP ? ROUTE_PATH.ROOM.path : ROUTE_PATH.HOME.path}>Alcohole Diary</Link>
      </h1>
      <Link
        to={ROUTE_PATH.MODE.path}
        className={cx('mode_btn')}>
        {mode === EMode.PERSONAL && (
          <Personal />
        )}
        {mode === EMode.GROUP && (
          <Group />
        )}
      </Link>
    </div>
  );
};

export default Header;
