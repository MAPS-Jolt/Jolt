import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Message from "./../Components/Message";

export default function ChatDisplay() {
  // get all messages from the Messages database
  const [messageArr, setMessageArr] = useState([]);

  // const messageArr = [];

  fetch("/api/messages")
  .then(res => res.json())
  .then(messages => {
    messages.forEach(messageObj => {
      const { user, message } = messageObj;
      // messageArr.push(<Message user={user} message={message} />)
      setMessageArr(msgArr => msgArr = [...msgArr, <Message user={user} message={message} />]);
    })
    console.log(messageArr);
  })

  return(
    <div>
      {messageArr}
    </div>
  )
}