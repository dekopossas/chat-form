// Package
import React from 'react';
import { connect } from 'react-redux';

// Icons (não consegui usar os indos decidi não perder tempo aqui mais!)
// import DonutLargeIcon from '@mui/icons-material/DonutLarge';
// import ChatIcon from '@mui/icons-material/Chat';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// Styles
import style from './style.module.scss';

function HeaderSideBar(prop) {
  console.log(prop)
  return (
    <div className={style.header}>
      <img
        className={style.header_avatar}
        src={ prop.userLogged.avatar }
        alt="avatar"
      />
      <div className={style.header_buttons}>
        <div className={style.header_icons}>
        <i class="fas fa-sync-alt" style={{color: '#919191'}} ></i>
          {/* <DonutLargeIcon style={{color: '#919191'}} /> */}
        </div>
        <div className={style.header_icons}>
        <i class="fas fa-comments" style={{color: '#919191'}} ></i>
          {/* <ChatIcon style={{color: '#919191'}} /> */}
        </div>
        <div className={style.header_icons}>
        <i class="fas fa-list-ul" style={{color: '#919191'}} ></i>
          {/* <MoreVertIcon style={{color: '#919191'}} /> */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userLogged: state.userReducer.userLogged,
});

export default connect(mapStateToProps)(HeaderSideBar);
