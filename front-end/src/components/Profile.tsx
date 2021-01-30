import React from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.scss';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../routes';
import Logout from '@src/assets/img/svg/icon_logout.svg';
import User from '@src/assets/img/svg/icon_user.svg';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Profile: React.FC<IOwnProps> = ({
}) => {
  return (
    <div className={cx('profile')}>
      <button type="button" className={cx('info_area')}>
        <div className={cx('thumb')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDpglI6dVHvBfC0coriLkHugQRPvwSKioxA&usqp=CAU" className={cx('img')} />
        </div>
        <div className={cx('name')}>
          <span className={cx('text')}>조덕팔</span>
        </div>
      </button>
    </div>
  );
};

export default Profile;
