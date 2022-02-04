import { renderEnemyName } from './utils.js';

// import functions and grab DOM elements

const enemyInfo = document.getElementById('enemy-info');
const listEnemy = document.getElementById('list-enemy');
// let state

const hit = document.getElementById('attack');

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
        icon: '../assets/alive.png',
        HP: 3,
        
    };
    
    eNames.push(enName);
    renderEnemyNames();
});



attack.addEventListener('click', (e) =>{
    //if (enemyInfo.Hp < 1) return;
    // if  (Math.random() < 0.5) {    //enemy health 
    //     enemyInfo.HP--;
    // } //else {
    //     pNames.HP--    // player health 
    // }
    eNames.HP--;
    console.log(eNames.HP);
});
// console.log('the', enemyNameBtn);
  

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state