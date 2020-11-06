import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.scss';
import KakaoLogin from '@components/KakaoLogin';
import { UserProfile } from 'alcoholeDiary';
import { ROUTE_PATH } from '../routes';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Login: React.FC<IOwnProps> = ({
}) => {
  const handleSuccess = () => {
    window.location.href = ROUTE_PATH.HOME.path;
  }

  const handleFail = () => {
    console.log('fail login');
  }

  const handleLogout = () => {
    alert('로그아웃 되었습니다;')
  }

  return (
    <div className={cx('kakao_login_wrap')}>
      <KakaoLogin
        onSuccess={handleSuccess}
        onFail={handleFail}
        onLogout={handleLogout}
      />
    </div>
  )
};

export default Login;
