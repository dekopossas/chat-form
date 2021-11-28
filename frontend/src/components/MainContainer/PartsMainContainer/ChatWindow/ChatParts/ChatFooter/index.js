import React from 'react';
import style from './style.module.scss';

function ChatFooter({
  handleOpemEmoji,
  handleCloseEmoji,
  emojiOpem,
  text,
  setText,
  handleSendClick,
  handleMicClick,
  listening,
}) {
  return (
    <div className={style.chatFooter}>
      <div className={style.chatPre}>
        <div className={style.btn} onClick={handleCloseEmoji} style={{ width: emojiOpem ? 40 : 0 }}>
          <i className="far fa-window-close" style={{ color: '#919191' }}></i>
        </div>
        <div
          className={style.btn}
          onClick={handleOpemEmoji}
          style={{ color: emojiOpem ? '#009688' : '#919191' }}
        >
          <i className="far fa-smile-wink"></i>
        </div>
      </div>
      <div className={style.chatInputArea}>
        <input
          type="text"
          className={style.chatInput}
          placeholder={listening ? 'Clique fora para parar de gravar!' : 'Digite uma mensagem'}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className={style.chatPos}>
        {text === '' && (
          <div
            className={style.btn}
            style={{ color: listening ? '#126ece' : '#919191' }}
            onClick={handleMicClick}
          >
            <i className="fas fa-microphone-alt"></i>
          </div>
        )}
        {text !== '' && (
          <div className={style.btn} onClick={handleSendClick}>
            <i className="far fa-paper-plane" style={{ color: '#919191' }}></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatFooter;
