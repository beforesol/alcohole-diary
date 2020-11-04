import React, { useState, useEffect } from 'react';
import { loadJs } from '@utils/loadJs';
import { KakaoLoginProps, LoginResponse, UserProfile } from 'alcoholeDiary';

import styles from './KakaoLogin.scss';
import classNames from 'classnames/bind';
import { useHistory } from 'react-router';
import { ROUTE_PATH } from '../routes';

const cx = classNames.bind(styles);


declare global {
  interface Window {
    Kakao: any
  }
}


const KakaoLogin: React.FC<KakaoLoginProps> = ({
  onLogout,
  onSuccess,
  onFail,
  throughTalk = true,
  persistAccessToken = true,
}) => {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(window.Kakao?.Auth.getAccessToken());
  const history = useHistory();

  const login = () => {
    window.Kakao?.Auth.login({
      throughTalk,
      persistAccessToken,
      success: (response: LoginResponse) => {
        setIsLoggedin(true);
        onSuccess({ response });
        window.Kakao?.API.request({
          url: "/v2/user/me",
          success: (_profile: UserProfile) => {
            // dispatch(setUserProfile(profile))
            history.push(ROUTE_PATH.HOME.path);
          },
          fail: onFail,
        });
      },
      fail: onFail
    });
  }

  const handleClickLogin = () => {
    login();
  }

  const handleClickLogout = () => {
    window.Kakao?.Auth.logout(() => {
      onLogout?.();
      setIsLoggedin(false);
    });
  }

  const handleClickLogOutIn = () => {
    window.Kakao.API.request({
      url: '/v1/user/unlink',
      success: function () {
        login();
      },
    });
  }

  const loginText = isLoggedin ? '로그아웃' : '로그인';
  const onClick = isLoggedin ? handleClickLogout : handleClickLogin;

  return (
    <div className={cx('kakao_login')}>
      <button
        type="button"
        onClick={onClick}
        className={cx('login_btn')}
      >
        {`카카오 계정 ${loginText}`}
      </button>
      <button
        type="button"
        onClick={handleClickLogOutIn}
        className={cx('login_text')}
      >
        다른 아이디로 로그인 하기
      </button>
    </div>
  )
};

export default KakaoLogin;