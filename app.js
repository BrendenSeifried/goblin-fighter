import { renderEnemyName } from './utils.js';

// import functions and grab DOM elements

const enemyInfo = document.getElementById('enemy-info');
const enemyNameBtn = document.getElementById('enemyNameBtn');
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




enemyNameBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const addEName = new FormData(enemyInfo);
    const enName = {
        enemyNme: addEName.get('enemyNme'),
        //health: addEName.get('enemyhealth'),
    };
    
    eNames.push(enName);
    renderEnemyNames();
});
// console.log('the', enemyNameBtn);
  

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
