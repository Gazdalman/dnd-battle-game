import "./ClassSelection.css"

export default function ClassSelection({ statBonus, baseStats, selectClass }) {

  return (
    <div id="class-and-stats">
      <div id="stat-block">
        <h3>Your Base Stats</h3>
        {Object.keys(baseStats).map((key) => (
          <p key={key}>
            {key.toUpperCase()}: {baseStats[key]}{" "}
            {statBonus[key] >= 0
              ? `+ ${statBonus[key]}`
              : `- ${Math.abs(statBonus[key])}`} = {baseStats[key] + statBonus[key]}
          </p>
        ))}
      </div>
      <div id="class-selection-menu">
        <h3 id="class-select-header">Choose Your Class</h3>
        <div className="class-option">
          <input
            type="radio"
            name="charClass"
            value="monk"
            onChange={(e) => selectClass(e.target.value)}
          />
          <label>Monk (Uses DEX for strikes)</label>
        </div>

        <div className="class-option">
          <input
            type="radio"
            name="charClass"
            value="warrior"
            onChange={(e) => selectClass(e.target.value)}
          />
          <label>Warrior (Uses STR for swings)</label>
        </div>

        <div className="class-option">
          <input
            type="radio"
            name="charClass"
            value="bard"
            onChange={(e) => selectClass(e.target.value)}
          />
          <label>Bard (Uses CHA for songs)</label>
        </div>

        <div className="class-option">
          <input
            type="radio"
            name="charClass"
            value="wizard"
            onChange={(e) => selectClass(e.target.value)}
          />
          <label>Wizard (Uses INT for spells)</label>
        </div>
      </div>
    </div>
  );
}
