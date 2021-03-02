import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AddAlcohol.scss';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@src/routes';
import Close from '@src/assets/img/svg/icon_x.svg';
import ConfirmLayer from '@src/components/ConfirmLayer';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const AddAlcohol: React.FC<IOwnProps> = ({

}) => {
  const [title, setTitle] = useState<string>('');
  const [cup, setCup] = useState<string>('');
  const [bottle, setBottle] = useState<string>('');

return (
  <div className={cx('add_alcohol')}>
    <div className={cx('title_area')}>
      <Link to={ROUTE_PATH.SELECT.path} className={cx('close_btn')}>
        <Close className={cx('icon_close')} />
      </Link>
      <h2 className={cx('title')}>주종 추가</h2>
    </div>
    <div className={cx('input_area')}>
      <div className={cx('info')}>
        <strong className={cx('title')}>방 제목</strong>
        <input className={cx('text')} value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
      </div>
      <div className={cx('info')}>
        <strong className={cx('title')}>1잔 (ml)</strong>
        <input className={cx('text')} value={cup} onChange={(e) => setCup(e.currentTarget.value)}/>
      </div>
      <div className={cx('info')}>
        <strong className={cx('title')}>1컵 (ml)</strong>
        <input className={cx('text')} value={bottle} onChange={(e) => setBottle(e.currentTarget.value)}/>
      </div>
      <div className={cx('info')}>
        <strong className={cx('title')}>썸네일</strong>
        <input type="file" className={cx('input_file')}/>
        <div className={cx('thumb')}>
          <img src="https://www.polinews.co.kr/data/photos/20200208/art_15822778407469_5cb30d.jpg" alt=""/>
        </div>
      </div>
    </div>
    <div className={cx('btn_area')}>
      <button type="button" className={cx('btn')}>저장하기</button>
    </div>
    {/* <ConfirmLayer text={'저장하시겠습니까?'} /> */}
  </div>
  );
};

export default AddAlcohol;