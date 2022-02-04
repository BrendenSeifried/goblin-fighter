// import { renderattack, renderEnemyName } from './utils.js';
import { renderEnemyName } from './utils.js';



const enemyInfo = document.getElementById('enemy-info');
const listEnemy = document.getElementById('list-enemy');

//const playerID = document.querySelector('player');
const playerID = document.getElementById('player');
// let state

// const playerInfo = document.getElementById('player-info');
// const listPlayer = document.getElementById('list-player');

//const hit = document.getElementById('attack');
let playerHP = 10;
let eNames = [
    { enemyNme: 'Bob', icon: '../assets/alive.png', HP: 3 },
    { enemyNme: 'Tom', icon: '../assets/alive.png', HP: 3 }
];


// function renderPlayers() {
//     listPlayer.innerHTML = '';
//     const div = renderPlayer(playerHP);
//     div.addEventListener('click', (e) => {
//         clicky(playerHP);
//     });
//     console.log(playerHP);
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
        alert('Enemy Defeated!');
        //console.log('DEAD!');
        return;
    }
        
    else if (Math.random() < 0.5) {
        eName.HP--; 
        alert('Hit Enemy!');
      //  console.log('HIT!');
    } else {
        alert('Missed Enemy!');
       // console.log('MISS!');
    }


    if (Math.random() < 0.5) {
        playerHP--;
        alert('Enemy scores hit HP lost!');
       // console.log('enemy hit!');
    } else {
        alert('Enemy Attack Dodged!');
       // console.log('enemy missed!');
    }

    playerID.textContent = playerHP;
        
    //console.log('clicked', eNames);
    renderEnemyNames();
    console.log(playerHP);
   // renderPlayers();
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
    //renderPlayers();

});

// playerInfo.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const addPName = new FormData(playerInfo);
//     const playerName = {
//         pHP: Number('playerHP'),
        
//     };
//     eNames.push(playerName);
//     renderPlayers();

// });



  

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state