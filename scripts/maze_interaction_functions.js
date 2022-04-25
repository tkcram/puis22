// Math
function rollDice(dice,isAttack = false){
  roll = Math.ceil(Math.random()*dice)
  if (isAttack){
    if (roll == 20){
      return 'critHit'
    }
    if (roll == 1){
      return 'critMiss'
    }
  }
  return roll
}

// Interacting with a door
function clickDoor(door){
  const room = door.closest(".map-item")
  let row = parseInt(room.dataset.row)
  let col = parseInt(room.dataset.col)
  const isMonster = door.parentElement.querySelector('.monster')
  if (room.contains(hero)){
    if (door.dataset.closed == 'true'){
      if (isMonster == null){
       openDoor(door)
     }
     else {
       alert('A monster guards the path')
     }
   }

   else if(door.dataset.closed == 'false'){
    if (door.classList.contains('door-bottom')){
      row += 1
    } else if (door.classList.contains('door-right')){
      col += 1

    } else if (door.classList.contains('door-top')){
      row -= 1

    } else if (door.classList.contains('door-left')){
      col -= 1
    }

    const adjRoomSelect = `[data-row="${row}"][data-col="${col}"]`
    const adjRoom = document.querySelector(adjRoomSelect)

    if (isMonster){
      const room = isMonster.closest(".map-item")
      let row = parseInt(room.dataset.row)
      let col = parseInt(room.dataset.col)
      const monsterStats = mazeData[row][col]['monster']
      attack(monsterStats,heroData,isMonster)
    }
    goto(adjRoom,row,col)
  }
}
}

function openDoor(door){
  door.children[0].style.display = 'none';
  door.dataset.closed = 'false'

  const room = door.closest(".map-item")
  let row = parseInt(room.dataset.row)
  let col = parseInt(room.dataset.col)
  let adjDoorSelect = ""

  if (door.classList.contains('door-bottom')){
    row += 1
    adjDoorSelect = '.door-top'
  } else if (door.classList.contains('door-right')){
    col += 1
    adjDoorSelect = '.door-left'
  } else if (door.classList.contains('door-top')){
    row -= 1
    adjDoorSelect = '.door-bottom'
  } else if (door.classList.contains('door-left')){
    col -= 1
    adjDoorSelect = '.door-right'
  }

  const adjRoomSelect = `[data-row="${row}"][data-col="${col}"]`
  const adjRoom = document.querySelector(adjRoomSelect)
  const adjDoor = adjRoom.querySelector(adjDoorSelect)

  fliproom(adjRoom)
  pushMapReveal(adjRoom)

  adjDoor.children[0].style.display = 'none';
  adjDoor.dataset.closed = 'false'
}

function fliproom(room) {
  room.classList.toggle("flipped")
}

function goto(room,row,col){
  const hero = document.getElementById('hero');
  hero.remove()
  room.querySelector('.map-card-front').appendChild(hero);
  room.scrollIntoView(true);
  // console.log('monster?')
  if (room.getElementsByClassName('monster').length > 0){
    pushMonsterLog(mazeData[row][col]['monster'])
  } else {
    pushMonsterLog()
  }
}

// Interacting with a monster
function clickMonster(monster,monsterDiv){
  // console.log(monster)
  const room = monsterDiv.closest(".map-item")
  if (room.contains(document.getElementById('hero'))){ //Check if hero is in the same room
    if (heroData['combat']['initiative'] >= monster['combat']['initiative']){ //If hero is faster, hero attacks first
      attack(heroData,monster,monsterDiv)
      if(monster['combat']['hp-current']>0){ //If still alive
        attack(monster,heroData,monsterDiv)
      }

    } else { //If monster is faster, monster attacks first
      attack(monster,heroData,monsterDiv)
      if(heroData['combat']['hp-current']>0){ //if still alive
        attack(heroData,monster,monsterDiv)
      }
    }
  }
}

function attack(attacker,defender,monsterDiv){
  let attackerType = attacker['details']['entity']
  let defenderType = defender['details']['entity']
  let attackRoll = 0
  let damageTypes = ""
  let damageText = ""
  let actionText = ""
  let heroWeapon = ""

  if (attackerType == 'hero'){ 
    heroWeapon = attacker['combat']['weilding']['weapon']
    attackRoll = rollDice(20,true)
    damageTypes = Object.keys(attacker['inventory']['weapon'][heroWeapon]['damage'])
  } else if (attackerType == 'monster'){
    attackRoll = rollDice(20,true)
    attackOptions = Object.keys(attacker['actions'])
    attackChoice = attackOptions[Math.floor(Math.random()*attackOptions.length)]
    damageTypes = Object.keys(attacker['actions'][attackChoice]['damage'])
    // console.log(attackRoll, heroData['combat']['ac'])
  }

  if (attackRoll == 'critHit'){ //Critical Hit
    for (let i=0; i < damageTypes.length; i++) {
      if (attackerType == 'hero'){
        damageAmount = attacker['inventory']['weapon'][heroWeapon]['damage'][damageTypes[i]]
      } else if (attackerType == 'monster') {
        damageAmount = attacker['actions'][attackChoice]['damage'][damageTypes[i]]
      }
      const damageDealt = damage(damageAmount) + damage(damageAmount)
      const damageType = damageTypes[i]
      defender['combat']['hp-current'] -= damageDealt
      damageText += `${damageDealt} ${damageType} `
    }
    actionText = `Critical Hit!! ${attackerType} hit ${defenderType} for ${damageText} damage`

  } else if (attackRoll == 'critMiss'){ //Critial Miss
    actionText = `${attackerType} completely misses ${defenderType}`

  } else if (attackRoll > defender['combat']['ac']){ //Hit
    for (let i=0; i < damageTypes.length; i++) {
      if (attackerType == 'hero'){
        damageAmount = attacker['inventory']['weapon'][heroWeapon]['damage'][damageTypes[i]]
      } else if (attackerType == 'monster') {
        damageAmount = attacker['actions'][attackChoice]['damage'][damageTypes[i]]
      }
      const damageDealt = damage(damageAmount)
      const damageType = damageTypes[i]
      defender['combat']['hp-current'] -= damageDealt
      damageText += `${damageDealt} ${damageType}`
    }
    actionText += `${attackerType} hit ${defenderType} for ${damageText} damage`

  } else { //Miss
    actionText = `${attackerType} misses ${defenderType} with an attack`
  }

  currentHp = defender['combat']['hp-current']
  actionText += ` (${currentHp}hp remaining)`
  pushActionLog(actionText)
  if (defender['combat']['hp-current'] <= 0){
    if (defenderType == 'monster'){
      monsterDiv.remove()
      pushActionLog(`${defenderType} has been slain`)
    } 
    if(defenderType == 'hero'){
      heroDeath()
    }
  }
}


function damage(dice){ 
  const regex = /([0-9]*)d([0-9]*)([\+,\-][0-9]*)/;
  const damageSplit = dice.split(regex)
  var damageDice = damageSplit.map(function (x) { 
    return parseInt(x, 10); 
  })
  let damageTotal = damageDice[3]
  for (let i=0; i < parseInt(damageDice[1]); i++){
    damageTotal += rollDice(damageDice[2])
  }
  if (damageTotal < 0){
    damageTotal = 0
  }
  console.log(`Initial die: ${dice}, Split dice: ${damageDice}, Damage output: ${damageTotal}`)
  return damageTotal
}

function heroDeath(){
  hero.remove()
  pushActionLog("You have died. Refresh page to try again")
  alert('game over')
}

// Interaction with items
function clickItem(item,itemDiv){
  for (const property in heroData['inventory']) {
    for (const newItem in item[property]){
      if (!(newItem in heroData['inventory'][property])){
        heroData['inventory'][property][newItem] = item[property][newItem]
        updateItem(newItem,property)
        pushItem(newItem,property)
        pushActionLog(`Added ${newItem} to inventory`)
      } else {
        heroData['inventory'][property][newItem]['quantity'] += 1
        pushActionLog(`Added another ${newItem} to inventory`)
      }
    }
  }
  itemDiv.remove()
}

function updateItem(item, itemType){
  let itemData = heroData['inventory'][itemType][item]
  let heroStats = heroData['stats']['mod']
  console.log(itemType,itemData)
  if (itemType == 'weapon'){
    let damageBonus = heroStats['str']
    if (itemData['properties'].includes('thrown') || itemData['range'] == 'Ranged'){
      damageBonus = heroStats['dex']
    }
    if (itemData['properties'].includes('finesse')){
      damageBonus = Math.max(heroStats['str'],heroStats['dex'])
      console.log('finesse weapon')
    }
    //Todo: magic weapons
    // if (itemData['base-damage'].match(/+/g)){
    //   let damageSplit = itemData['base-damage'].split(/+/g)
    //   damageBonus += damageSplit[1]
    // }
    for (const damageType in itemData['damage']){
      if (damageBonus < 0) {
        itemData['damage'][damageType] = `${itemData['base-damage'][damageType]}${damageBonus}`
      } else {
        itemData['damage'][damageType] = `${itemData['base-damage'][damageType]}+${damageBonus}`
      }
    }

  } else if (itemType == 'armor'){
      if (itemData['category'] == 'Light'){
        itemData['ac'] = itemData['ac'] += heroStats['dex']
      } else if (itemData['category'] == 'Medium'){
        itemData['ac'] = itemData['ac'] += Math.min(2,heroStats['dex'])
      }
  }
  heroData['inventory'][itemType][item] = itemData
}

// Interacting with the room
function clickExit(){
  alert('You win!!!')
}
// Search the room

// Pickup Loot
