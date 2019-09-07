import React, { Component } from "react";
import "./MessageBoard.scss";
import Messages from "./Messages.js";
import axios from "axios";

class MessageBoard extends Component {
  state = {
    message: "",
    messages: []
  };

  componentDidMount() {
    this.updateMessageBoard();
  }

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    const { message } = this.state;
    axios
      .post("/api/newMessage/", { message })
      .then(res => {
        console.log(res);
        this.setState({ messages: res.data });
      })
      .catch(err => console.log(new Error(err)));
    e.preventDefault();
  };

  updateMessageBoard = () => {
    axios.get("/api/getMessages/").then(res => {
      console.log(res);
      this.setState({ messages: res.data });
    });
  };

  render() {
    return (
      <div className="message-board body">
        <div>
          <h3 style={{ marginBottom: "12px", marginLeft: "12px" }}>
            Message Board
          </h3>
        </div>
        <div className="comment-box">
          <form type="POST" onSubmit={this.handleSubmit}>
            <textarea
              onChange={this.handleChange}
              value={this.state.message}
              placeholder="Add your message..."
            />
            <input type="submit" />
          </form>
        </div>
        <Messages messages={this.state.messages} />
      </div>
    );
  }
}

export default MessageBoard;
