// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderEnemyName } from '../utils.js';

const test = QUnit.test;

test('enemy data test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div><img src="../assets/alive.png"><li>bob The Demon has 3 Hit points left </li></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderEnemyName({ enemyNme: 'bob', icon: '../assets/alive.png', HP: 3 });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});



// test('palyer data test', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = '<div class="player-stats"><!-- <img  src="./assets/player.jpg"/> --><img id="playerimg" src="./assets/player.jpg"><h2>Hit points left:</h2><h2 id="player"> </h2></div>';
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = renderEnemyName({ enemyNme: 'bob', icon: '../assets/alive.png', HP: 3 });

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual.outerHTML, expected);
// });
