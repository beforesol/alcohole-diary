import React, { useState } from 'react';
import styles from './Controller.scss';
import classNames from 'classnames/bind';
import Close from '@assets/img/svg/icon_x.svg';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Controller: React.FC<IOwnProps> = ({
}) => {
  const [showUnitLayer, setShowUnitLayer] = useState(false);
  const [AlcoholList, setAlcoholList] = useState([
    {
      id: 1,
      type: '소주',
      count: 0,
      unit: '병'
    },
    {
      id: 2,
      type: '맥주',
      count: 0,
      unit: '병'
    },
    {
      id: 3,
      type: '와인',
      count: 0,
      unit: '병'
    },
    {
      id: 4,
      type: '막걸리',
      count: 0,
      unit: '병'
    }
  ]);

  const handleClickPlus = (id: number) => {
    const list = AlcoholList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count + 1
        }
      }
      return item
    })
    setAlcoholList(list)
  };

  const handleClickMinus = (id: number) => {
    const list = AlcoholList.map(item => {
      if (item.id === id) {
        if (item.count >= 1) {
          return {
            ...item,
            count: item.count - 1
          }
        }
      }
      return item
    })
    setAlcoholList(list)
  };

  const handleClickUnit = () => {
    setShowUnitLayer(false);
  }

  return (
    <div className={cx('controller')}>
      <ul className={cx('list_set')}>
        {AlcoholList.map((Alcohol) =>
          <li className={cx('list')} key={Alcohol.id}>
            <span className={cx('text')}>{Alcohol.type} {Alcohol.count} {Alcohol.unit}</span>
            <div className={cx('btn_area')}>
              <button onClick={() => handleClickPlus(Alcohol.id)} className={cx('btn', 'count_btn')}>+</button>
              <button onClick={() => handleClickMinus(Alcohol.id)} className={cx('btn', 'count_btn')}>-</button>
              <button type="button" className={cx('btn', 'unit_btn')} onClick={() => setShowUnitLayer(true)}>단위</button>
            </div>
          </li>
        )}
      </ul>
      {showUnitLayer && (
        <div className={cx('unit_layer')}>
          <div className={cx('layer_inner')}>
            <button type="button" className={cx('layer_item')} onClick={handleClickUnit}>잔</button>
            <button type="button" className={cx('layer_item')} onClick={handleClickUnit}>ml</button>
            <button type="button" className={cx('layer_item')} onClick={handleClickUnit}>병</button>
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