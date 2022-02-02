import { renderEnemyName } from './utils';

// import functions and grab DOM elements
const enemyName = document.getElementById('enemy-name');
// let state

let eNames = []; //enemy name empty string
// set event listeners 


enemyName.addEventListener('click', (e) => {
    e.preventDefault();
    const addEName = new FormData(enemyName);
    const userData = {
        name: addEName.get('name'),
    };
    console.log(userData);
    eNames.push(userData);
    renderEnemyName();
  
});
  //console.log(meal);

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
