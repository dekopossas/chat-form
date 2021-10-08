import React from 'react'
import HeaderSideBar from './Parts/HeaderSideBar';
import style from './style.module.scss';

function SideBar() {
  return (
    <div className={style.sidebar}>
      <HeaderSideBar />
      ...
    </div>
  )
}

export default SideBar
