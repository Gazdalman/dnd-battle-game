import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GameScreen.css"

export default function GameScreen({ data, dataSetter }) {
  const [log, setLog] = useState(["The adventure begins..."]);
  const [monsterHP, setMonsterHP] = useState(50);

  const navigate = useNavigate();

  useEffect(() => {
    const hasContinueCookie = document.cookie.includes("continue_playing=");
    const heroCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("heroData="));

    // Restore data if the player has a continue cookie
    if (!data && hasContinueCookie && heroCookie) {
      const recovered = JSON.parse(
        decodeURIComponent(heroCookie.split("=")[1]),
      );
      dataSetter(recovered);
      console.log(recovered);
    // Force player to load from menu
    } else if (!data && !hasContinueCookie) {
      navigate("/");
    }
  }, [data, dataSetter, navigate]);

  useEffect(() => {

    if (data) {
      document.cookie =
        "continue_playing=true; max-age=600; path=/; SameSite=Lax";
    }
  }, [data]);

  if (!data) {
    return (
      <div style={{ backgroundColor: '#121212', color: 'white', height: '100vh', padding: '20px' }}>
        <h2>Resurrecting Hero...</h2>
      </div>
    );
  }

  const maxHP = data.stats.con * 2;
  return (
    <div id="battle-container">
      {/* Player Side */}
      <section id="player-card">
        <header className="card-header">
          <h2>{data.name}</h2>
          <span className="subtitle">{data.race} {data.charClass}</span>
        </header>

        <div className="hp-section">
          <label>VITALITY</label>
          <div className="hp-bar">
            <div className="hp-fill" style={{ width: '100%' }}></div>
          </div>
          <p>{maxHP} / {maxHP} HP</p>
        </div>

        <div className="stats-grid">
          {Object.entries(data.stats).map(([stat, val]) => (
            <div key={stat} className="stat-box">
              <span className="stat-label">{stat.toUpperCase()}</span>
              <span className="stat-value">{val}</span>
            </div>
          ))}
        </div>

        <div className="action-buttons">
          <button className="btn-attack">Attack</button>
          <button className="btn-defend">Defend</button>
        </div>
      </section>

      {/* Monster Side */}
      <section id="monster-card">
        <div className="monster-placeholder">
          <h3>Enemy Encounter</h3>
          <div className="monster-sprite">👾</div>
          <p>Waiting for target...</p>
        </div>
      </section>
    </div>
  );
}
