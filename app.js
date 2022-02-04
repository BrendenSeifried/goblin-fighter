// import { renderattack, renderEnemyName } from './utils.js';
import { renderEnemyName } from './utils.js';


const enemyInfo = document.getElementById('enemy-info');
const listEnemy = document.getElementById('list-enemy');
// let state

// const playerInfo = document.getElementById('player-info');
// const listPlayer = document.getElementById('list-player');

//const hit = document.getElementById('attack');
let playerHP = 10;
let eNames = [

];
// let playerStuff = [];  //enemy name empty string
//let eHP = [];
// set event listeners 


// function renderEnemyNames() {
//     listEnemy.innerHTML = '';
//     for (let eName of eNames) {
//         const li = renderEnemyName(eName);
//         li.addEventListener('click', (e) => {
//            // eName.HP--;
//             if (eName.HP <= 0){
//                 eName.icon = '../assets/dead.png';
//                 console.log('DEAD!');
//             }
            
//             else if (Math.random() < 0.5) {
//                 eName.HP--; 
//                 console.log('HIT!');
//             } else {
//                 //eName.HP++;
//                 console.log('MISS!');
//             }

            
//             console.log('clicked', eNames);
            
//         });

//         listEnemy.append(li);
        

//         console.log(eName);
//     }
// }



// function renderPlayers() {
//     listPlayer.innerHTML = '';
//     for (let stuff of playerStuff) {
//         const div = renderPlayer(stuff);
//         div.addEventListener('click', (e) => {
//             clicky(eName); 
//         });

//         listPlayer.append(div);
        

//         console.log(stuff);
//     }
// }


function renderEnemyNames() {
    listEnemy.innerHTML = '';
    for (let eName of eNames) {
        const div = renderEnemyName(eName);
        div.addEventListener('click', (e) => {
            clicky(eName); 
        });

        listEnemy.append(div);
        

        console.log(eName);
    }
}




function clicky(eName) {
    if (playerHP <= 0) return;
    if (eName.HP <= 0){
        eName.icon = '../assets/dead.png';
        console.log('DEAD!');
    }
        
    else if (Math.random() < 0.5) {
        eName.HP--; 
        console.log('HIT!');
    } else {
         
        console.log('MISS!');
    }

    if (Math.random() < 0.5) {
        playerHP--;
        console.log('enemy hit!');
    } else {
        console.log('enemy missed!');
    }


        
    console.log('clicked', eNames);
    renderEnemyNames();
}


enemyInfo.addEventListener('submit', (e) => {
    e.preventDefault();
    const addEName = new FormData(enemyInfo);
    const enName = {
        enemyNme: addEName.get('enemyNme'),
        icon: '../assets/alive.png',
        HP: 3,
        //ID: ++, 
        //button:
        
    };
    //enName.ID++;
    eNames.push(enName);
    renderEnemyNames();
    //renderAttack();
});

// playerInfo.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const addPName = new FormData(playerInfo);
//     const enName = {
       
//         icon: '../assets/alive.png',
//         HP: 10,
//         //ID: ++, 
//         //button:
        
//     };
//     //enName.ID++;
//     eNames.push(enName);
//     renderPlayer();
//     //renderAttack();
// });


  

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state