import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Message from "./../Components/Message";

export default function ChatDisplay() {
  // get all messages from the Messages database
  const [messageArr, setMessageArr] = useState([]);
  // const allMessages = [];

  const getMessages = () => {
    fetch("/api/messages")
      .then((data) => data.json())
      .then((messages) => {
        // data will be an array of objects, each representing a message
        messages.forEach((messageObj) => {
          // console.log(messageObj);
          // destructure message object to its properties
          const { sentBy, message, createdAt } = messageObj;

          // check to see if message exists already on list
          const existingMessage = document.getElementById(createdAt.toString());

          // if not, create new message on DOM
          // if (!existingMessage) messageArr.push(<Message user={user} message={message} timeStamp={createdAt.toString()}/>)
          if (!existingMessage) setMessageArr(messageArr => messageArr = [
            ...messageArr, 
            <Message 
              key={createdAt.toString()}
              sentBy={sentBy} 
              message={message} 
              timeStamp={createdAt}
            />])
        });
      });
  }

  // poll the server every 2 seconds for new messages
  setInterval(getMessages, 2000);

  return(
    <Container 
      component="main" 
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "60vh",
        overflowY: "scroll",
      }}  
    >
      {messageArr}
    </Container>
  )
}