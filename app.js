// import { renderattack, renderEnemyName } from './utils.js';
import { renderEnemyName } from './utils.js';



const enemyInfo = document.getElementById('enemy-info');
const listEnemy = document.getElementById('list-enemy');
const playerPic = document.getElementById('playerimg');

const playerID = document.getElementById('player');
const gameOver = document.getElementById('gameover');

let playerHP = 10;
let eNames = [
    { enemyNme: 'Bob', icon: '../assets/alive.png', HP: 3 },
    { enemyNme: 'Tom', icon: '../assets/alive.png', HP: 3 }
];
playerID.textContent = playerHP;


function renderEnemyNames() {
    listEnemy.innerHTML = '';
    for (let eName of eNames) {
        const div = renderEnemyName(eName);
        div.addEventListener('click', () => {
            clicky(eName); 
        });

        listEnemy.append(div);
        

        console.log(eName);
    }
}

renderEnemyNames();


function clicky(eName) {
    if (playerHP <= 0) {
        playerPic.src = './assets/player-dead.jpg';
        alert('You have succumb to your inner demons. GAME OVER');
        gameOver.textContent = 'GAME OVER';
        return;}
    if (eName.HP <= 0){
        eName.icon = '../assets/dead.png';
        alert('Enemy Defeated! Move to the next as it crumbles at your feet.');
        //console.log('DEAD!');
        return;
    }
        
    else if (Math.random() < 0.5) {
        eName.HP--; 
        alert(`You successfully struck ${eName.enemyNme} the Demon!`);
    } else {
        alert(`You missed ${eName.enemyNme} the Demon!`);
    }


    if (Math.random() < 0.5) {
        playerHP--;
        alert(`${eName.enemyNme} the Demon scores hit HP lost!`);
    } else {
        alert(`${eName.enemyNme} the Demon's Attack Dodged!`);
    }

    playerID.textContent = playerHP;
    renderEnemyNames();
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

