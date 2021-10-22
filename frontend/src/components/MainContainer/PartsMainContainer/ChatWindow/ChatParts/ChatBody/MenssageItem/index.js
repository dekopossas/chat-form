import React from 'react';
import style from './style.module.scss';

function MenssageItem() {
  return (
    <div className={style.mensageLine}>
      <div className={style.mensageItem}>
        <div className={style.mensageText}>Agora Vai!</div>
        <div className={style.mensageDate}>19:00</div>
      </div>
    </div>
  );
}

export default MenssageItem;
