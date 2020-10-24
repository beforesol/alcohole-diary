import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Home: React.FC<IOwnProps> = ({

}) => {
  const [showLayer, setShowLayer] = useState(false);
  return (
    <div>
      <h1>Home</h1>
      <Link to='/detail/1'>go Detail!</Link>
      <div><button>버튼</button></div>
      {showLayer && (
        <div className={cx('layer')}>레이어</div>
      )}
    </div>
  );
};

export default Home;
