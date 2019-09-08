import React, { Component } from "react";
import "./TugOfWar.scss";

class TugOfWar extends Component {
  calculateBoxesFromCounts(zombieCount, humanCount) {
    const total = zombieCount + humanCount;
    const percentZombies = Math.round((zombieCount / total) * 100);
    const percentHumans = Math.round((humanCount / total) * 100);

    return { percentZombies, percentHumans };
  }

  render() {
    const { percentZombies, percentHumans } = this.calculateBoxesFromCounts(
      this.props.zombies,
      this.props.humans
    );

    let zombieDivs = [];

    for (let i = 0; i < percentZombies; i++) {
      zombieDivs.push(<div key={i} className="zombie-pixel" />);
    }

    let humanDivs = [];

    for (let i = 0; i < percentHumans; i++) {
      humanDivs.push(<div key={i} className="human-pixel" />);
    }

    return (
      <>
        <div
          className="tug-of-war"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "32px"
          }}
        >
          <div>
            {humanDivs.map(div => div)}
            {zombieDivs.map(div => div)}
          </div>
        </div>
      </>
    );
  }
}

export default TugOfWar;
