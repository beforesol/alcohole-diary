import React from 'react';
import { KakaoLoginProps, LoginResponse, UserProfile } from 'alcoholeDiary';

import styles from './KakaoLogin.scss';
import classNames from 'classnames/bind';
import { useLogin } from '@hooks/useLogin';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '@reducers/UserReducer';

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
  const { isLoggedin, setIsLoggedin } = useLogin();
  const dispatch = useDispatch();

  const login = () => {
    window.Kakao?.Auth.login({
      throughTalk,
      persistAccessToken,
      success: onSuccess,
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
      dispatch(setUserProfile(null));
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
      {isLoggedin && (
        <button
          type="button"
          onClick={handleClickLogOutIn}
          className={cx('login_text')}
        >
          다른 아이디로 로그인 하기
        </button>
      )}
    </div>
  )
};

export default KakaoLogin;