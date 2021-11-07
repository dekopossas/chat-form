import React from 'react';
import style from './style.module.scss';

function NewSuport() {
  return (
    <div className={style.newChat}>
      <div className={style.newChatHeader}>
        <div className={style.newChatBackButton}></div>
        <div className={style.newChatHeadTitle}>Novo Atendimento</div>
      </div>
    </div>
  );
}

export default NewSuport;
