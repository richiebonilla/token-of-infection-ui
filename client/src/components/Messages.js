import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Messages.scss";

class Messages extends Component {
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
      <div className="messages-container">
        {this.props.messages.map(msg => (
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
    );
  }
}

export default Messages;
