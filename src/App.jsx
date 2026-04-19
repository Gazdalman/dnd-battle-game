import { Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import CreationForm from './components/CreationForm/CreationForm';
import GameScreen from './components/GameScreen/GameScreen';
import { useEffect, useState } from 'react';

export default function App() {
  const [activePlayer, setActivePlayer] = useState(true);
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    if (document.cookie.includes("session_active=true")) {
      const savedHero = document.cookie.split('; ').find(row => row.startsWith('heroData='))
      if (savedHero) {
        setPlayerData(JSON.parse(decodeURIComponent(savedHero.split('=')[1])));
        setActivePlayer(true);
      } else {
        setActivePlayer(false)
      }
    }
  }, [])

  return (
    <div className="game-wrapper">
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Menu onPlayerSelect={setActivePlayer} playerData={setPlayerData}/>} />
        <Route
          path="/create"
          element={<CreationForm setActivePlayer={setActivePlayer}/>}
        />
        <Route
          path="/game"
          element={activePlayer ? <GameScreen data={playerData} dataSetter={setPlayerData}/> : <Navigate to="/" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}
