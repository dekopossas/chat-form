import React from 'react';
import style from './style.module.scss';

// import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
// import CloseIcon from '@mui/icons-material/Close';
// import SendIcon from '@mui/icons-material/Send';
// import MicIcon from '@mui/icons-material/Mic';

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
          <i class="far fa-window-close" style={{ color: '#919191' }}></i>
          {/* <CloseIcon style={{color: '#919191'}}/> */}
        </div>
        <div
          className={style.btn}
          onClick={handleOpemEmoji}
          style={{ color: emojiOpem ? '#009688' : '#919191' }}
        >
          <i class="far fa-smile-wink"></i>
          {/* <InsertEmoticonIcon style={{color: '#919191'}}/> */}
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
            <i class="fas fa-microphone-alt"></i>
            {/* <MicIcon style={{color: '#919191'}}/> */}
          </div>
        )}
        {text !== '' && (
          <div className={style.btn} onClick={handleSendClick}>
            <i class="far fa-paper-plane" style={{ color: '#919191' }}></i>
            {/* <SendIcon style={{color: '#919191'}}/> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatFooter;
