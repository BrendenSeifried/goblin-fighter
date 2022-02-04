import { renderEnemyName } from './utils.js';

// import functions and grab DOM elements

const enemyInfo = document.getElementById('enemy-info');
const listEnemy = document.getElementById('list-enemy');
// let state

let eNames = []; //enemy name empty string
// set event listeners 


function renderEnemyNames() {
    listEnemy.textContent = '';
    for (let eName of eNames) {
        const li = renderEnemyName(eName);
        listEnemy.append(li);
        // console.log(eName);
    }
   
}




enemyInfo.addEventListener('submit', (e) => {
    e.preventDefault();
    const addEName = new FormData(enemyInfo);
    const enName = {
        enemyNme: addEName.get('enemyNme'),
        HP: 3,
        icon: '../assets/alive.png',
    };
    
    eNames.push(enName);
    renderEnemyNames();
});
// console.log('the', enemyNameBtn);
  

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
