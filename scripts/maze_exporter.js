// Functions where the map interacts with other dics


// Push actions to event log
function pushActionLog(actionText){
  const actionLog = document.getElementById('action-log')
  const actionDiv = document.getElementById('action-div')
  const actionNode = document.createElement("li")
  actionNode.appendChild(document.createTextNode(actionText));
  actionLog.appendChild(actionNode);
  actionDiv.scrollTop = actionDiv.scrollHeight;
}

// Character stats
function pushCharacterLog(){
  pushCahacterImage()
  pushCharacterDetails()
  pushCharacterStats()
  pushCharacterInventory()
}

function pushCahacterImage(){
  const imageNumber = Math.ceil(Math.random() * 50);
  document.getElementById('character-portrait-image').setAttribute('src',`images/${imageNumber}.png`)
}

function pushCharacterDetails(){
  const detailList = document.getElementById('character-attributes-details');
  const headers = detailList.getElementsByTagName('dt')
  const details = detailList.getElementsByTagName('dd')
  for (let i=0; i < headers.length; i++) {
    const headerText = headers[i].innerText
    const detail = heroData['details'][headerText.toLowerCase()]
    const detailText = document.createTextNode(detail)
    details[i].appendChild(detailText)
  }

  heroWeild = heroData['combat']['weilding']['weapon']
  document.getElementById('hero-attack').innerHTML = heroData['inventory']['weapon'][heroWeild]['bonus']
  document.getElementById('hero-ac').innerHTML = heroData['combat']['ac']
  document.getElementById('hero-hp').innerHTML = heroData['combat']['hp-current']
  document.getElementById('hero-initiative').innerHTML = heroData['combat']['initiative']
}

function pushCharacterStats(){
  const statTable = document.getElementById('character-stats');
  const statBody = statTable.getElementsByTagName('tbody')[0]
  const statRows = statBody.getElementsByTagName('tr')
  for (let i=1; i < statRows.length; i++) {
    const header = statRows[i].getElementsByTagName('th')
    const headerText = header[0].innerText

    const statRaw = heroData['stats']['raw'][headerText.toLowerCase()]
    const statRawText = document.createTextNode(statRaw)
    const statRawNode = document.createElement("td")
    statRawNode.appendChild(statRawText)
    statRows[i].appendChild(statRawNode)

    const statMod = heroData['stats']['mod'][headerText.toLowerCase()]
    const statModText = document.createTextNode(statMod)
    const statModNode = document.createElement("td")
    statModNode.appendChild(statModText)
    statRows[i].appendChild(statModNode)

    const statProf = heroData['stats']['profs'][headerText.toLowerCase()]
    const statProfText = document.createTextNode(statProf.join(', '));
    const statProfNode = document.createElement("td")
    statProfNode.appendChild(statProfText)
    statRows[i].appendChild(statProfNode)
  }
}

function pushCharacterInventory(){
  const weaponList = heroData['inventory']['weapon']
  for (const weapon in weaponList){
    // console.log(weapon)
    pushItem(weapon,'weapon')
  }

  const armorList = heroData['inventory']['armor']
  for (const armor in armorList){
    pushItem(armor,'armor')
  }

}

function pushItem(item,itemType){
  const itemDiv = document.getElementById(`character-inventory-${itemType}`)
  const itemNode = document.createElement("img")
  const itemImage = "https://cdn-icons-png.flaticon.com/512/803/803805.png"
  let itemAltText = JSON.stringify(heroData['inventory'][itemType][item])
  itemAltText = itemAltText.replaceAll(/["|[|]|{|}|]/g,'');
  itemAltText = itemAltText.replaceAll(':',': ');
  itemAltText = itemAltText.replaceAll(',',', ');

  itemNode.setAttribute('src', itemImage)
  itemNode.setAttribute('title', item + " - " + itemAltText)
  itemNode.setAttribute('style',"height: 50px; border: 2px solid black")
  itemNode.setAttribute('class','item')
  if (heroData['combat']['weilding'][itemType] == item){
    itemNode.classList.add('equipped')
  } 

  itemDiv.appendChild(itemNode)
  itemNode.addEventListener("click",() => equip(item,itemType,itemNode,itemDiv))
}

function equip(item,itemType,itemNode,itemDiv){
  // console.log(heroData['combat']['weilding'][itemType])
  if (heroData['combat']['weilding'][itemType] != item){
    let inventory = itemDiv.getElementsByClassName('item')
    for (let i = 0; i < inventory.length; i++) {
      inventory[i].classList.remove("equipped");
      // heroData['inventory'][itemType][item]['equipped'] = 'false'
    }
    itemNode.classList.add("equipped")
    heroData['inventory'][itemType][item]['equipped'] = 'true'
    heroData['combat']['weilding'][itemType] = item
    pushActionLog(`Equipped ${item}`)
    if (itemType == 'weapon'){
      document.getElementById('hero-attack').innerHTML = heroData['inventory']['weapon'][item]['bonus']
    } else if (itemType == 'armor') {
      heroData['combat']['ac'] = heroData['inventory']['armor'][item]['ac']
      document.getElementById('hero-ac').innerHTML = heroData['combat']['ac']
    }
  }
}

// Monster stats
function pushMonsterLog(monster = null){
  pullMonsterLog()
  if (monster){
    pushMonsterDetails(monster)
    pushMonsterStats(monster)
  }
}

function pullMonsterLog(){
  const detailList = document.getElementById('monster-attributes-details');
  const details = detailList.getElementsByTagName('dd')
  for (let i=0; i < details.length; i++) {
    details[i].innerHTML="";
  }
  const statList = document.getElementById('monster-stats');
  const stat = statList.getElementsByTagName('dd')
  for (let i=0; i < stat.length; i++) {
    stat[i].innerHTML="";
  }

  document.getElementById('monster-attack').innerHTML = ""
  document.getElementById('monster-ac').innerHTML = ""
  document.getElementById('monster-hp').innerHTML = ""
  document.getElementById('monster-initiative').innerHTML = ""
}

function pushMonsterDetails(monster){
  const detailList = document.getElementById('monster-attributes-details');
  const headers = detailList.getElementsByTagName('dt')
  const details = detailList.getElementsByTagName('dd')
  for (let i=0; i < headers.length; i++) {
    const headerText = headers[i].innerText
    const detail = monster['details'][headerText.toLowerCase()]
    const detailText = document.createTextNode(detail)
    details[i].appendChild(detailText)
  }

  // document.getElementById('monster-attack').innerHTML = monster['actions']['level']
  document.getElementById('monster-ac').innerHTML = monster['combat']['ac']
  document.getElementById('monster-hp').innerHTML = monster['combat']['hp-current']
  document.getElementById('monster-initiative').innerHTML = monster['combat']['initiative']
}

function pushMonsterStats(monster){
  const statList = document.getElementById('monster-stats');
  const headers = statList.getElementsByTagName('dt')
  const details = statList.getElementsByTagName('dd')
  for (let i=0; i < headers.length; i++) {
    const headerText = headers[i].innerText
    let detail = monster['combat'][headerText.toLowerCase()]
    if (detail.length == 0){
      detail = "None"
    }
    const detailText = document.createTextNode(detail)
    details[i].appendChild(detailText)
  }
}

// Maze Map
function pushMazeMap(){
  for (let i=0; i < mazeData.length; i++) {
    const rowHeight = (1/mazeData.length*100)
    const rowNode = document.createElement("div")
    rowNode.setAttribute('class',"minimap-row")
    rowNode.setAttribute('style', `height:${rowHeight}%`)
    for (let j=0; j < mazeData[i].length; j++) {
      let doorTop = 0
      let doorRight = 0
      let doorBottom = 0
      let doorLeft = 0
      let cellSize = (1/mazeData[i].length*100)
      // console.log(mazeData[i].length,cellSize)
      if (mazeData[i][j]['doors'][0] == 1){
        doorTop = 1
      }
      if (mazeData[i][j]['doors'][1] == 1){
        doorRight = 1
      }
      if (mazeData[i][j]['doors'][2] == 1){
        doorBottom= 1
      }
      if (mazeData[i][j]['doors'][3] == 1){
        doorLeft = 1
      }
      const minimapCell = `<div class="minimap-item" style="width:${cellSize}%" data-row="${i}" data-column="${j}" data-top="${doorTop}" data-right="${doorRight}" data-bottom="${doorBottom}" data-left="${doorLeft}" >  </div>`
      rowNode.insertAdjacentHTML('beforeend',minimapCell)
    }
    minimapDiv = document.getElementById('maze-minimap')
    minimapDiv.appendChild(rowNode)
  }
}

function pushMapReveal(room){
  const row = room.dataset.row
  const column = room.dataset.col
  const revealedCell = document.querySelector(`.minimap-item[data-row="${row}"][data-column="${column}"]`);
  revealedCell.classList.add("revealed");
}

// Inventory
  //addListener() to all inventory slots
  //listener equips item
  //addItem

// Stat tracker
  //rooms explored, kills etc

// Minimap