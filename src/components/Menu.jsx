import { useState, useEffect } from "react";
import { useNavigate } from "react-router"; // Note: v7 uses "react-router"

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
    navigate("/game");
  };


  return (
    <section>
      <button onClick={handleNewGame}>New Hero</button>
      <button
      disabled={hasSave}
      onClick={handleLoadGame}>Continue</button>
    </section>
  );
}
