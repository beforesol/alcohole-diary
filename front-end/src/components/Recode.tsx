import React, { useState } from 'react';
import styles from './Recode.scss';
import classNames from 'classnames/bind';
import { IRecode, EInputMode, EUnit } from '@src/models/recode';
import { useDispatch } from 'react-redux';
import { updateRecode } from '@src/reducers/RecodeReducer';
import Close from '@src/assets/img/svg/icon_x.svg';

const cx = classNames.bind(styles);

interface IOwnProps {
  recode: IRecode
};

const Recode: React.FC<IOwnProps> = ({
  recode,
}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(recode.count);
  const [inputMode, setInputMode] = useState(EInputMode.TEXT);
  const [showUnitLayer, setShowUnitLayer] = useState(false);
  const [unit, setUnit] = useState<EUnit>(recode.unit);

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
    setCount(Number(count) + 1);
  }

  const handleClickMinus = () => {
    if (recode.count > 0) {
      dispatch(updateRecode({ ...recode, id: recode.id, count: Number(recode.count) - 1 }));
      setCount(Number(count) - 1);
    }
  }

  const handleClickUnit = () => {
    setShowUnitLayer(true);
  }

  const handleClickChangeUnit = (unit: EUnit) => {
    dispatch(updateRecode({ ...recode, id: recode.id, unit }));
    setShowUnitLayer(false);
    setUnit(unit);
  };

  return (
    <li className={cx('recode')} key={recode.id}>
      <span className={cx('text')} onClick={handleClickText}>
        {recode.type}
        {inputMode === EInputMode.TEXT ? (
          <span>
            {count}
          </span>
        ) : (
            <input type="text" value={count} onChange={handleChangeInput} onBlur={handleBlurInput} />
          )}
        {unit}
      </span>
      <div className={cx('btn_area')}>
        <button onClick={handleClickPlus} className={cx('btn', 'count_btn')}>+</button>
        <button onClick={handleClickMinus} className={cx('btn', 'count_btn')}>-</button>
        <button type="button" className={cx('btn', 'unit_btn')} onClick={handleClickUnit}>단위</button>
      </div>
      {showUnitLayer && (
        <div className={cx('unit_layer')}>
          <div className={cx('dimmed')} />
          <div className={cx('layer_inner')}>
            <button type="button" className={cx('layer_item')} onClick={() => handleClickChangeUnit(EUnit.CUP)}>잔</button>
            <button type="button" className={cx('layer_item')} onClick={() => handleClickChangeUnit(EUnit.ML)}>ml</button>
            <button type="button" className={cx('layer_item')} onClick={() => handleClickChangeUnit(EUnit.BOTTLE)}>병</button>
            <button type="button" className={cx('close_btn')} onClick={() => setShowUnitLayer(false)}>
              <Close className={cx('icon_close')} />
              <span className={cx('blind')}>닫기</span>
            </button>
          </div>
        </div>
      )}
    </li>
  )
};
export default Recode;