import React, { forwardRef } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import "./Message.css";

//React-flip-move // npm i -S react-flip-move
// ForwardRef is a higher order function, which is competely wrapping entire data till the last line,and ref is basically provided wherever, we want to track the changes.
const Message = forwardRef(({ userName, message }, ref) => {
  const isUser = userName === message.userName; // isUser = true
  return (
    //Now ref can track what element is moving, then it only applies it's property to it, instead of applying it to the whole previous
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      {/*Wrapping up the card in a div and aligning it either left or a right, based on a isUser condition*/}
      {message.message ? (
        <Card className={isUser ? "message__userCard" : "message__guestCard"}>
          {/*Performing action on a card */}
          <CardContent>
            <Typography color="white" variant="h5" component="h2">
              {!isUser && `${message.userName || "unknown"} : `}
              {message.message}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
});
export default Message;
