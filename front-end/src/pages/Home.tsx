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

  return (
    <div className={cx('home')}>
      <Calendar />

      {showLayer && (
        <div className={cx('layer')}>
          <div><button onClick={() => setShowLayer(false)}>끔 </button></div>
        </div>
      )}
    </div>
  );
};

export default Home;
