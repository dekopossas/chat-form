import React from 'react';
import style from './style.module.scss';
import './style.css';

function MenssageItem({ data, player }) {
  return (
    <div
      className={style.mensageLine}
      style={{
        justifyContent: player.id === data.author ? 'flex-end' : 'flex-start',
      }}
    >
      <div
        className={style.mensageItem}
        style={{ backgroundColor: player.id === data.author ? '#dcf8c6' : '#fff' }}
      >
        <div className={style.mensageText}>{data.body}</div>
        <div className={style.mensageDate}>19:00</div>
      </div>
    </div>
  );
}

export default MenssageItem;
