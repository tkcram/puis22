let heroData = {}
async function getHeroData(level) {
	const heroRes = await fetch('https://pfchs22.herokuapp.com/createCharacter/'+level);
	heroData = await heroRes.json();
	console.log(heroData)
}

let mazeData = []

async function newGame(){
	startButton.remove();
	loadingStatus()
	await getHeroData(1);
	await generateMap(4,0,0,0);
	pushCharacterLog();
	pushMazeMap();
	mazeStart();
	document.getElementById('start-div').remove()
}

function loadingStatus(){
 document.getElementById('loading').style.display = 'block';
}

async function generateMap(size,row,col,level){
  const params = `/${size}/${row}/${col}/${level}`
  const mazeRes = await fetch('https://pfchs22.herokuapp.com/createMaze' + params)
  mazeData = await mazeRes.json();
  buildMaze()
  buildInteractions()
}

function mazeStart() {
	heroData['combat']['hp-current'] = heroData['combat']['hp-max']
	heroData['combat']['initiative'] += rollDice(heroData['combat']['initiative'])
	const startRoom = document.getElementById('entrance')
	fliproom(startRoom)
	pushMapReveal(startRoom)
}

// function levelUp(size) {
// 	Display "Go to next level?"
// 	Log coordinates of exit
// 	for each elementt in 'map'
// 		element.remove()
// 	character.levelup()
// 	size = size++
// 	level = level++
// 	generateMap(size, exitRow, exitCol, level)
// }