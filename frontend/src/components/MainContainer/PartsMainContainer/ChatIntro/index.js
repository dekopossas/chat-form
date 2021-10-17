import React from 'react';
import style from './style.module.scss';

function ChatIntro() {
  return (
    <div className={style.chatIntro}>
      {/* Não consegui usar a imagem tbm, decidi seguir em frente
      <img
        src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg"
        alt="intro chat contente"
      /> */}
      <h1>Mantenha seu Celular Conectado</h1>
      <h2>
        O WhatsApp conecta ao seu celular para sincronizar suas mensagens. Para reduzir o uso de
        dados, conecte seu celular a uma rede Wi-Fi.
      </h2>
    </div>
  );
}

export default ChatIntro;
