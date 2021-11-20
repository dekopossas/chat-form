import React from 'react';
import style from './style.module.scss';
import './style.css';

function MenssageItem({ data, player }) {
  return (
    <div
      className={style.mensageLine}
      style={{
        justifyContent: 'bot' === data.author ? 'flex-start' : 'flex-end',
      }}
    >
      <div
        className={style.mensageItem}
        style={{ backgroundColor: 'bot' === data.author ? '#fff' : '#dcf8c6' }}
      >
        <div className={style.mensageText}>{data.body}</div>
        <div className={style.mensageDate}>19:00</div>
      </div>
    </div>
  );
}

export default MenssageItem;
