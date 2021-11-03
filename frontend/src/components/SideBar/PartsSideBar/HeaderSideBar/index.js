// Package
import React from 'react';
import { connect } from 'react-redux';

// Styles
import style from './style.module.scss';

function HeaderSideBar(prop) {
  console.log(prop);
  return (
    <div className={style.header}>
      <img className={style.header_avatar} src={prop.userLogged.avatar} alt="avatar" />
      <h4>{prop.userLogged.name}</h4>
      <div className={style.header_buttons}>
        <div className={style.header_icons}>
          <i class="fas fa-sync-alt" style={{ color: '#919191' }}></i>
        </div>
        <div className={style.header_icons}>
          <i class="fas fa-comments" style={{ color: '#919191' }}></i>
        </div>
        <div className={style.header_icons}>
          <i class="fas fa-list-ul" style={{ color: '#919191' }}></i>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userLogged: state.userReducer.userLogged,
});

export default connect(mapStateToProps)(HeaderSideBar);
