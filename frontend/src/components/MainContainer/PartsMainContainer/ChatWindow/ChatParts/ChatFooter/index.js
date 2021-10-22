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
          X{/* <CloseIcon style={{color: '#919191'}}/> */}
        </div>
        <div
          className={style.btn}
          onClick={handleOpemEmoji}
          style={{ color: emojiOpem ? '#009688' : '#919191' }}
        >
          O{/* <InsertEmoticonIcon style={{color: '#919191'}}/> */}
        </div>
      </div>
      <div className={style.chatInputArea}>
        <input
          type="text"
          className={style.chatInput}
          placeholder={listening ? 'Clique fora para parar de gravar!' : "Digite uma mensagem"}
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
            M{/* <MicIcon style={{color: '#919191'}}/> */}
          </div>
        )}
        {text !== '' && (
          <div className={style.btn} onClick={handleSendClick}>
            V{/* <SendIcon style={{color: '#919191'}}/> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatFooter;
