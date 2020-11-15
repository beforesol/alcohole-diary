import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadJs } from '@utils/loadJs';
import { UserProfile } from 'alcoholeDiary';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '@reducers/UserReducer';

const LoginContext = createContext({
  isLoadedKaKaoSdk: false,
  isLoggedin: false,
  setIsLoggedin: (_isLoggedin: boolean) => { }
});

const LoginProvider = ({ children }: { children: any }) => {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  const [isLoadedKaKaoSdk, setIsLoadedKaKaoSdk] = useState(false);

  const dispatch = useDispatch();

  const initialValue = {
    isLoadedKaKaoSdk,
    isLoggedin,
    setIsLoggedin
  }

  useEffect(() => {
    loadJs('//developers.kakao.com/sdk/js/kakao.min.js', 'kakao-sdk').then(() => {
      window.Kakao?.init('20e658648ba462950843d2a595aaebe8');

      const isLogin = window.Kakao.Auth.getAccessToken();
      setIsLoadedKaKaoSdk(true);

      if (isLogin) {
        setIsLoggedin(true);
        window.Kakao?.API.request({
          url: "/v2/user/me",
          success: (profile: UserProfile) => {
            dispatch(setUserProfile(profile))
            // dispatch()
          },
        });
      }
    });
  }, []);

  return <LoginContext.Provider value={initialValue}>{children}</LoginContext.Provider>;
};

export default LoginProvider;
export const useLogin = () => useContext(LoginContext);