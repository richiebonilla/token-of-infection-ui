import React, { Component } from "react";
import "./MessageBoard.scss";

class MessageBoard extends Component {
  state = {
    messages: [
      {
        id: 8,
        author: "John Appleseed",
        team: "zombie",
        message: "hello world",
        time: "2019-09-06 23:53:46"
      }
    ]
  };

  componentDidMount() {
    // fetch messages and set state
  }

  render() {
    const people = [
      "👩",
      "👩🏻",
      "👩🏼",
      "👩🏽",
      "👩🏾",
      "👩🏿",
      "👨",
      "👨🏻",
      "👨🏼",
      "👨🏽",
      "👨🏾",
      "👨🏿"
    ];
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className="message-board body">
          <div>
            <h3 style={{ marginBottom: "12px", marginLeft: "12px" }}>
              Message Board
            </h3>
            <button>post</button>
          </div>
          <div className="messages-container">
            <div className="comment-box">
              <form type="POST">
                <texarea placeholder="Add your message..." />
                <input type="submit" />
              </form>
            </div>
            {this.state.messages.map(msg => (
              <div key={msg.id} className="message" style={{ display: "flex" }}>
                <div style={{ fontSize: "32px", paddingRight: "12px" }}>
                  {msg.team === "zombie"
                    ? "🧟"
                    : people[Math.floor(Math.random() * people.length)]}
                </div>
                <div>
                  <div className="message__body caption">{msg.message}</div>
                  <div className="message__caption">
                    <div className="message__author caption disabled">
                      {msg.author} at {msg.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MessageBoard;
