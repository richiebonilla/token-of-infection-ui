import React, { Component } from "react";
import "./MessageBoard.scss";
import Messages from "./Messages.js";
import axios from "axios";

class MessageBoard extends Component {
  state = {
    account: {},
    message: "",
    messages: []
  };

  componentDidMount() {
    this.updateMessageBoard();
    // const accounts = ethereum.enable();
    // const account = account[0];

    // this.setState({ account });
  }

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { message } = this.state;
    if (message.length < 1) return;
    axios
      .post("/api/newMessage/", { message })
      .then(res => {
        console.log(res);
        this.setState({ message: "", messages: res.data.reverse() });
      })
      .catch(err => console.log(new Error(err)));
  };

  updateMessageBoard = () => {
    axios.get("/api/getMessages/").then(res => {
      this.setState({ messages: res.data.reverse() });
    });
  };

  render() {
    return (
      <div className="message-board body">
        <div>
          <h3
            style={{
              textAlign: "center",
              marginBottom: "12px",
              marginLeft: "12px"
            }}
          >
            Troll Box
          </h3>
        </div>
        <div className="comment-box">
          <form type="POST" onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.message}
              placeholder="Add your message..."
            />
            <button type="submit">POST</button>
          </form>
        </div>
        <Messages messages={this.state.messages} />
      </div>
    );
  }
}

export default MessageBoard;
