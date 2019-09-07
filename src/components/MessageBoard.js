import React, { Component } from "react";
import "./MessageBoard.scss";

class MessageBoard extends Component {
  state = {
    messages: [
      {
        id: 1,
        author: "John Appleseed",
        team: "zombie",
        message:
          "hello, i'm trying to infect more people. does anyone have any enemies I can send a token of infection to?",
        time: "2019-09-06 23:53:46"
      },
      {
        id: 2,
        author: "John Appleseed",
        team: "yellow",
        message: "hello world",
        time: "2019-09-06 23:53:46"
      },
      {
        id: 3,
        author: "John Appleseed",
        team: "yellow",
        message: "hello world",
        time: "2019-09-06 23:53:46"
      },
      {
        id: 4,
        author: "John Appleseed",
        team: "yellow",
        message: "hello world",
        time: "2019-09-06 23:53:46"
      },
      {
        id: 5,
        author: "John Appleseed",
        team: "yellow",
        message: "hello world",
        time: "2019-09-06 23:53:46"
      },
      {
        id: 6,
        author: "John Appleseed",
        team: "yellow",
        message: "hello world",
        time: "2019-09-06 23:53:46"
      },
      {
        id: 7,
        author: "John Appleseed",
        team: "yellow",
        message: "hello world",
        time: "2019-09-06 23:53:46"
      },
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
          justifyContent: "center",
          paddingTop: "64px"
        }}
      >
        <div className="message-board body" style={{ textAlign: "center" }}>
          <h2>Message Board</h2>
          <div className="messages-container">
            {this.state.messages.map(msg => (
              <div key={msg.id} className="message">
                <div className="message__body">{msg.message}</div>
                <div className="message__caption">
                  <div className="message__author">
                    <span style={{ fontSize: "24px", marginRight: "10px" }}>
                      {msg.team === "zombie"
                        ? "🧟"
                        : people[Math.floor(Math.random() * people.length)]}
                    </span>
                    {msg.author} at
                    {msg.time}
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
