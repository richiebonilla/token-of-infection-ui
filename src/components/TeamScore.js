import React, { Component } from "react";
import "./TeamScore.scss";

class TeamScore extends Component {
  state = {
    percent: this.calculatePercent(this.props.count, this.props.total)
  };

  calculatePercent(count, total) {
    return Math.round((count / total) * 100);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ percent: this.calculatePercent(nextProps.count, nextProps.total) });
  }

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
