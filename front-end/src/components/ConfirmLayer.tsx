import React from 'react';
import classNames from 'classnames/bind';

import styles from './ConfirmLayer.scss';
const cx = classNames.bind(styles);

interface IOwnProps {
  text: string
};

const ConfirmLayer: React.FC<IOwnProps> = ({
  text
}) => {
  return (
    <div className={cx('confirm_layer')}>
      <div className={cx('dimmed')} />
      <div className={cx('layer_inner')}>
        <div className={cx('text_area')}>{text}</div>
        <div className={cx('btn_area')}>
          <button className={cx('btn')}>확인</button>
          <button className={cx('btn')}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLayer;
