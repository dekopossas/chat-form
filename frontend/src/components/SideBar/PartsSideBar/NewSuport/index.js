import React from 'react';
import style from './style.module.scss';
import { Redirect } from 'react-router';

import { useTranslation } from 'react-i18next';

function NewSuport({ show, setShow, handleNewChat }) {
  const handleClose = () => setShow(false);
  const { t } = useTranslation();
  const player = JSON.parse(localStorage.getItem('player'));

  if (!player) return <Redirect to="/" />;

  return (
    <div className={style.newChat} style={{ left: show ? 0 : -415 }}>
      <div className={style.newChatHeader}>
        <div className={style.newChatBackButton} onClick={handleClose}>
          <i className="fas fa-arrow-left" style={{ color: '#FFF' }} />
        </div>
        <div className={style.newChatHeadTitle}>{t('New Suport')}</div>
      </div>
      <div className={style.newChatList}>
        <div className={style.newChatItem} onClick={handleNewChat}>
          <img className={style.newChatItemAvatar} src="/image/avatares/plus.png" alt="newchat" />
          <div className={style.newChatItemName}>
            {t('Do you want to start a new service?')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSuport;
