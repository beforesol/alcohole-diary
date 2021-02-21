import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Statistics.scss';
import { Link } from 'react-router-dom';
import Close from '@src/assets/img/svg/icon_x.svg';
import { ROUTE_PATH } from '../routes';
import Search from '@src/assets/img/svg/icon_search.svg';
import Profile from '@src/components/Profile';
import { EStatistics } from '@src/models/statistics';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Statistics: React.FC<IOwnProps> = ({

}) => {
  const [selected, setSelected] = useState<EStatistics>(EStatistics.DAY);
  return (
    <div className={cx('statistics')}>
      <div className={cx('btn_area')}>
        {/* [D] 선택 시 .active 추가해 주세요.  */}
        <button type="button" className={cx('btn', selected === EStatistics.DAY && 'active')} onClick={() => setSelected(EStatistics.DAY)}>일</button>
        <button type="button" className={cx('btn', selected === EStatistics.WEEK && 'active')} onClick={() => setSelected(EStatistics.WEEK)}>주</button>
        <button type="button" className={cx('btn', selected === EStatistics.MONTH && 'active')} onClick={() => setSelected(EStatistics.MONTH)}>월</button>
        <button type="button" className={cx('btn', selected === EStatistics.YEAR && 'active')} onClick={() => setSelected(EStatistics.YEAR)}>년</button>
      </div>
        <div className={cx('info_area')}>
          <strong className={cx('title')}>음주 섭취량</strong>
          <ul className={cx('list_set')}>
            <li className={cx('list')}>소주 3병</li>
            <li className={cx('list')}>맥주 2병</li>
            <li className={cx('list')}>와인 1.5병</li>
          </ul>
        </div>
        <div className={cx('chart_area')}>차트 영역</div>
      </div>
  );
};

export default Statistics;
