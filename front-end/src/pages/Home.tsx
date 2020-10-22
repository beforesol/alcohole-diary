import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Home: React.FC<IOwnProps> = ({

}) => {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/detail/1'>go Detail!</Link>
    </div>
  );
};

export default Home;
