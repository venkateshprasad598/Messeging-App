import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import "./Message.css";

const Message = ({ userName, message }) => {
  const isUser = userName === message.userName; // isUser = true
  return (
    <div className={`message ${isUser && "message__user"}`}>
      {/*Wrapping up the card in a div and aligning it either left or a right, based on a isUser condition*/}
      {message.text ? (
        <Card className={isUser ? "message__userCard" : "message__guestCard"}>
          {/*Performing action on a card */}
          <CardContent>
            <Typography color="white" variant="h5" component="h2">
              {message.userName}: {message.text}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};
export default Message;
