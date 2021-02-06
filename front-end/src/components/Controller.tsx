import React, { useState } from 'react';
import styles from './Controller.scss';
import classNames from 'classnames/bind';
import { EUnit } from '@src/models/recode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/config/store';
import { updateRecode } from '@src/reducers/RecodeReducer';
import Recode from './Recode';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Controller: React.FC<IOwnProps> = ({
}) => {
  const { recode } = useSelector((state: RootState) => state.recode);

  return (
    <div className={cx('controller')}>
      <ul className={cx('list_set')}>
        {recode.list.map((recode) =>
          <Recode key={recode.id} recode={recode} />
        )}
      </ul>
    </div>
  )
};
export default Controller;