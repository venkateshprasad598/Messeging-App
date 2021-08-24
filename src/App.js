import "./App.css";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Components/Message";
import db from "./Components/Firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");
  console.log(messages);

  useEffect(() => {
    db.collection("Messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => {
            return { id: doc.id, message: doc.data() };
          })
        );
      });
  }, []);

  useEffect(() => {
    const name = prompt("Enter your name");
    setUserName(name);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    db.collection("Messages").add({
      userName: userName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
    // if (input) {
    //   const newInput = [...messages, { userName: userName, message: input }];
    //   setMessages(newInput);
    //   setInput("");
    // }
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__formInput"
            type="text"
            color="secondary"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Enter a message"
          />
          <IconButton
            className="app__formIcon"
            type="submit"
            disabled={!input}
            color="secondary"
            variant="contained"
            onClick={handleClick}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => {
          //Destructuring has {id, message} = data (Instead of data, we are directly passing it's iterating keys)
          return <Message key={id} userName={userName} message={message} />;
        })}
      </FlipMove>
    </div>
  );
};

export default App;
