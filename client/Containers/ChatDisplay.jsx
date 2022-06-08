import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Message from "./../Components/Message";

export default function ChatDisplay() {

  // get all messages from the Messages database
  const [messages, setmessages] = useState([]);
  const messageEl = useRef(null);

  const getMessages = () => {
    fetch("/api/messages")
      .then((data) => data.json())
      .then((messageData) => {
        // data will be an array of objects, each representing a message
        messageData.forEach((messageObj) => {
          // console.log(messageObj);
          // destructure message object to its properties
          const { sentBy, message, createdAt } = messageObj;

          const timeString = new Date(createdAt).toLocaleTimeString();

          // check to see if message exists already on list
          const existingMessage = document.getElementById(timeString);

          // if not, create new message on DOM
          if (!existingMessage) {
            setmessages(messages => messages = [
              ...messages, 
              <Message 
                key={timeString}
                sentBy={sentBy} 
                message={message} 
                timeStamp={timeString}/>
              ]
            );
            // get the latest message by id, which is the timestamp to locale time string
            const lastMessage = document.getElementById(timeString);
            console.log('last msg timestring:', timeString)

            // scroll it into view
            lastMessage.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
  }

  // immediately fetch messages
  getMessages(); 

  // useEffect(() => {
  //   if (messageEl) {
  //     messageEl.current.addEventListner('DOMNodeInserted', event => {
  //       const { currentTarget: target } = event;
  //       target.scroll({ top:target.scrollHeight, behavior: 'smooth' });
  //     });
  //   }
  // }, [])

  // useEffect(() => {
  //   getMessages()
  // }, [])

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
      {messages}
      {/* <div> ref={messageEndRef}</div> */}
    </Container>
  )
}