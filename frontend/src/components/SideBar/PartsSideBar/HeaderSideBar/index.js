// Package
import React, { useEffect } from 'react';
import * as userActions from '../../redux/actions/userActions'
import { connect } from 'react-redux';

// Styles
import style from './style.module.scss';

function HeaderSideBar(prop) {
  const player = JSON.parse(localStorage.getItem('player'));


  useEffect(() => {
    prop.setUser(player);
  }, [player, prop]);

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

const mapDispatchToProp = (dispatch) => ({
  setUser: (user) => dispatch(userActions.setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProp)(HeaderSideBar);
