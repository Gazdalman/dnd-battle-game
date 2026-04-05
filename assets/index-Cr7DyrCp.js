(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=document.querySelector(`#bonus-display`),n=``;switch(e){case`Orc`:n=`STR +5, VIT +2, INT -2. <br> <em>Fierce warriors from the iron plains.</em>`;break;case`Elf`:n=`INT +5, DEX +2, STR -2. <br> <em>Ancient masters of the forest.</em>`;break;case`Human`:n=`All Stats +1. <br> <em>Versatile and ambitious travelers.</em>`;break;case`Merfolk`:n=`<em>Coming Soon</em>`;break;case`Dwarf`:n=`<em>Coming Soon</em>`;break;case`Goliath`:n=`<em>Coming Soon</em>`;break;default:n=`Select a race to see its power...`}t.innerHTML=n}var t=null;function n(){let n=document.querySelectorAll(`.race-choice`);n.forEach(r=>{r.addEventListener(`click`,r=>{t=r.target.value,n.forEach(e=>e.classList.remove(`active`)),r.target.classList.add(`active`),e(t)})}),document.querySelector(`#roll-button`).addEventListener(`click`,()=>{if(![`Elf`,`Human`,`Orc`].includes(t)){alert(`You must choose a race before you can roll for your hero!`);return}alert(`The button works!!`)})}var r=document.querySelector(`#app`);function i(){r.innerHTML=`
        <div id="creation-screen">
            <h1>Create Your Hero</h1>

            <section class="input-section">
                <label>Hero Name:</label>
                <input type="text" id="hero-name" placeholder="Enter name...">
            </section>

            <section class="selection-grid">
                <div id="race-menu">
                    <button class="race-choice" value="Orc">Orc</button>
                    <button class="race-choice" value="Elf">Elf</button>
                    <button class="race-choice" value="Human">Human</button>
                    <button class="race-choice" value="Merfolk">Merfolk</button>
                    <button class="race-choice" value="Dwarf">Dwarf</button>
                    <button class="race-choice" value="Goliath">Goliath</button>
                </div>

                <aside id="race-details">
                    <h3>Race Bonuses</h3>
                    <div id="bonus-display">Select a race to see its power...</div>
                </aside>
            </section>

            <button id="roll-button">Roll Stats & Start Game</button>
        </div>
    `,n()}i();