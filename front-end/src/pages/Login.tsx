import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.scss';
import { Link } from 'react-router-dom';
// import KakaoLogin from 'react-kakao-login'
import KakaoLogin from '@components/KakaoLogin';
import { UserProfile } from 'alcoholeDiary';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Login: React.FC<IOwnProps> = ({
}) => {
  return (
    <div className={cx('kakao_login_wrap')}>
      <KakaoLogin
        onSuccess={(res: any) => { console.log(res) }}
        onFail={() => { console.log('fail login') }}
        onLogout={() => { alert('로그아웃 되었습니다') }}
      />
    </div>
  )
};

export default Login;
