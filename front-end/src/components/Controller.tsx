import React, { useState } from 'react';
import styles from './Controller.scss';
import classNames from 'classnames/bind';
import Close from '@src/assets/img/svg/icon_x.svg';
import { EUnit } from '@src/models/recode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/config/store';
import { updateRecode } from '@src/reducers/RecodeReducer';
import Recode from './Recode';

const cx = classNames.bind(styles);

interface IOwnProps {
};

const Controller: React.FC<IOwnProps> = ({
}) => {

  const [selectedRecodeId, setSeletedRecodeId] = useState('');
  const [showUnitLayer, setShowUnitLayer] = useState(false);
  const { recode } = useSelector((state: RootState) => state.recode);
  const dispatch = useDispatch();



  const handleClickChangeUnit = (unit: EUnit) => {
    const selectedRecode = recode.list.find(recode => recode.id === selectedRecodeId);

    dispatch(updateRecode({ ...selectedRecode, unit }));
    setShowUnitLayer(false);
  };

  return (
    <div className={cx('controller')}>
      <ul className={cx('list_set')}>
        {recode.list.map((recode) =>
          <Recode key={recode.id} recode={recode} onSetSeletedRecodeId={setSeletedRecodeId} onSetShowUnitLayer={setShowUnitLayer} />
        )}
      </ul>

      {showUnitLayer && (
        <div className={cx('unit_layer')}>
          <div className={cx('layer_inner')}>
            <button type="button" className={cx('layer_item')} onClick={() => handleClickChangeUnit(EUnit.CUP)}>잔</button>
            <button type="button" className={cx('layer_item')} onClick={() => handleClickChangeUnit(EUnit.ML)}>ml</button>
            <button type="button" className={cx('layer_item')} onClick={() => handleClickChangeUnit(EUnit.BOTTLE)}>병</button>
            <button type="button" className={cx('close_btn')} onClick={() => setShowUnitLayer(false)}>
              <Close className={cx('icon_close')} />
              <span className={cx('blind')}>닫기</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
};
export default Controller;