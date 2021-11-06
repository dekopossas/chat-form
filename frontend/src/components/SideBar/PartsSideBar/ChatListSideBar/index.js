import React, { useState, useEffect } from 'react';
import ChatListItem from './ChatListComponents/ChatListItem';
import style from './style.module.scss';
import { connect } from 'react-redux';
import api from '../../../../services/api';
import * as ChatAction from '../../../../redux/actions/chatAction';
import './style.css';

function ChatListSideBar(prop) {
  const [data, setData] = useState();

  const loadData = async () => {
    const response = await api.get('/suport');
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="chatLists">
      <div className={style.chatList}>
        {data ? (
          data.map((contact, key) => (
            <ChatListItem
              key={key}
              data={contact}
              active={contact.name === prop.person.name}
              onClick={() => prop.selectChat(contact)}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  person: state.chatReducer.selectedPerson,
});

const mapDispatchToProp = (dispatch) => ({
  selectChat: (person) => dispatch(ChatAction.selectChat(person)),
  // setData: (data) => dispatch(ChatAction.setData(data))
});

export default connect(mapStateToProps, mapDispatchToProp)(ChatListSideBar);
