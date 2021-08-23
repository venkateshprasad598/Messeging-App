import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import "./Message.css";

const Message = ({ userName, message }) => {
  const isUser = userName === message.userName;
  return (
    <div>
      {message.text ? (
        <Card className={`message ${isUser && "message__user"}`}>
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
