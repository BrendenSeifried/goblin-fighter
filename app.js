// import { renderattack, renderEnemyName } from './utils.js';
import { renderEnemyName } from './utils.js';
// import functions and grab DOM elements

const enemyInfo = document.getElementById('enemy-info');
const listEnemy = document.getElementById('list-enemy');
// let state

const hit = document.getElementById('attack');

let eNames = []; //enemy name empty string
let HP = [];
// set event listeners 


function renderEnemyNames() {
    listEnemy.textContent = '';
    for (let eName of eNames) {
        const li = renderEnemyName(eName);
        listEnemy.append(li);
        console.log(eName);
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



hit.addEventListener('click', (e) =>{
    
  
    //if (enemyInfo.Hp < 1) return;
    // if  (Math.random() < 0.5) {    //enemy health 
    //     enemyInfo.HP--;
    // } //else {
    //     pNames.HP--    // player health 
    // }
    // eNames.HP--;    Attempt-1
    //eName.HP = 0; attempt-2
    //enemyInfo.eName.HP = 4;
     // renderAttack(); attempt-3
     //enemyInfo.HP = 0; attempt-5
    console.log(eNames.HP);
});
// console.log('the', enemyNameBtn);
  

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state