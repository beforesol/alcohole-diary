import React from 'react';
import classNames from 'classnames/bind';
import styles from './Room.scss';
import { Link } from 'react-router-dom';
import Close from '@src/assets/img/svg/icon_x.svg';
import { ROUTE_PATH } from '../routes';
import Search from '@src/assets/img/svg/icon_search.svg';
import Profile from '@src/components/Profile';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Room: React.FC<IOwnProps> = ({

}) => {
  return (
    <div className={cx('room')}>
      <div className={cx('thumb_area')}>
        <img src="https://i2.wp.com/thesciencelife.com/wp-content/uploads/2017/12/the-customary-62252_960_720.jpg?fit=770%2C335&resize=1280%2C720" alt="커버" className={cx('cover')} />
        <input type="file" className={cx('file_input')} />
        <span className={cx('text')}>방 커버사진</span>
      </div>
      <div className={cx('info_area')}>
        <div className={cx('info')}>
          <strong className={cx('title')}>방 제목</strong>
          <p className={cx('text')}>술에 취하고 너에게 취하고</p>
        </div>
        <div className={cx('info')}>
          <strong className={cx('title')}>방장</strong>
          <div className={cx('profile_area')}>
            <Profile />
          </div>
        </div>
        <div className={cx('info')}>
          <div className={cx('title_area')}>
            <strong className={cx('title')}>참여자</strong>
            <button type="button" className={cx('invite_btn', 'btn')}>초대</button>
          </div>
          <ul className={cx('list_set')}>
            {[1, 2, 3, 4, 5].map(item => (
              <li key={item} className={cx('list')}>
                <Profile />
              </li>
            ))}
          </ul>
        </div>
        <div className={cx('btn_area')}>
          <button type="button" className={cx('btn')}>삭제</button>
          <button type="button" className={cx('btn')}>저장</button>
          <button type="button" className={cx('btn')}>나가기</button>
        </div>
      </div>
    </div>
  );
};

export default Room;
