import React from 'react';
import chatperson from "../../img/chat_message_person.png"


function MessageItem({ name, message, time, count }) {
  return (
    <div className="message-item">
      <img src={chatperson} alt={`${name}`} className="avatar" />
      <div className="message-info">
        <div className="message-header">
          <span className="name">{name}</span>
          <span className="time">{time}</span>
        </div>
        <p className="message">{message}</p>
      </div>
      <div className="message-count">{count}</div>
    </div>
  );
}

export default MessageItem;
