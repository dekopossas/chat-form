// Package
import React from 'react';
import style from './style.module.scss';

// Ícons (mais uma vez icons q não consigo usar)
// import SearchIcon from '@mui/icons-material/Search';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ChatHeader() {
  return (
    <div className={style.chatHeader}>
      <div className={style.chatInfo}>
        <img src="/image/avatares/avatar1.png" alt="" className={style.avatar} />
        <div className={style.name}>André Possas</div>
      </div>
      <div className={style.header_buttons}>
        <div className={style.btn}>
          {/* <SearchIcon style={{color: '#919191'}}/> */}
        </div>
        <div className={style.btn}>
          {/* <AttachFileIcon style={{color: '#919191'}}/> */}
        </div>
        <div className={style.btn}>
          {/* <MoreHorizIcon style={{color: '#919191'}}/> */}
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
