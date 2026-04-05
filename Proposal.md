# Project Proposal: Tabletop Hero RPG

## 1. Project Description
**What is it?** This is a web based RPG game. Players jump in by rolling for their hero's core stats and then picking a race. The game takes those rolls and applies racial bonuses to build a unique character. The experience leads into a battle where players see how their hero holds up in a fight.

**Why does it matter?** It matters because it’s a fun game that can easily be accessed from the browser. An easy to play web game is fun, providing a quick and entertaining way for players to roll up a character and see them in action without any friction.

**Who is it for?** Tabletop RPG fans and gamers. It’s for anyone who enjoys the "roll and play" loop of an RPG and wants a fun, fast paced version they can access in their browser.


## 2. Feature Plan

### Project 01 (Due Week 05: The Core Game)
* **The Rolling Table:** An interactive screen where you roll for your hero's stats.
* **Race-Specific JS Pages:** Unique game logic for every race that changes how your hero grows.
* **The Hero's Birth:** The core logic that combines your rolls and your race into one playable character.
* **The Character Sheet:** A visual display of your hero’s identity and their final power levels before they head to battle.

### Project 02 (Due Week 08: The Full Experience)
* **Class Selection:** Deepen the game by choosing a job like Warrior or Mage to further boost your hero.
* **The Battle Arena:** A screen where your hero finally faces off against an enemy in a turn-based duel.
* **The Battle Log:** A play-by-play narrative of the fight.


## 3. Tools and Technologies
* **Code Editor:** **VS Code** with **Vite**. Vite allows the game to use separate JS pages for each race while keeping the gameplay smooth.
* **Approach:** **Vanilla JavaScript (ES6+)**. Pure code to handle the game's math and the inheritance logic between characters.
* **Hosting:** GitHub Pages to get the game live so anyone can play it.


## 4. Risks and Unknowns
* **Stat Memory:** Making sure the rolls you get at the start stay with your character as you move through the game's different race screens.
* **Battle Balance:** Tuning the combat math so the game is challenging but winnable for every race.
