import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import ChatInput from "./../Components/ChatInput";
import ChatDisplay from "./ChatDisplay";

export default function Home(){

  return (
    <Container 
      component="main" 
      sx={{
        padding:"3rem",
        minWidth:"400px",
        width: "90vw",
      }}
    >
      <ChatDisplay />
      <ChatInput />      
    </Container>
  )
}