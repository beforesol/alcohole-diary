import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Write.scss';
import { EUnit, IWrite } from '@src/models/write';
import { Link } from 'react-router-dom';
import Close from '@src/assets/img/svg/icon_x.svg';
import { ROUTE_PATH } from '../routes';
import Search from '@src/assets/img/svg/icon_search.svg';
import ConfirmLayer from '@src/components/ConfirmLayer';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Write: React.FC<IOwnProps> = ({
}) => {
  const [showUnitLayer, setShowUnitLayer] = useState(false);
  const [unit, setUnit] = useState<EUnit>(EUnit.BOTTLE);

  const handleClickUnit = () => {
    setShowUnitLayer(true);
  }

  const handleClickChangeUnit = (unit: EUnit) => {
    setShowUnitLayer(false);
    setUnit(unit);
  };

  return (
    <div className={cx('write')}>
      <div className={cx('title_area')}>
        <Link to={ROUTE_PATH.HOME.path} className={cx('close_btn')}>
          <Close className={cx('icon_close')} />
        </Link>
        <h2 className={cx('title')}>소주</h2>
      </div>
      <div className={cx('input_area')}>
        <input type="text" className={cx('input')} />
      </div>
      <div className={cx('select_area')}>
        <button type="button" className={cx('selected')} onClick={handleClickUnit} aria-expanded={showUnitLayer}>{unit}</button>
        <ul className={cx('list_set')}>
          <li className={cx('list')}><button className={cx('select_btn')} onClick={() => handleClickChangeUnit(EUnit.CUP)}>잔</button></li>
          <li className={cx('list')}><button className={cx('select_btn')} onClick={() => handleClickChangeUnit(EUnit.ML)}>ml</button></li>
          <li className={cx('list')}><button className={cx('select_btn')} onClick={() => handleClickChangeUnit(EUnit.BOTTLE)}>병</button></li>
        </ul>
      </div>
      <div className={cx('btn_area')}>
        <button type="button" className={cx('btn')}>삭제하기</button>
        <button type="button" className={cx('btn')}>저장하기</button>
      </div>
      <ConfirmLayer text={'삭제하시겠습니까?'} />
    </div>
  );
};

export default Write;
