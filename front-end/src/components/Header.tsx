import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../routes';
import Logout from '@assets/img/svg/icon_logout.svg';
import User from '@assets/img/svg/icon_user.svg';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Header: React.FC<IOwnProps> = ({
}) => {
  return (
    <div className={cx('header')}>
      <Link
        to={ROUTE_PATH.LOGIN.path}
        className={cx('logout_btn')}>
        <Logout className={cx('icon_logout')} />
        <span className="blind">로그아웃</span>
      </Link>
      <h1 className={cx('title')}>
        <Link to={ROUTE_PATH.HOME.path}>Alcohole Diary</Link>
      </h1>
      <Link
        to={ROUTE_PATH.MODE.path}
        className={cx('mode_btn')}>
        <User className={cx('icon_user')} />
        <span className="blind">모드</span>
      </Link>
    </div>
  );
};

export default Header;
