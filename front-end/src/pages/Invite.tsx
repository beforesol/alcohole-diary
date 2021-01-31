import React from 'react';
import classNames from 'classnames/bind';
import styles from './Invite.scss';
import { Link } from 'react-router-dom';
import Close from '@src/assets/img/svg/icon_x.svg';
import { ROUTE_PATH } from '../routes';
import Search from '@src/assets/img/svg/icon_search.svg';
import Profile from '@src/components/Profile';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Invite: React.FC<IOwnProps> = ({

}) => {
  return (
    <div className={cx('invite')}>
      <div className={cx('title_area')}>
        <Link to={ROUTE_PATH.HOME.path} className={cx('close_btn')}>
          <Close className={cx('icon_close')} />
        </Link>
        <h2 className={cx('title')}>초대할 친구를 선택해주세요.</h2>
        <div className={cx('search_area')}>
          <Search className={cx('icon_search')} />
          <input type="text" className={cx('search_input')} />
        </div>
        <ul className={cx('list_set')}>
          {[1, 2, 3].map(_item => (
            <li className={cx('list')}>
              <Profile />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Invite;
