import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Room.scss';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../routes';
import Profile from '@src/components/Profile';
import Invite from '@src/components/Invite';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Room: React.FC<IOwnProps> = ({

}) => {
  const [title, setTitle] = useState<string>('술에 취하고 너에게 취하고');
  const [showInviteLayer, setShowInviteLayer] = useState<boolean>(false);
  const handleClick = () => {
    alert('삭제하시겠습니까?');
  }

  return (
    <div className={cx('room')}>
      <div className={cx('thumb_area')}>
        <img src="https://i2.wp.com/thesciencelife.com/wp-content/uploads/2017/12/the-customary-62252_960_720.jpg?fit=770%2C335&resize=1280%2C720" alt="커버" className={cx('cover')} />
        <input type="file" className={cx('file_input')} />
        <span className={cx('text')}>방 커버사진</span>
        <Link to={ROUTE_PATH.HOME.path} className={cx('home_link')}>홈</Link>
      </div>
      <div className={cx('info_area')}>
        <div className={cx('info')}>
          <strong className={cx('title')}>방 제목</strong>
          <input className={cx('text')} value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
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
          <button onClick = {handleClick} type="button" className={cx('btn')} >삭제</button>
          <button type="button" className={cx('btn')}>저장</button>
          <button type="button" className={cx('btn')}>나가기</button>
        </div>
        {/* <ConfirmLayer text={'나가시겠습니까?'} /> */}
      </div>
      {showInviteLayer && (
        <Invite />
      )}
    </div>
  );
};

export default Room;
