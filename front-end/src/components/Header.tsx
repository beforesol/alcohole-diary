import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import { useLogin } from 'hooks/useLogin';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../routes';
import Arrow from '@assets/img/svg/icon_logout.svg';

const cx = classNames.bind(styles);

interface IOwnProps {
  onClickModeBtn: () => void
};

const Header: React.FC<IOwnProps> = ({
  onClickModeBtn
}) => {
  return (
    <div className={cx('header')}>
      <Link
        to={ROUTE_PATH.LOGIN.path}
        className={cx('logout_btn')}>
        <Arrow className={cx('icon_logout')} />
      </Link>
      <Link to={ROUTE_PATH.HOME.path}>Alcohole Diary</Link>
      <button
        type="button"
        className={cx('mode_btn')}
        onClick={onClickModeBtn}>모드</button>
    </div>
  );
};

export default Header;
