import React from 'react';
import styles from '../style.module.scss';

function HeaderSideBar() {
  return (
    <div className={styles.header}>
      <img
        className={styles.header_avatar}
        src="https://www.kindpng.com/picc/m/78-786678_avatar-hd-png-download.png"
        alt="avatar"
      />
      <div className={styles.buttons}>
        ...
      </div>
    </div>
  );
}

export default HeaderSideBar;
