import React from 'react';
import style from './style.module.scss';

function MenssageItem({ data }) {
  return (
    <div className={style.mensageLine} style={{ justifyContent: 'flex-end' }}>
      <div className={style.mensageItem}>
        <div className={style.mensageText}>{data.body}</div>
        <div className={style.mensageDate}>19:00</div>
      </div>
    </div>
  );
}

export default MenssageItem;
