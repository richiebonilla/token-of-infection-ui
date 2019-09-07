import React, { Component } from "react";
import "./TeamScore.scss";

class TeamScore extends Component {
  state = {
    percent: Math.round((this.props.count / this.props.total) * 100)
  };

  render() {
    return (
      <div className="team-score">
        <h1 style={{ marginTop: 0, marginBottom: 0 }}>{this.props.count}</h1>
        <h3
          className={
            this.props.name === "zombies" ? "zombieColor" : "humanColor"
          }
          style={{ marginTop: 0, marginBottom: "44px", fontWeight: 400 }}
        >
          {this.props.name}
        </h3>
        <h3 style={{ marginTop: 0, marginBottom: 0, fontWeight: 400 }}>
          {this.state.percent}%
        </h3>
      </div>
    );
  }
}

export default TeamScore;
