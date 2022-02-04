// import { renderattack, renderEnemyName } from './utils.js';
import { renderEnemyName } from './utils.js';
//import { renderAttack } from './utils.js';
// import functions and grab DOM elements

const enemyInfo = document.getElementById('enemy-info');
const listEnemy = document.getElementById('list-enemy');
// let state

const hit = document.getElementById('attack');

let eNames = []; //enemy name empty string
//let eHP = [];
// set event listeners 


function renderEnemyNames() {
    listEnemy.innerHTML = '';
    for (let eName of eNames) {
        const li = renderEnemyName(eName);
        li.addEventListener('click', (e) => {
            console.log('clicked', eNames);
            
        });
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
        // ID:++, 
        //button:
        
    };
    
    eNames.push(enName);
    renderEnemyNames();
    //renderAttack();
});

// enemyInfo.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const addEName = new FormData(enemyInfo);
//     const enName = {
//         enemyNme: addEName.get('enemyNme'),
//         icon: '../assets/alive.png',
//         HP: 3,
//         // ID:++, 
//         //button:
        
//     };
    
//     eNames.push(enName);
//     renderEnemyNames();
//     renderAttack();
// });



// hit.addEventListener('click', (e) =>{
    
  
//     //if (enemyInfo.Hp < 1) return;
//     // if  (Math.random() < 0.5) {    //enemy health 
//     //     enemyInfo.HP--;
//     // } //else {
//     //     pNames.HP--    // player health 
//     // }

//     for (let eName of eNames) {
//         //const li = renderEnemyName(eName);
//             //listEnemy.append(li);
//         eName.HP--;
//         console.log(eName);
//     }
       
//     //}

//   //  eNames.HP--; 
//     // eNames.HP = 0; 
//     // enemyInfo.eName.HP = 4;
//     // renderAttack(); 
//     // enemyInfo.HP = 0; 
//    // console.log(eNames);
// });
// console.log('the', enemyNameBtn);
  

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state