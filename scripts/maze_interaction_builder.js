// Instantiates listeners on map
// Calls interaction functions
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