// import { attachCCListeners } from './UI/chacterCreation.js'; // Helper for the info box

// const app = document.querySelector('#app');

// // Will add state preservation in later iteration. This starts app at character creation.
// function initCharacterCreator() {
//     app.innerHTML = `
//         <div id="creation-screen">
//             <h1>Create Your Hero</h1>

//             <section class="input-section">
//                 <label>Hero Name:</label>
//                 <input type="text" id="hero-name" placeholder="Enter name...">
//             </section>

//             <section class="selection-grid">
//                 <div id="race-menu">
//                     <button class="race-choice" value="Orc">Orc</button>
//                     <button class="race-choice" value="Elf">Elf</button>
//                     <button class="race-choice" value="Human">Human</button>
//                     <button class="race-choice" value="Merfolk">Merfolk</button>
//                     <button class="race-choice" value="Dwarf">Dwarf</button>
//                     <button class="race-choice" value="Goliath">Goliath</button>
//                 </div>

//                 <aside id="race-details">
//                     <h3>Race Bonuses</h3>
//                     <div id="bonus-display">Select a race to see its power...</div>
//                 </aside>
//             </section>

//             <button id="roll-button">Roll Stats & Start Game</button>
//         </div>
//     `;

//     attachCCListeners();
// }

// initCharacterCreator();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter basename="/dnd-battle-game">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
