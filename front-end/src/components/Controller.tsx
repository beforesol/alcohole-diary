import React, { useState } from 'react';
import styles from './Controller.scss';
import classNames from 'classnames/bind';
import Close from '@assets/img/svg/icon_x.svg';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const enum EInputMode {
  TEXT = 'text',
  INPUT = 'input',
};

const enum EUnit {
  BOTTLE = '병',
  CUP = '잔',
  ML = 'ml',
}

interface IAlcoholeList {
  id: number;
  type: string;
  count: number | string;
  unit: EUnit;
  inputMode: EInputMode;
}

const Controller: React.FC<IOwnProps> = ({
}) => {
  const [selectedItem, setSeletedItem] = useState(0);

  const [showUnitLayer, setShowUnitLayer] = useState(false);
  const [AlcoholeList, setAlcoholeList] = useState<IAlcoholeList[]>([
    {
      id: 1,
      type: '소주',
      count: 0,
      unit: EUnit.BOTTLE,
      inputMode: EInputMode.TEXT,
    },
    {
      id: 2,
      type: '맥주',
      count: 0,
      unit: EUnit.BOTTLE,
      inputMode: EInputMode.TEXT,
    },
    {
      id: 3,
      type: '와인',
      count: 0,
      unit: EUnit.BOTTLE,
      inputMode: EInputMode.TEXT,
    },
    {
      id: 4,
      type: '막걸리',
      count: 0,
      unit: EUnit.BOTTLE,
      inputMode: EInputMode.TEXT,
    }
  ]);

  const handleClickPlus = (id: number) => {
    const list = AlcoholeList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          count: Number(item.count) + 1
        }
      }
      return item
    })
    setAlcoholeList(list)
  };

  const handleClickMinus = (id: number) => {
    const list = AlcoholeList.map(item => {
      if (item.id === id) {
        if (item.count >= 1) {
          return {
            ...item,
            count: Number(item.count) - 1
          }
        }
      }
      return item
    })
    setAlcoholeList(list)
  };

  const handleClickChangeUnit = (unit: EUnit) => {
    setShowUnitLayer(false);
    const id = selectedItem;
    const list = AlcoholeList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          unit
        }
      }
      return item
    })
    setAlcoholeList(list)
  };

  const handleClickUnit = (id: number) => {
    setShowUnitLayer(true);
    setSeletedItem(id);
  };

  const handleClickText = (id: number) => {
    const list = AlcoholeList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          inputMode: EInputMode.INPUT,
        }
      }
      return item
    })
    setAlcoholeList(list)
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const list = AlcoholeList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          count: e.currentTarget.value,
        }
      }
      return item
    });
    setAlcoholeList(list);
  }

  const handleBlurInput = (e: React.FocusEvent<HTMLInputElement>, id: number) => {
    const isNumber = !Number.isNaN(Number(e.currentTarget.value));

    if (!isNumber) alert('숫자타입을 입력해주세요');

    const list = AlcoholeList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          inputMode: EInputMode.TEXT,
          count: isNumber ? item.count : 0,
        }
      }
      return item
    })
    setAlcoholeList(list)
  }

  return (
    <div className={cx('controller')}>
      <ul className={cx('list_set')}>
        {AlcoholeList.map((alchohole) =>
          <li className={cx('list')} key={alchohole.id}>
            <span className={cx('text')} onClick={() => handleClickText(alchohole.id)}>
              {alchohole.type}
              {alchohole.inputMode === EInputMode.TEXT ? (
                <span>
                  {alchohole.count}
                </span>
              ) : (
                  <input type="text" value={alchohole.count} onChange={(e) => handleChangeInput(e, alchohole.id)} onBlur={(e) => handleBlurInput(e, alchohole.id)} />
                )}
              {alchohole.unit}
            </span>
            <div className={cx('btn_area')}>
              <button onClick={() => handleClickPlus(alchohole.id)} className={cx('btn', 'count_btn')}>+</button>
              <button onClick={() => handleClickMinus(alchohole.id)} className={cx('btn', 'count_btn')}>-</button>
              <button type="button" className={cx('btn', 'unit_btn')} onClick={() => handleClickUnit(alchohole.id)}>단위</button>
            </div>
          </li>
        )}
      </ul>

      {showUnitLayer && (
        <div className={cx('unit_layer')}>
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
    </div>
  )
};
export default Controller;