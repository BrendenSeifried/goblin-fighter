

export function renderEnemyName(eName) {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const img = document.createElement('img');
    //const button = document.createElement('button');
    //const hit = document.getElementById('attack');
    li.textContent = `${eName.enemyNme} The Demon has ${eName.HP} Hit points left `;
    img.src = eName.icon;
    div.append(img, li);

    return div;
}


// export function renderPlayer(playerHP) {
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');

//     h2.textContent = `You have ${playerHP} health points left.`;

//     div.append(h2);
//     return div;

// }

