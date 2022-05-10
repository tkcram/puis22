# Programming User Interfaces Spring '22

This is the front end code for the Prattgeons and Pythons project, made in pursuit of an MS-DAV from the Pratt Institute. The other half of this project is available at https://github.com/tkcram/pfchs22

The website that this code builds is currently available at https://puis22.netlify.app. It is a browser based dungeon crawler game based loosely on the principles of Dungeons and Dragons 5th edition.

The following readme is designed to walk through the various javascript files included in the project and their functionality.

# control_script.js

This script includes the functions that initialise a new game, as well as general page functionality.

newGame() reads the input fields and calls the appropriate APIs to create a character (getHeroData()) and maze (generateMap()). These are both done asynchronously in order to ensure the data is fully loaded in before the game begins. Once the data is fully loaded and parsed, it then triggers the start of the game.

The other two functions in the script, showAbout() and tabSwitch(), allow the user to interact with elements outside the game board. In this case bringing up the about screen and switching between tabs in the info module.

# maze_builder.js

This script takes the maze JSON string received from the API, and converts it into HTML to visually represent the maze. This is done by looping through each cell in the maze and using template literals to insert specific HTML nodes for each door, wall, monster, item, or special room in the data.

Once the maze has been built and inserted into the DOM, listeners are added for items that the user can interact with.

# maze_interactions.js

This includes all functions that occur on the gameboard itself. These include:

When the user clicks on a door, if it is closed it opens the door, or if it is open the character moves to the next room.
When the user clicks on a piece of equipment, that equipment is added to the inventory.
When the user clicks on a monster, the character and monster fight each other, which involves a random number plus their stats. If the attack scores a hit, the defender takes an amount of damage. If a defender is reduced to zero hit points, they die.
When the user clicks on the exit, a pop-up is displayed to congratulate them.

Each function also sends a message to the user (see maze_exporter.js), and some include animations.

# maze_exporter.js

Whenever an action is performed, from starting a game to fighting a monster, this script ensure it is communicated to the user. 

pushActionLog() is the primary function, appending messages to the chat box at the bottom of the page.
pushCharacterLog() displays the characters various statistics when they are generated.
pushCharacterLog() displays the details of whatever monster is in the same room as the character.
pushMazeMap() builds and updates the maze minimap as the character moves through it.
