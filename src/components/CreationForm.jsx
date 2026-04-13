import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassSelection from "./ClassSelection";

export default function CreationForm() {
  const [selectedRace, setSelectedRace] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [currStats, setCurrStats] = useState({});
  const [baseStats, setBaseStats] = useState({});
  const [rollStats, setRollStats] = useState(false)

  const setMessage = (race) => {
    switch (race) {
      case "human":
        return <p>All Stats +1. <br></br> <em>Versatile and ambitious travelers.</em></p>;
      case "elvish":
        return <p>INT +5, DEX +2, STR -2. <br></br><em>Ancient masters of the forest.</em></p>;
      case "orcish":
        return <p>STR +5, CON +2, INT -2. <br></br> <em>Fierce warriors from the iron plains.</em></p>;
      default:
        return "Select a race to see its power...";
    }
  };

  const playerStats = (race) => {
    const statBoost = {str: 0, dex: 0, int: 0, con: 0, wis: 0, cha: 0};
    switch (race) {
      case "human":
        setCurrStats({str: 1, dex: 1, int: 1, con: 1, wis: 1, cha: 1});
        break
      case "elvish":
        setCurrStats({...statBoost, int: 5, dex: 2, str: -2});
        break
      case "orcish":
        setCurrStats({...statBoost, str: 5, con: 2, int: -2});
        break
      default:
        setCurrStats({str: 0, dex: 0, int: 0, con: 0, wis: 0, cha: 0});
    }
  }

  const handleRollStats = () => {
    const stats = {
    str: Math.floor(Math.random() * 20) + 1,
    dex: Math.floor(Math.random() * 20) + 1,
    int: Math.floor(Math.random() * 20) + 1,
    con: Math.floor(Math.random() * 20) + 1,
    wis: Math.floor(Math.random() * 20) + 1,
    cha: Math.floor(Math.random() * 20) + 1
  };
  setBaseStats(stats);
  setRollStats(true);
  }

  const handleRaceClick = (e) => {
    setSelectedRace(e.target.value);
    playerStats(e.target.value);
  }

  return (
    <div>
      <h2>Create Your Hero</h2>
      <div id="name-field">
        <label>Hero Name:</label>
        <input type="text" id="hero-name" placeholder="Enter name..."
        onChange={(e) => setPlayerName(e.target.value)}
        ></input>
      </div>
      <div id="race-menu">
        <button
          className="race-choice"
          value="orcish"
          onClick={(e) => handleRaceClick(e)}
        >
          Orc
        </button>
        <button
          className="race-choice"
          value="elvish"
          onClick={(e) => handleRaceClick(e)}
        >
          Elf
        </button>
        <button
          className="race-choice"
          value="human"
          onClick={(e) => handleRaceClick(e)}
        >
          Human
        </button>
      </div>
      <div>{playerName ? playerName : "No name "} is {selectedRace ? selectedRace : "nothing"}: {selectedRace ? setMessage(selectedRace) : ""}</div>
      {!rollStats ? <button
        onClick={handleRollStats}
        disabled={playerName && selectedRace ? false : true}
      >Roll Stats</button> :
      <ClassSelection statBonus={currStats} baseStats={baseStats}/>}
    </div>
  );
}
