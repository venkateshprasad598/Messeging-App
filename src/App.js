import "./App.css";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Components/Message";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ userName: "", text: "" }]);
  const [userName, setUserName] = useState("");
  console.log(messages);

  useEffect(() => {
    const name = prompt("Enter Your Name");
    setUserName(name);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (input) {
      const newInput = [...messages, { userName: userName, text: input }];
      setMessages(newInput);
      setInput("");
    }
  };

  return (
    <div className="App">
      {messages.map((message) => {
        return <Message userName={userName} message={message} />;
      })}

      <h1>Hello</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Type here</InputLabel>
          <Input
            type="text"
            color="secondary"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Button
            type="submit"
            disabled={!input}
            color="secondary"
            variant="contained"
            onClick={handleClick}
          >
            Send Message
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default App;
