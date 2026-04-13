import { useState } from "react";

export default function ClassSelection({statBonus, baseStats}) {

  return (
    <div>
      <div id="stat-block">
        <h3>Your Base Stats</h3>
      {Object.keys(baseStats).map(key => (
        <p key={key}>{key.toUpperCase()}: {baseStats[key]} {statBonus[key] >= 0 ? `+ ${statBonus[key]}` : `- ${Math.abs(statBonus[key])}`}</p>
      )
      ) }
      </div>
    </div>
  )
}
