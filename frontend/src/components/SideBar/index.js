import React from 'react'
import HeaderSideBar from './PartsSideBar/HeaderSideBar';
import SearchSideBar from './PartsSideBar/SearchSideBar';
import style from './style.module.scss';

function SideBar() {
  return (
    <div className={style.sidebar}>
      <HeaderSideBar />
      <SearchSideBar />
    </div>
  )
}

export default SideBar
