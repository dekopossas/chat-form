// Package
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Styles
import style from './style.module.scss';

// API
import api from '../../../../services/api';

function HeaderSideBar(prop) {
  const [user, setUser] = useState();
  // const user = {
  //   name: 'deko',
  //   id: 'andre@possas.com',
  //   avatar: '/image/avatares/avatar5.png',
  // };

  const loadData = async () => {
    const response = await api.get('/users');
    console.log(response.data);
    console.log(prop.userLogged)
    setUser(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={style.header}>
      {/* <img className={style.header_avatar} src={user.avatar} alt="avatar" /> */}
      {/* <h4>{user.name}</h4> */}
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
