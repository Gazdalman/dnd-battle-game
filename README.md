# ⚔️ D&D Battle Engine
## What is this?
This is an interactive web based RPG engine that allows players to create a custom hero and engage in combat with various enemies. The project features a character creation suite where players can name their hero, select a race, and roll for randomized base stats. Once finalized, the player is transitioned into a battle dashboard where their character class determines their combat flavor and which primary attribute is used for attack calculations.

## Why does it exist?
This project was built to bring the thrill of a fantasy encounter directly to the browser. It tries to capture the classic feel of tabletop gaming on the go. By automating the mechanics of character building and combat, it creates an accessible environment where anyone can jump in, roll up a hero, and start an adventure immediately.

## What tools did I use?
- **React**: Chosen for its efficient state management, allowing for real-time UI updates as the player types their name or toggles races.

- **React Router**: Used to handle seamless transitions between the Main Menu, Character Creator, and Game Screen without page refreshes.

- **Vite**: Utilized as the build tool for its fast development environment and optimized deployment configurations.

- **JavaScript & CSS**: Employed to build the logic for session persistence via browser cookies and a fantasy aesthetic using Flexbox and Grid.

- **AI Collaboration**: Used to troubleshoot deployment routing issues and refine the documentation for the project.

## Changelog P1 to P2
- Added combat logic
- Added varying enemy types
- Added battle log

## Known Issues
- Players sent back to main maenu after creating character instead of game. *Potentially caused by the cookie not being written before the navigation happens.*
- Balance on damage is off by a wide margin.
- Adjusted styling to adjust for mobile devices.

## Future Plans
- [ ] Add a full backend for login/signup to facilitate permanent session continue.
- [ ] Add more playr races and classes.
- [ ] Add events and items to heal player.
- [ ] Implement a player inventory.
- [ ] Add non-hostile NPCs for different player interactions.
- [ ] Add varying player abilities.

# How to visit it
You can start your adventure here: <br>
https://gazdalman.github.io/dnd-battle-game
