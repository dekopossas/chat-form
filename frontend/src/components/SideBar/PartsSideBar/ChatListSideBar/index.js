import React, { useState, useEffect } from 'react';
import ChatListItem from './ChatListComponents/ChatListItem';
import style from './style.module.scss';
import { connect } from 'react-redux';
import api from '../../../../services/api';
import * as ChatAction from '../../../../redux/actions/chatAction';

function ChatListSideBar({selectChat}) {
  const [data, seteData] = useState();
  const [activeChat, setActiveChat] = useState();

  const loadData = async () => {
    const response = await api.get('/suport');
    seteData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={style.chatList}>
      {data ? (
        data.map((contact, key) => (
          <ChatListItem
            key={key}
            data={contact}
            action={true}
            onClick={() => selectChat(contact[key])}
          />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

const mapDispatchToProp = (dispatch) => ({
  selectChat: (person) => dispatch(ChatAction.selectChat(person)),
});

export default connect(null, mapDispatchToProp)(ChatListSideBar);
