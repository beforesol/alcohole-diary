import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.scss';
import { Link } from 'react-router-dom';
// import KakaoLogin from 'react-kakao-login'
import KakaoLogin from '@components/KakaoLogin';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Login: React.FC<IOwnProps> = ({
}) => {
  return (
    <KakaoLogin
      token={'20e658648ba462950843d2a595aaebe8'}
    />
  )
};

export default Login;
