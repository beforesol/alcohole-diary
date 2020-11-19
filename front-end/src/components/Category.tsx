import React, { useState } from 'react';
import styles from './Category.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Category: React.FC<IOwnProps> = ({
}) => {

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

  return (
    <>
      {
        AlcoholList.map((Alcohol) =>
          <div className={cx('list_item')} key={Alcohol.id}>{Alcohol.type} {Alcohol.count} {Alcohol.unit}
            <button onClick={() => handleClickPlus(Alcohol.id)} className={cx('count_button')}>+</button>
            <button onClick={() => handleClickMinus(Alcohol.id)} className={cx('count_button')}>-</button>
          </div>
        )
      }
    </>

  )
};
export default Category;