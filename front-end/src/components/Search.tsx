import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.scss';
import SearchIcon from '@src/assets/img/svg/icon_search.svg';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Search: React.FC<IOwnProps> = ({
}) => {
  return (
    <div className={cx('search')}>
      <SearchIcon className={cx('icon_search')} />
      <input type="text" className={cx('search_input')} />
      {/* <ul className={cx('auto_complete_set')}>
        {[1, 2, 3].map(_item => (
          <li className={cx('auto_complete_list')} key={_item}>
            <button
              type='button'
              className={cx('list_btn')}>
              <span className={cx('text')}>소주</span>
            </button>
          </li>
        ))}
      </ul> */}
  </div>
  );
};

export default Search;
