import React from 'react';
import style from './style.module.scss';

function NewSuport() {
  return (
    <div className={style.newChat}>
      <div className={style.newChatHeader}>
        <div className={style.newChatBackButton}>
          <i className="fas fa-arrow-left" style={{ color: '#FFF' }} />
        </div>
        <div className={style.newChatHeadTitle}>Novo Atendimento</div>
      </div>
      <div className={style.newChatList}>
        <div className={style.newChatItem}>
          <img className={style.newChatItemAvatar} src="/image/avatares/plus.png" alt="newchat" />
          <div className={style.newChatItemName}>Deseja Iniciar Um Novo Atendimento?</div>
        </div>
      </div>
    </div>
  );
}

export default NewSuport;
