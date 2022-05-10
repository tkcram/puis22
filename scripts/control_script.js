//Maze functions
let mazeData = []

const startButton = document.getElementById('start-button');
startButton.addEventListener("click",() => newGame())

//Starting a new game
async function newGame(){
	let size = document.getElementById("map-size").value;
	let level = document.getElementById("map-level").value;
	let difficulty = document.getElementById("map-difficulty").value;

  document.getElementById('start-fields').remove();
	loadingStatus()

	await getHeroData(level);
	await generateMap(size,0,0,difficulty);

	pushCharacterLog();
	pushMazeMap();
	mazeStart();
	document.getElementById('start-div').remove()
}
function loadingStatus(){
 document.getElementById('loading-div').style.display = 'block';
}

//Generate the player character
let heroData = {}
async function getHeroData(level) {
  const heroRes = await fetch('https://pfchs22.herokuapp.com/createCharacter/'+level);
  heroData = await heroRes.json();
}

//Generate the map
async function generateMap(size,row,col,level){
  const params = `/${size}/${row}/${col}/${level}`
  const mazeRes = await fetch('https://pfchs22.herokuapp.com/createMaze' + params)
  mazeData = await mazeRes.json();
  buildMaze()
  buildInteractions()
}

//Start Game
function mazeStart() {
	heroData['combat']['hp-current'] = heroData['combat']['hp-max']
	heroData['combat']['initiative'] += rollDice(heroData['combat']['initiative'])
	const startRoom = document.getElementById('entrance')
	// startRoom.scrollIntoView(false);
	fliproom(startRoom)
	pushMapReveal(startRoom)
}


// Other page functions
let aboutDiv = document.getElementById('about-div')
function showAbout(){
    if (aboutDiv.style.display === "none") {
        aboutDiv.style.display = "block";

    } else {
        aboutDiv.style.display = "none";
    }
}

function tabSwitch(sectionName) {
  const sections = document.getElementsByClassName("stat-section");
  const navButtons = document.getElementsByClassName("stat-button");
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].classList.remove("active");
  }
  document.getElementById(`${sectionName}`).classList.add("active");  
  document.getElementById(`${sectionName}-button`).classList.add("active"); 
}