// GameOverModal.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "./Modal";

const GameOverModal = () => {
  const { closeModal } = useModal();
  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {
      navigate("/", { replace: true });
      closeModal();
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div id="death-modal">
      <h1 className="death-title">YOU HAVE FALLEN</h1>
      <div className="death-icon">💀</div>
      <p>Your journey ends here, but your legend remains.</p>
      <div className="loading-bar-container">
        <div className="loading-bar-fill"></div>
      </div>
      <p className="redirect-text">Returning to Main Menu...</p>
    </div>
  );
};

export default GameOverModal;
