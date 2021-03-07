import React from 'react';
import classNames from 'classnames/bind';
import styles from './Select.scss';
import { Link } from 'react-router-dom';
import Close from '@src/assets/img/svg/icon_x.svg';
import { ROUTE_PATH } from '../routes';
import Search from '@src/components/Search';
import { useSelector } from 'react-redux';
import { RootState } from '@src/config/store';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Select: React.FC<IOwnProps> = ({

}) => {
  const { info } = useSelector((state: RootState) => state.user);

  return (
    <div className={cx('select')}>
      <div className={cx('title_area')}>
        <Link to={ROUTE_PATH.HOME.path} className={cx('close_btn')}>
          <Close className={cx('icon_close')} />
        </Link>
        <h2 className={cx('title')}>주종을 선택해주세요.</h2>
        <Search />
        {info?.alcohole_types && (
          <ul className={cx('list_set')}>
            {info?.alcohole_types.map(item => (
              <li className={cx('list')} key={item.id}>
                <Link
                  to={ROUTE_PATH.WRITE.path}
                  type='button'
                  className={cx('info_area')}>
                  <div className={cx('thumb')}>
                    <img src={item.thumb} className={cx('profile')} />
                  </div>
                  <div className={cx('name')}>
                    <span className={cx('text')}>{item.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link to={ROUTE_PATH.ADDALCOHOL.path} className={cx('add_btn')}>주종추가</Link>
      </div>
    </div>
  );
};

export default Select;
