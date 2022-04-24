// Switch between sidebars
function tabSwitch(sectionName) {
  const sections = document.getElementsByClassName("stat-section");
  const navButtons = document.getElementsByClassName("stat-button");
  console.log(sections)
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].classList.remove("active");
  }
  document.getElementById(`${sectionName}`).classList.add("active");  
  document.getElementById(`${sectionName}-button`).classList.add("active"); 
}

// Input box to start game
const startButton = document.getElementById('start-button');
startButton.addEventListener("click",() => newGame())

//input box to level up

// Export info