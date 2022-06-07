import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Message(props) {
  const { msgText, username } = props;

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
        {username}
      </Typography>
      <Typography component="h1" variant="h5">
        {msgText}
      </Typography>
    </Box>
  )
}