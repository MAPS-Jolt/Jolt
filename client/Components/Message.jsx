import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Message(props) {
  const { message, user } = props;

  console.log(user);

  // const username = user.username;
  // const messageText = message;

  return (
    <Box  
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1em"
      }}
    >
      <Typography 
        component="h1" 
        variant="h5"
      >
        {user.username}
      </Typography>
      <Typography component="h1" variant="h5">
        {message}
      </Typography>
    </Box>
  )
}