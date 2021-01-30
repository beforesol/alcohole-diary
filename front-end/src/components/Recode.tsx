import React, { useState } from 'react';
import styles from './Recode.scss';
import classNames from 'classnames/bind';
import { IRecode, EInputMode, EUnit } from '@src/models/recode';
import { useDispatch } from 'react-redux';
import { updateRecode, updateCount, updateInputMode } from '@src/reducers/RecodeReducer';

const cx = classNames.bind(styles);

interface IOwnProps {
  recode: IRecode,
  onSetSeletedRecodeId: (id: string) => void;
  onSetShowUnitLayer: (isOpen: boolean) => void;
};

const Recode: React.FC<IOwnProps> = ({
  recode,
  onSetSeletedRecodeId,
  onSetShowUnitLayer
}) => {
  const dispatch = useDispatch();

  const handleClickText = () => {
    dispatch(updateInputMode({ id: recode.id, inputMode: EInputMode.INPUT }));
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCount({ id: recode.id, count: e.currentTarget.value }));
  }

  const handleBlurInput = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const isNumber = !Number.isNaN(Number(value));

    if (!isNumber) alert('숫자타입을 입력해주세요');

    dispatch(updateRecode({
      ...recode,
      count: isNumber ? recode.count : 0,
      inputMode: EInputMode.TEXT,
    }));
  }

  const handleClickPlus = () => {
    dispatch(updateCount({ id: recode.id, count: Number(recode.count) + 1 }));
  }

  const handleClickMinus = () => {
    if (recode.count > 0) {
      dispatch(updateCount({ id: recode.id, count: Number(recode.count) - 1 }));
    }
  }

  const handleClickUnit = () => {
    onSetSeletedRecodeId(recode.id);
    onSetShowUnitLayer(true);
  }

  return (
    <li className={cx('recode')} key={recode.id}>
      <span className={cx('text')} onClick={handleClickText}>
        {recode.type}
        {recode.inputMode === EInputMode.TEXT ? (
          <span>
            {recode.count}
          </span>
        ) : (
            <input type="text" value={recode.count} onChange={handleChangeInput} onBlur={handleBlurInput} />
          )}
        {recode.unit}
      </span>
      <div className={cx('btn_area')}>
        <button onClick={handleClickPlus} className={cx('btn', 'count_btn')}>+</button>
        <button onClick={handleClickMinus} className={cx('btn', 'count_btn')}>-</button>
        <button type="button" className={cx('btn', 'unit_btn')} onClick={handleClickUnit}>단위</button>
      </div>
    </li>
  )
};
export default Recode;