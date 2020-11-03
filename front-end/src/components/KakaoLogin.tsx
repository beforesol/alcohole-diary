import React, { useState, useEffect } from 'react';
import { loadJs } from '@utils/loadJs';

declare global {
  interface Window {
    kakao: any
  }
}

interface IOwnProps {
  token: string
};

const KakaoLogin: React.FC<IOwnProps> = ({
  token
}) => {
  useEffect(() => {
    loadJs('//developers.kakao.com/sdk/js/kakao.min.js', 'kakao-sdk').then(() => {
      window.kakao.init(token);
    });
  }, [])

  return (
    <button>버튼</button>
  )
};

export default KakaoLogin;