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
      <div className="app-wrapper">
        <div className="left-side-wrapper scrollable" style={{ flexGrow: 1 }}>
          <h2
            className={
              this.state.humanCount > this.state.zombieCount
                ? "humanColor"
                : "zombieColor"
            }
            style={{
              fontWeight: 800,
              marginTop: "66px",
              textAlign: "center"
            }}
          >
            {this.state.humanCount > this.state.zombieCount
              ? "The humans are winning!"
              : this.state.humanCount < this.state.zombieCount
              ? "The zombies are winning!"
              : "It's a tie!"}
          </h2>
          <h3
            style={{
              fontWeight: 400,
              marginBottom: "56px",
              textAlign: "center",
              marginTop: 0
            }}
          >
            You are a
            {this.state.team === "zombie" ? (
              <span className="zombieColor"> {this.state.team}</span>
            ) : (
              <span className="humanColor"> {this.state.team}</span>
            )}
          </h3>
          <div className="scoreboard">
            <div className="scoreboard-inner">
              <TeamScore
                name="humans"
                count={this.state.humanCount}
                total={this.state.zombieCount + this.state.humanCount}
              />
              <TeamScore
                name="zombies"
                count={this.state.zombieCount}
                total={this.state.zombieCount + this.state.humanCount}
              />
            </div>
          </div>
          <TugOfWar
            zombies={this.state.zombieCount}
            humans={this.state.humanCount}
          />
          <div
            style={{
              display: "flex",
              justifyContents: "center",
              paddingTop: "56px",
              paddingBottom: "32px"
            }}
          >
            <div style={{ margin: "auto" }}>
              <a
                class="cta"
                href="https://opensea.io/category/token-of-infection"
                target="_blank"
              >
                <span style={{ background: "#E655A8", marginRight: "24px" }}>
                  Find Other Players
                </span>
              </a>
            </div>
          </div>
          <Readme />
        </div>
        <div className="messageboard-container scrollable">
          <MessageBoard />
        </div>
      </div>
    );
  }
}

export default App;
