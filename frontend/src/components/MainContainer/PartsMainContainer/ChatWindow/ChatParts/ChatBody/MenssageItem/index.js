import React from 'react';
import style from './style.module.scss';
import './style.css';
import moment from 'moment';

function MenssageItem({ data }) {
  const formateDate = (date) => {
    moment.locale('pt-br');
    return moment(date).format('LT');
  };

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
        <div className={style.mensageDate}>{formateDate(data.time)}</div>
      </div>
    </div>
  );
}

export default MenssageItem;
