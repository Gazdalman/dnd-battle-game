import { Children, useEffect, useState } from "react";
import { replace, useNavigate } from "react-router-dom";
import { useModal } from "../Modal/Modal";
import GameOverModal from "../Modal/GameOverModal";
import "./GameScreen.css";

export default function GameScreen({ data, dataSetter }) {
  const { setModalContent } = useModal();
  const [monster, setMonster] = useState({});
  const [maxHP, setMaxHP] = useState(0);
  const [playerHP, setPlayerHP] = useState(0);
  const [isDefending, setIsDefending] = useState(false);
  const [log, setLog] = useState([]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const navigate = useNavigate();

  const generateMonster = () => {
  const hpBase = Math.floor(Math.random() * 16) + 15;
  const atkBase = Math.floor(Math.random() * 10) + 3;
  const monsters = [{name: "Slime", sprite: "💧"}, {name:"Goblin", sprite: "👺"}, {name: "Brigand", sprite: "🦹"}, {name:"Ghoul", sprite: "☠️"}];

  let monster = monsters[Math.floor(Math.random() * monsters.length)]
  setLog([`A ${monster.name} has appeared!`, ...log]);

  return {
    name: monster.name,
    maxHp: hpBase,
    currentHp: hpBase,
    atk: atkBase,
    def: 2,
    sprite: monster.sprite,
  };

};

  const handleAttack = () => {
    if (!isPlayerTurn || monster.currentHp <= 0) return;

    const d8 = Math.floor(Math.random() * 8) + 5;
    const primaryStat = getPrimaryStat(data.charClass);
    const modifier = Math.floor((data.stats[primaryStat]) / 2);

    const rawDamage = modifier >= 0 ? d8 + modifier : d8;
    const finalDamage = Math.max(1, rawDamage - monster.def);
    setMonster((prev) => ({
      ...prev,
      currentHp: Math.max(0, prev.currentHp - finalDamage),
    }));

    setLog((prevLog) => [`You strike the ${monster.name} for ${finalDamage} damage!`, ...prevLog]);

    if (monster.currentHp - finalDamage > 0) {
      setIsPlayerTurn(false);
      setTimeout(() => monsterTurn(false), 800);
    } else {
      setTimeout(() => {
        setMonster(generateMonster());
        setLog((prevLog) => ["A new challenger approaches!", ...prevLog]);
        setIsPlayerTurn(true); // Unlock the game
      }, 2000);
    }
  };

  const handleDefend = () => {
    if (!isPlayerTurn || monster.currentHp <= 0) return;

    setLog((prevLog) => ["You brace yourself, focusing on defense and recovery.", ...prevLog]);

    setIsDefending(true); // Activate the shield
    setIsPlayerTurn(false); // Lock the UI

    setTimeout(() => monsterTurn(true), 800); // Trigger monster retaliation
  };

  const getPrimaryStat = (charClass) => {
    const mapping = { warrior: "str", monk: "dex", wizard: "int", bard: "cha" };
    return mapping[charClass] || "str";
  };

  const monsterTurn = (defending) => {
    if (monster.currentHp <= 0) return;

    const d20 = Math.floor(Math.random() * 20) + 1;

    let playerDef = Math.floor(data.stats.con / 2);

    if (defending) {
      playerDef += Math.max(1,data.stats.str / 10);
    }

    const rawMonsterDmg = d20 + monster.atk;
    const finalMonsterDmg = rawMonsterDmg - playerDef;

    if (defending && finalMonsterDmg < 0) {
      const strMod = Math.floor((data.stats.str - 10) / 2);
      const conMod = Math.floor((data.stats.con - 10) / 2);
      const healthBonus = Math.abs(strMod) + Math.abs(conMod);

      const totalHeal = healthBonus + Math.abs(finalMonsterDmg);

      setPlayerHP((prev) => Math.min(maxHP, prev + totalHeal));
      setLog((prevLog) => [`You parried the blow and recovered ${totalHeal} HP!`, ...prevLog]);
    } else {
      let finalDamage = Math.max(1, finalMonsterDmg);

      if (defending && finalDamage > 0) {
        finalDamage = 1;
      }

      setLog((prevLog) => [`${monster.name} hits for ${finalDamage} damage!`, ...prevLog]);

      setPlayerHP((prev) => Math.max(0, prev - finalDamage));
      if (playerHP - finalDamage <= 0) {
        setLog((prevLog) => ["DEFEAT...", ...prevLog]);
        setIsPlayerTurn(false);

        setModalContent(<GameOverModal />);
        return;
      }
    }

    setIsPlayerTurn(true);
  };

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

  useEffect(() => {
    if (data) {
      setMaxHP(data.stats.con * 2 + 25);
      setPlayerHP(data.stats.con * 2 + 25);
    }
  }, [data]);

  useEffect(() => {
    setMonster(generateMonster());

  }, [])

  return !data ? (
    <div
      style={{
        backgroundColor: "#121212",
        color: "white",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>Resurrecting Hero...</h2>
    </div>
  ) : (
    <div id="battle-container">
      <div id="battle-cards">
      {/* Player Side */}
      <section id="player-card">
        <header className="card-header">
          <h2>{data.name}</h2>
          <span className="subtitle">
            {data.race.toUpperCase()} {data.class.toUpperCase()}
          </span>
        </header>

        <div className="hp-section">
          <label>VITALITY</label>
          <div className="hp-bar">
            <div
              className="hp-fill"
              style={{ width: `${(playerHP / maxHP) * 100}%` }}
            ></div>
          </div>
          <p>
            {playerHP} / {maxHP} HP
          </p>
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
          <button
            disabled={!isPlayerTurn}
            onClick={handleAttack}
            id="btn-attack"
          >
            Attack
          </button>
          <button
            disabled={!isPlayerTurn}
            onClick={handleDefend}
            id="btn-defend"
          >
            Defend
          </button>
        </div>
      </section>
      {/* Monster Side */}
      <section id="monster-card">
        <div className="card-header">
          <div className="header-flex">
            <h3>{monster.name}</h3>
            <span
              className={`difficulty-badge ${monster.maxHp > 30 ? "elite" : "common"}`}
            >
              {monster.maxHp > 30 ? "ELITE" : "COMMON"}
            </span>
          </div>
        </div>

        <div className="monster-visual">
          <div className="monster-sprite">{monster.sprite}</div>
        </div>

        <div className="hp-section">
          <label>MONSTER VITALITY</label>
          <div className="hp-bar monster-hp-bar">
            <div
              className="hp-fill monster-hp-fill"
              style={{ width: `${(monster.currentHp / monster.maxHp) * 100}%` }}
            ></div>
          </div>
          <p>
            {monster.currentHp} / {monster.maxHp} HP
          </p>
        </div>

        <div className="monster-stats">
          <div className="stat-pill">
            <span>ATK</span>
            <strong>{monster.atk}</strong>
          </div>
          <div className="stat-pill">
            <span>DEF</span>
            <strong>{monster.def}</strong>
          </div>
        </div>
      </section>
      </div>
      {/*Battle Log*/}
      <div id="combat-log-container">
        <div className="log-header">
          <span>BATTLE CHRONICLE</span>
          <div className="pulse-dot"></div>
        </div>
        <div id="combat-log">
          {log.map((entry, index) => (
            <p key={index} className="log-entry">
              <span className="log-timestamp">
                [
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
                ]
              </span>{" "}
              {entry}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
