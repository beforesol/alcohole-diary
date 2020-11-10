import React from 'react';
import classNames from 'classnames/bind';
import styles from './Layout.scss';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../routes';
import Logout from '@assets/img/svg/icon_logout.svg';
import User from '@assets/img/svg/icon_user.svg';
import Header from '@components/Header';
import Tab from '@components/Tab';

const cx = classNames.bind(styles);

interface IOwnProps {
  children: any;
};

const Layout: React.FC<IOwnProps> = ({
  children
}) => {
  return (
    <div className={cx('layout')}>
      <Header />
      {children}
      <Tab />
    </div>
  );
};

export default Layout;
