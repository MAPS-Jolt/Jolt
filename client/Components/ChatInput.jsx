import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";



export default function ChatInput() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // get the typed text from the user
    const text = new FormData(event.currentTarget).get("chat-input-text");

    // get the current user's userId & username 
    // const user = document.cookies
    // const userId = ...

    // make a post request, passing in userId as parameter
    // fetch(`/api/messages/${userId}`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json; charset=utf-8" },
    //   body: JSON.stringify({
    //     // send user info in an object
    //     user: {
    //       _id: userId, 
    //       username
    //     },
    //     // send message text
    //     message: text,
    //   }),
    // })
    // .then(res => res.json())
    // .then(data => {

    // })

    alert(text);
  }

  return (  
    <Container component="main" maxWidth="xs">
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        noValidate 
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1em"
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar> */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="chat-input-text"
          label=""
          name="chat-input-text"
          autoFocus
          sx={{
            width: "200%"
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            justifySelf: "flex-end"
          }}
        >
          Send
        </Button>
      </Box>
    </Container>
  )
}