import React from 'react'
import style from './style.module.scss';

// import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
// import CloseIcon from '@mui/icons-material/Close';
// import SendIcon from '@mui/icons-material/Send';
// import MicIcon from '@mui/icons-material/Mic';

function ChatFooter() {
  return (
    <div className={style.chatFooter}>
      <div className={style.chatPre}>
        <div className={style.btn}>
          {/* <InsertEmoticonIcon style={{color: '#919191'}}/> */}
        </div>
      </div>
      <div className={style.chatInput}>

      </div>
      <div className={style.chatPos}>
        <div className={style.btn}>
          {/* <SendIcon style={{color: '#919191'}}/> */}
        </div>
      </div>
    </div>
  )
}

export default ChatFooter
