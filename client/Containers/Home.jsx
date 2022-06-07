import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import ChatInput from "./../Components/ChatInput";
import ChatDisplay from "./ChatDisplay";

export default function Home(){

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ChatDisplay />
        <ChatInput />
      </Box>
      
    </Container>
  )
}