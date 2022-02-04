// import { renderattack, renderEnemyName } from './utils.js';
import { renderEnemyName } from './utils.js';


const enemyInfo = document.getElementById('enemy-info');
const listEnemy = document.getElementById('list-enemy');
// let state

//const hit = document.getElementById('attack');

let eNames = []; //enemy name empty string
//let eHP = [];
// set event listeners 


function renderEnemyNames() {
    listEnemy.innerHTML = '';
    for (let eName of eNames) {
        const li = renderEnemyName(eName);
        li.addEventListener('click', (e) => {
            eName.HP--;
            //if (eName.HP <= 0) return;
            if (Math.random() < 0.5) {
                eName.HP--; 
                console.log('HIT!');
            } else {
                eName.HP++;
                console.log('MISS!');
            }

            
            console.log('clicked', eNames);
            
        });

        //ID++;
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
        HP: 6,
        //ID: ++, 
        //button:
        
    };
    //enName.ID++;
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



  

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state