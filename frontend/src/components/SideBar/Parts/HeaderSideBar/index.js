// Package
import React from 'react';

// Icons
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Styles
import style from './style.module.scss';

function HeaderSideBar() {
  return (
    <div className={style.header}>
      <img
        className={style.header_avatar}
        src="https://www.kindpng.com/picc/m/78-786678_avatar-hd-png-download.png"
        alt="avatar"
      />
      <div className={style.header_buttons}>
        <div className={style.header_icons}>
          <DonutLargeIcon style={{color: '#919191'}} />
        </div>
        <div className={style.header_icons}>
          <ChatIcon style={{color: '#919191'}} />
        </div>
        <div className={style.header_icons}>
          <MoreVertIcon style={{color: '#919191'}} />
        </div>
      </div>
    </div>
  );
}

export default HeaderSideBar;
