import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";



export default function ChatInput() {
  const handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault();

    // get the typed text from the user
    const text = new FormData(event.currentTarget).get("chat-input-text");

    // if the text isn't empty
    if (text.length > 0) {
      // make a post request
      fetch(`/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          // send message text
          message: text,
        }),
        // user should have a cookie with their username
        credentials: 'include',
      })
      // .then(() => {
      //   console.log('the text should clear...')
      //   // get the textbox element
      //   const textBox = document.getElementById("chat-input-text");
      //   // clear the text
      //   textBox.value = '';
      // })
    }
    console.log('the text should clear...')
    // get the textbox element
    const textBox = document.getElementById("chat-input-text");
    // clear the text
    textBox.value = '';

  }

  return (  
    <Container component="main" sx={{width: "100%",}}>
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        noValidate 
        sx={{
          width: "100%",
          marginTop: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1em"
        }}
      >
        <Avatar sx={{ bgcolor: "secondary.main" }}></Avatar>
        <TextField
          margin="normal"
          required
          fullWidth
          id="chat-input-text"
          label=""
          name="chat-input-text"
          autoFocus
          sx={{
            width: "200%",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            justifySelf: "flex-end",
            height: "100%"
          }}
        >
          Send
        </Button>
      </Box>
    </Container>
  )
}