import React, { Component } from "react";
import "./Readme.scss";

class Readme extends Component {
  render() {
    return (
      <div style={{ margin: "auto", maxWidth: "576px" }}>
        <h3>About</h3>
        <p class="body white">
          On one gloomy day, there was a dumb male that made a mad scientist
          mad. For retribution she released a dangerous replicating virus into
          the NFT ecosystem, targeting the boy. The virus however quickly
          started to spin out of control. Wallet holders everywhere were faced
          with generative spam, and a full on zombie take-over.
        </p>
        <br />
        <h3>How to Play</h3>
        <ol class="body white">
          <li>
            It’s humans versus zombies. If you have a human in your wallet,
            you’re a human. If you have a zombie in your wallet, you’re a
            zombie.
          </li>
          <li>
            The zombies’ goal is to infect every human and turn them all into
            zombies. The humans’ goal is to eliminate the zombies and stop the
            virus.
          </li>
          <li>
            Zombies infect every human they encounter in a wallet. To infect a
            human, transfer a zombie to a human wallet.
          </li>
          <li>
            Humans aren’t powerless against a zombie. If a human sends an
            antidote grenade to a wallet with a zombie, the zombie goes back to
            being a human.
          </li>
          <li>
            When humans and zombies are transferred from wallet to wallet, they
            multiply. One copy stays in the original wallet. The other copy goes
            to infect the new wallet.{" "}
          </li>
          <li>
            Sometimes two humans or two zombies in the same wallet will like
            each other so much, a new human or new zombie will be born in that
            wallet.
          </li>
          <li>
            Token of Infection is a game played purely through transferring NFTs
            from wallet to wallet. To join the game, you’ll need a human or a
            zombie to send a human or zombie into your wallet.
          </li>
        </ol>
        <p class="body white">
          All is fair in love and war. Especially during an apocalypse.
          <br />
          <br />
          Good luck, <br />A mad, mad scientist
        </p>
      </div>
    );
  }
}

export default Readme;
