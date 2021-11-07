import React from 'react';
import style from './style.module.scss';

function NewSuport() {
  return (
    <div className={style.newChat}>
      <div className={style.newChatHeader}>
        <div className={style.newChatBackButton}>
          <i class="fas fa-arrow-left" style={{ color: '#FFF' }} />
        </div>
        <div className={style.newChatHeadTitle}>Novo Atendimento</div>
      </div>
    </div>
  );
}

export default NewSuport;
