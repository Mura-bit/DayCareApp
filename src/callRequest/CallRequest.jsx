import "./callRequest.style.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Kid from "../images/55166-flying-boy.json";

const defaultSendedMessage = {
    name: "",
    lastName: "",
    email: "",
    message: "",
}

const SignUpForm = () => {

    const [sendedMessage, setSendedMessage] = useState(defaultSendedMessage);

    const onClickHandler = (e) => {
        console.log(sendedMessage);
    }

const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSendedMessage((prevMessage) => ({
        ...prevMessage,
        [name]: value,
    }));
    }

    return (
      <div className="request-container">
        <div className="request-app">
          <h1 className="request-text">
            Ask your question
            <Player
              src={Kid}
              loop
              autoplay
              style={{ height: "300px", width: "300px" }}
            />
          </h1>
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
            }}
            name="name"
            label="Name"
            color="primary"
            focused
            placeholder="John"
            onChange={onChangeHandler}
            value={sendedMessage.name}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
            }}
            name="lastName"
            label="Last Name"
            color="primary"
            focused
            placeholder="Smith"
            onChange={onChangeHandler}
            value={sendedMessage.lastName}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
            }}
            name="email"
            label="Email"
            color="primary"
            focused
            placeholder="john123@gmail.com"
            onChange={onChangeHandler}
            value={sendedMessage.email}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
            }}
            name="message"
            fullWidth
            label="Type your Message"
            placeholder="I have a guestion, example: ..."
            color="primary"
            focused
            onChange={onChangeHandler}
            value={sendedMessage.message}
          />
          <Button
            sx={{
              fontSize: "1.5rem",
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
            }}
            variant="contained"
            onClick={onClickHandler}
          >
            Send
          </Button>
        </div>
      </div>
    );
}

export default SignUpForm;  