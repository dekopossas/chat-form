import React from 'react';
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
        ...
      </div>
    </div>
  );
}

export default HeaderSideBar;
