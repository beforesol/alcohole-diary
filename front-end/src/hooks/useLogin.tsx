import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadJs } from '@src/utils/loadJs';
import { UserProfile } from '@src/models/KakaoLogin';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '@src/reducers/UserReducer';
import { firestore } from "../firebase";
import { COLLECTION } from "../firebase/collection";
import { initAlcoholeTypes } from '@src/data/alcoholeType';

const LoginContext = createContext({
  isLoadedKaKaoSdk: false,
  isLoggedin: false,
  setIsLoggedin: (_isLoggedin: boolean) => { }
});

const LoginProvider = ({ children }: { children: any }) => {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  const [isLoadedKaKaoSdk, setIsLoadedKaKaoSdk] = useState<boolean>(false);

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
            const { id, properties } = profile;
            const userStore = firestore.collection(COLLECTION.USER).doc(id.toString());

            userStore.get().then((doc) => {
              const data = doc.data();

              if (!data) {
                const { nickname, profile_image } = properties;
                const newData = {
                  id,
                  nickname,
                  profile_image,
                  alcohole_types: initAlcoholeTypes,
                };

                userStore.set(newData);
                dispatch(setUserProfile(newData));
              } else {
                dispatch(setUserProfile(data));
              }
            });
          },
        });
      }
    });
  }, []);

  return <LoginContext.Provider value={initialValue}>{children}</LoginContext.Provider>;
};

export default LoginProvider;
export const useLogin = () => useContext(LoginContext);
