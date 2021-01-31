import React, { useState } from 'react';
import styles from './Recode.scss';
import classNames from 'classnames/bind';
import { IRecode, EInputMode, EUnit } from '@src/models/recode';
import { useDispatch } from 'react-redux';
import { updateRecode } from '@src/reducers/RecodeReducer';

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
  const [count, setCount] = useState(recode.count);
  const [inputMode, setInputMode] = useState(EInputMode.TEXT);

  const handleClickText = () => {
    setInputMode(EInputMode.INPUT);
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.currentTarget.value)
  }

  const handleBlurInput = (_e: React.FocusEvent<HTMLInputElement>) => {
    const isNumber = !Number.isNaN(Number(count));

    if (!isNumber) alert('숫자타입을 입력해주세요');
    setInputMode(EInputMode.TEXT);

    dispatch(updateRecode({
      ...recode,
      count: isNumber ? count : recode.count,
    }));
  }

  const handleClickPlus = () => {
    dispatch(updateRecode({ ...recode, id: recode.id, count: Number(recode.count) + 1 }));
  }

  const handleClickMinus = () => {
    if (recode.count > 0) {
      dispatch(updateRecode({ ...recode, id: recode.id, count: Number(recode.count) - 1 }));
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
        {inputMode === EInputMode.TEXT ? (
          <span>
            {recode.count}
          </span>
        ) : (
            <input type="text" value={count} onChange={handleChangeInput} onBlur={handleBlurInput} />
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