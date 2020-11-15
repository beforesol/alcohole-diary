import React from 'react';
import classNames from 'classnames/bind';
import styles from './Mode.scss';
import { Link } from 'react-router-dom';
import Close from '@assets/img/svg/icon_x.svg';
import { ROUTE_PATH } from '../routes';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Mode: React.FC<IOwnProps> = ({

}) => {
  return (
    <div className={cx('mode')}>
      <div className={cx('title_area')}>
        <Link to={ROUTE_PATH.HOME.path} className={cx('close_btn')}>
          <Close className={cx('icon_close')} />
        </Link>
        <h2 className={cx('title')}>모드선택</h2>
      </div>
      <button type="button" className={cx('personal_mode')}>개인모드</button>
      <ul className={cx('group_set_list')}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(_item => (
          <li className={cx('list')}>
            <button type="button">
              <div className={cx('thumb_area')}>
                <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F27738433597DCB1312" alt="임시이미지" className={cx('thumb')} />
              </div>
              <div className={cx('info_area')}>
                <div className={cx('inner')}>
                  <strong className={cx('room_title')}>방 이름</strong>
                  <div className={cx('count')}>인원 수 2명</div>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mode;
