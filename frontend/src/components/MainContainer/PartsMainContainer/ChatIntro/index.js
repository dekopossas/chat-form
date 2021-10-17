import React from 'react';
import style from './style.module.scss';

function ChatIntro() {
  return (
    <div className={style.chatIntro}>
      <img className={style.introImg} src="/image/whatsapp.png" alt="intro chat contente" />
      <h1>Mantenha seu Celular Conectado</h1>
      <h2>
        O WhatsApp conecta ao seu celular para sincronizar suas mensagens. Para reduzir o uso de
        dados, conecte seu celular a uma rede Wi-Fi.
      </h2>
    </div>
  );
}

export default ChatIntro;
