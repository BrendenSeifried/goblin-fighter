// import { renderattack, renderEnemyName } from './utils.js';
import { renderEnemyName } from './utils.js';



const enemyInfo = document.getElementById('enemy-info');
const listEnemy = document.getElementById('list-enemy');

const playerID = document.getElementById('player');



let playerHP = 10;
let eNames = [
    { enemyNme: 'Bob', icon: '../assets/alive.png', HP: 3 },
    { enemyNme: 'Tom', icon: '../assets/alive.png', HP: 3 }
];



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
    if (playerHP <= 0) {return;}
    if (eName.HP <= 0){
        eName.icon = '../assets/dead.png';
        alert('Enemy Defeated!');
        //console.log('DEAD!');
        return;
    }
        
    else if (Math.random() < 0.5) {
        eName.HP--; 
        alert('Hit Enemy!');
    } else {
        alert('Missed Enemy!');
    }


    if (Math.random() < 0.5) {
        playerHP--;
        alert('Enemy scores hit HP lost!');
    } else {
        alert('Enemy Attack Dodged!');
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

