import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Message(props) {
  const { message, sentBy, timeStamp } = props;

  // convert the timeStamp to a time (8:32:11 PM)
  console.log('timeStamp:', timeStamp)
  // const timeString = new Date(timeStamp).toLocaleTimeString();
  // console.log('timestring:', timeString)
  

  return (
    <Box  
      id={timeStamp}
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1.25fr 4fr 1.25fr",
        columnGap: ".5em",
        alignItems: "baseline",
      }}
    >
      <Typography 
        component="span" 
        variant="subtitle1"
        sx={{fontWeight:'bold', gridColumns: "0 1"}}
      >
        {sentBy}
      </Typography>
      <Typography component="span" variant="string" sx={{gridColumns: "1 2"}}>
        {message}
      </Typography>
      <Typography 
        component="span" 
        variant="caption"
        sx={{
          fontWeight: 'light',
          justifySelf: 'flex-end',
          gridColumns: "2 3"
        }}>
        {timeStamp}
      </Typography>
    </Box>
  )
}