import React from 'react';
import classNames from 'classnames/bind';
import styles from './Select.scss';
import { Link } from 'react-router-dom';
import Close from '@assets/img/svg/icon_x.svg';
import { ROUTE_PATH } from '../routes';
import Search from '@assets/img/svg/icon_search.svg';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Select: React.FC<IOwnProps> = ({

}) => {
  return (
    <div className={cx('select')}>
      <div className={cx('title_area')}>
        <Link to={ROUTE_PATH.HOME.path} className={cx('close_btn')}>
          <Close className={cx('icon_close')} />
        </Link>
        <h2 className={cx('title')}>주종을 선택해주세요.</h2>
        <div className={cx('search_area')}>
          <Search className={cx('icon_search')} />
          <input type="text" className={cx('search_input')} />
        </div>
        <ul className={cx('list_set')}>
          {[1, 2, 3].map(_item => (
            <li className={cx('list')}>
              <button type="button" className={cx('info_area')}>
                <div className={cx('thumb')}>
                  <img src="https://www.polinews.co.kr/data/photos/20200208/art_15822778407469_5cb30d.jpg" className={cx('profile')} />
                </div>
                <div className={cx('name')}>
                  <span className={cx('text')}>소주</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
