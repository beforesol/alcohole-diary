import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../routes';
import Personal from '@assets/img/svg/icon_user.svg';
import Group from '@assets/img/svg/icon_group.svg';
import { RootState } from '@config/store';
import { useSelector } from 'react-redux';
import { Mode } from '@constants/Mode';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Header: React.FC<IOwnProps> = ({
}) => {
  const { thumbnail_image_url } = useSelector((state: RootState) => state.user.profile.kakao_account.profile);
  const { mode } = useSelector((state: RootState) => state.mode);


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
        {mode === Mode.PERSONAL && (
          <Personal />
        )}
        {mode === Mode.GROUP && (
          <Group />
        )}
      </Link>
    </div>
  );
};

export default Header;
