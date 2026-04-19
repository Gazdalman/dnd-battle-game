import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Menu.css";


export default function Menu() {
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
    // navigate("/game");
    const heroData = document.cookie.split('; ').find(row => row.startsWith('heroData='))
    console.log(JSON.parse(decodeURIComponent(heroData.split('=')[1])));
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
