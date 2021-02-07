import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Tab.scss';
import { ROUTE_PATH } from '../routes';
import { Link } from 'react-router-dom';
import { ETab } from '@src/models/Tab';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Tab: React.FC<IOwnProps> = ({
}) => {
  const [selectedTab, setSelectedTab] = useState<ETab>(ETab.CALENDAR);

  return (
    <div className={cx('tab')}>
      <button type="button" className={cx('tab_btn', selectedTab === ETab.CALENDAR && 'active')} onClick={() => setSelectedTab(ETab.CALENDAR)}>달력</button>
      <Link 
        to={ROUTE_PATH.STATISTICS.path}
        type = 'button'
        className={cx('tab_btn', selectedTab === ETab.STATISTICS && 'active')}
        onClick={() => setSelectedTab(ETab.STATISTICS)}>통계</Link> 
      <button type="button" className={cx('tab_btn', selectedTab === ETab.AMUGUNA && 'active')} onClick={() => setSelectedTab(ETab.AMUGUNA)}>???</button>
      <button type="button" className={cx('tab_btn', selectedTab === ETab.SETTING && 'active')} onClick={() => setSelectedTab(ETab.SETTING)}>설정</button>
    </div>
  );
};

export default Tab;
