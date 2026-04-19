import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Menu.css";


export default function Menu({ onPlayerSelect, playerData }) {
  const navigate = useNavigate();

  const [hasSave, setHasSave] = useState(false);

  useEffect(() => {
    const cookieFound = document.cookie.includes("heroData=");
    setHasSave(cookieFound);
  }, []);

  // 4. EVENT HANDLERS
  const handleNewGame = () => {
    navigate("/create");
  };

  const handleLoadGame = () => {
    const heroData = document.cookie.split('; ').find(row => row.startsWith('heroData='));
    onPlayerSelect(true);
    playerData(JSON.parse(decodeURIComponent(heroData.split('=')[1])))
    navigate("/game");
  };


  return (
    <div id="menu">
      <button className="menu-button" onClick={handleNewGame}>New Hero</button>
      <button
      className="menu-button"
      disabled={!hasSave}
      onClick={handleLoadGame}>Continue</button>
    </div>
  );
}
