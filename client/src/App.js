import React, { Component } from "react";
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
    fetch("api/getCounts").then(async res => {
      res = await res.json();
      let humanCount = res.humanCount;
      let zombieCount = res.zombieCount;
      this.setState({
        humanCount: parseInt(humanCount, 10),
        zombieCount: parseInt(zombieCount, 10)
      });
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
