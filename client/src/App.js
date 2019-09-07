import React, { Component } from "react";
//import Web3Connect from "web3connect";
import web3Helper from "./web3/web3-helper.js";
import TeamScore from "./components/TeamScore.js";
import TugOfWar from "./components/TugOfWar.js";
import MessageBoard from "./components/MessageBoard.js";
import Readme from "./components/Readme.js";
import "./App.scss";

class App extends Component {
  state = {
    team: "zombie",
    humanCount: 0,
    zombieCount: 0
  };

  componentDidMount() {
    this.updateCounts();
  }

  async updateCounts() {
    let humanCount = await web3Helper.humanCount();
    let zombieCount = await web3Helper.zombieCount();
    this.setState({
      humanCount: parseInt(humanCount, 10),
      zombieCount: parseInt(zombieCount, 10)
    });
  }

  render() {
    return (
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <h2
            className={
              this.state.team === "human" ? "humanColor" : "zombieColor"
            }
            style={{
              fontWeight: 400,
              marginTop: "66px",
              marginBottom: "56px",
              textAlign: "center"
            }}
          >
            You are a {this.state.team}
          </h2>
          <div className="scoreboard">
            <div className="scoreboard-inner">
              <div>
                <TeamScore
                  name="humans"
                  count={this.state.humanCount}
                  total={this.state.zombieCount + this.state.humanCount}
                />
              </div>
              <div>
                <TeamScore
                  name="zombies"
                  count={this.state.zombieCount}
                  total={this.state.zombieCount + this.state.humanCount}
                />
              </div>
            </div>
          </div>
          <TugOfWar
            zombies={this.state.zombieCount}
            humans={this.state.humanCount}
          />
          <Readme />
        </div>
        <div
          style={{
            maxWidth: "360px",
            minWidth: "280px",
            paddingLeft: "16px",
            paddingRight: "16px",
            borderLeft: "solid 1px rgba(255,255,255,0.2)",
            overflowY: "scroll"
          }}
        >
          <MessageBoard />
        </div>
      </div>
    );
  }
}

export default App;
