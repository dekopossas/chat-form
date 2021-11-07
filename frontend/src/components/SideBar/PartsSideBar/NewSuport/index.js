import React from 'react';
import style from './style.module.scss';

function NewSuport({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <div className={style.newChat} style={{ left: show ? 0 : -415 }}>
      <div className={style.newChatHeader}>
        <div className={style.newChatBackButton} onClick={handleClose}>
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
