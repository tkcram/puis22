// Builds the map divs from the json call
function buildMaze(){
	function createDoor(direction){
		return `
		<div class = "door door-${direction}" data-closed="true">
	      <img src="http://www.clker.com/cliparts/2/7/f/d/1220546286832083251ajvdvegt_2D_components_-_door_(85cm).svg.hi.png"/>
	    </div>
		`
	}
	function createNoDoor(direction){
		return `
			<div class = "wall wall-${direction}"></div>
		`
	}

	function createRoom(row, col, doors, danger, loot, specialRoom) {
	  const doorsDom = []
	  const noDoorsDom = []
	  if (doors[0]) {
	  	doorsDom.push(createDoor('top'))
	  } else {
	  	noDoorsDom.push(createNoDoor('top'))
	  }

	  if (doors[1]) {
	  	doorsDom.push(createDoor('right'))
	  } else {
	  	noDoorsDom.push(createNoDoor('right'))
	  }

	  if (doors[2]) {
	  	doorsDom.push(createDoor('bottom'))
	  } else {
	  	noDoorsDom.push(createNoDoor('bottom'))
	  }

	  if (doors[3]) {
	  	doorsDom.push(createDoor('left'))
	  } else {
	  	noDoorsDom.push(createNoDoor('left'))
	  }

	  let hero = ''
	  if(specialRoom === 'entrance'){
	  	hero = `
	  	  <div class = "hero" id="hero"> 
		      <img src="https://www.pinclipart.com/picdir/big/541-5413340_transparent-character-traits-clipart-joy-inside-out-png.png"/>
		    </div>
			`
		}
		let monster = ''
		if (danger){
			monster = `
	  	  <div class = "monster"> 
		      <img src="https://i.pinimg.com/originals/c9/20/b4/c920b4408d20a6150b902ac435ebd2cc.png"/>
		    </div>
			`
		}
		let item = ''
		if (loot){
			item = `
	  	  <div class = "item"> 
		      <img src="https://cdn-icons-png.flaticon.com/512/803/803805.png"/>
		    </div>
			`
		}
		let exit = ''
		if (specialRoom === 'exit'){
			monster = `
	  	  <div> 
		      <img id="exit-image"src="https://media.istockphoto.com/vectors/closed-door-drawing-vector-id865663698"/>
		    </div>
			`
		}

	  const room = `
		<div class="map-item" id="${specialRoom}" data-row="${row}" data-col="${col}">
	      <div class="map-card-inner">
	        <div class="map-card-back">
	          <img class="map-image" src="https://r1.ilikewallpaper.net/ipad-air-wallpapers/download/104429/outrun-abstract-square-4k-ipad-air-wallpaper-ilikewallpaper_com.jpg" alt="<%= title2 %> by <%= creator2 %>" />
	        </div>
	        <div class="map-card-front">
	        	${hero}
		        ${doorsDom.join('')}
		        ${noDoorsDom.join('')}
		        ${item}
		        ${monster}
	        <div class = "wall wall-top-left"></div>
	        <div class = "wall wall-top-right"></div>
	        <div class = "wall wall-bottom-left"></div>
	        <div class = "wall wall-bottom-right"></div>
	        <div class = "wall wall-left-top"></div>
	        <div class = "wall wall-left-bottom"></div>
	        <div class = "wall wall-right-top"></div>
	        <div class = "wall wall-right-bottom"></div>
	        </div>
	      </div>
	    </div>
	  ` 
	  return room
	}

	function createRow(row, rooms){
		return `
			<div id="row-${row}" class="row">
				${rooms.join('')}
			</div>
		`
	}

	const maze = mazeData.forEach((row, rowIndex) => {
		const rooms = row.map((col, colIndex) => {
			return createRoom(rowIndex, colIndex, col.doors, col.monster, col.loot, col.special)
		})

		const rowDom = createRow(rowIndex, rooms);
		document.getElementById('map').insertAdjacentHTML('beforeend', rowDom)
	})	
}

	async function buildInteractions() {
  const rooms = document.getElementsByClassName("map-item")
  const exitRoom = document.getElementById('exit')
  const doors = document.getElementsByClassName('door');
  const monsters = document.getElementsByClassName('monster');
  const items = document.getElementsByClassName('item');

  // Click on Doors
  for (let i=0; i < doors.length; i++) {
    const door = doors[i]
    door.addEventListener("click", () => clickDoor(door))
  }

  // Click on Monsters
  for (let i=0; i < monsters.length; i++) {
    const monster = monsters[i]
    const room = monster.closest(".map-item")
    let row = parseInt(room.dataset.row)
    let col = parseInt(room.dataset.col)
    const monsterStats = mazeData[row][col]['monster']
    monsterStats['combat']['initiative'] += rollDice(monsterStats['combat']['initiative'])
    monster.addEventListener("click", () => clickMonster(monsterStats,monster))
  }

  // Click on Loot
  for (let i=0; i < items.length; i++) {
    const item = items[i]
    const room = item.closest(".map-item")
    let row = parseInt(room.dataset.row)
    let col = parseInt(room.dataset.col)
    const itemStats = mazeData[row][col]['loot']
    item.addEventListener("click", () => clickItem(itemStats,item))
  }

  // Click on empty room
  //Search the room
  exitRoom.addEventListener("click", () => clickExit())
}