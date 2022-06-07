import * as React from "react";
import Container from "@mui/material/Container";
import Message from "./../Components/Message";

export default function ChatDisplay() {
  // get all messages from the Messages database
  const messages = [];

  fetch("/api/messages")
  .then(res => res.json())
  .then(messages => {
    messages.forEach(messageObject => {
      const user = messageObject.user;
      const message = messageObject.message;
      messages.push( <Message user message /> );
    })
  })

  return(
    
  )
}