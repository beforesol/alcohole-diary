import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../routes';
import Logout from '@assets/img/svg/icon_logout.svg';
import { RootState } from '@config/store';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Header: React.FC<IOwnProps> = ({
}) => {
  const { thumbnail_image_url } = useSelector((state: RootState) => state.user.profile.kakao_account.profile);


  return (
    <div className={cx('header')}>
      <Link
        to={ROUTE_PATH.LOGIN.path}
        className={cx('logout_btn')}>
        <img src={thumbnail_image_url} alt="" />
      </Link>
      <h1 className={cx('title')}>
        <Link to={ROUTE_PATH.HOME.path}>Alcohole Diary</Link>
      </h1>
      <Link
        to={ROUTE_PATH.MODE.path}
        className={cx('mode_btn')}>
        <span>모드</span>
      </Link>
    </div>
  );
};

export default Header;
