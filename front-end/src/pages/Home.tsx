import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import { Link } from 'react-router-dom';
import Calendar from '@components/Calendar';

const cx = classNames.bind(styles);
/*
TypeScript를 활용하여 React 개발을 할때의 좋은 점 중 한가지는 바로 Props를 받는 쪽에서 정할 수 있다는 점이다. 
Props로 지정할 수 있는 변수들의 이름과 형태까지 지정해 줄 수 있어서 자식 컴포넌트에 Props를 넘겨줄 때 일어나는 문제점을 미리 방지 할 수 있다.
*/
interface IOwnProps {
};

const Home: React.FC<IOwnProps> = ({
}) => {
  const [showLayer, setShowLayer] = useState(false);

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


  // -까지 해서 PR
  //vs 코드정리
  // 핸들 클릭 플러스에서 맵과 ...아이템은 스프래드연산자 인데 

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
  }

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
    <div className={cx('home')}>
      <Calendar />
      <h1>Home</h1>
      <Link to='/detail/1'>go Detail!</Link>
      <div><button onClick={() => setShowLayer(true)}>켬 </button></div>

      {AlcoholList.map((Alcohol) =>
        <div className={cx('list_item')} key={Alcohol.id}>{Alcohol.type} {Alcohol.count} {Alcohol.unit}
          <button onClick={() => handleClickPlus(Alcohol.id)} className={cx('count_button')}>+</button>
          <button onClick={() => handleClickMinus(Alcohol.id)} className={cx('count_button')}>-</button>
        </div>
      )}
      {showLayer && (
        <div className={cx('layer')}>
          레이어
          <div><button onClick={() => setShowLayer(false)}>끔 </button></div>
        </div>
      )}
    </div>
  );
};

export default Home;