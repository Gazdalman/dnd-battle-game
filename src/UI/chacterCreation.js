function renderRaceInfo(raceName) {
    const display = document.querySelector('#bonus-display');
    let text = "";

    switch (raceName) {
        case 'Orc':
            text = "STR +5, VIT +2, INT -2. <br> <em>Fierce warriors from the iron plains.</em>";
            break;
        case 'Elf':
            text = "INT +5, DEX +2, STR -2. <br> <em>Ancient masters of the forest.</em>";
            break;
        case 'Human':
            text = "All Stats +1. <br> <em>Versatile and ambitious travelers.</em>";
            break;
        case 'Merfolk':
            text = "<em>Coming Soon</em>";
            break;
        case 'Dwarf':
            text = "<em>Coming Soon</em>";
            break;
        case 'Goliath':
            text = "<em>Coming Soon</em>";
            break;
        default:
            text = "Select a race to see its power...";
    }

    display.innerHTML = text;
}

let selectedRace = null;

// Adds all button functionality for character creation screen
export function attachCCListeners() {
    const buttons = document.querySelectorAll('.race-choice');

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            selectedRace = e.target.value;

            buttons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            renderRaceInfo(selectedRace);
        });
    });

    const createBtn = document.querySelector('#roll-button');

    createBtn.addEventListener('click', () => {
        const validRaces = ['Elf', 'Human', 'Orc'];

        if (!validRaces.includes(selectedRace)) {
            alert("You must choose a race before you can roll for your hero!");
            return;
        }

        alert("The button works!!");
    });
}
