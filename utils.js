// export function renderEnemyName(eName) {
//     const div = document.createElement('div');
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     li.textContent = `${eName.enemyNme} ${eName.HP}`;
//     img.src = eName.icon;
//     div.append(img, li);
//     return div;
// }

export function renderEnemyName(eName) {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const img = document.createElement('img');
    //const button = document.createElement('button');
    //const hit = document.getElementById('attack');
    li.textContent = `${eName.enemyNme} ${eName.HP}`;
    img.src = eName.icon;
    //button.textContent = 'attack!';
    //button.click;
    //div.append(img, li, button);
    div.append(img, li);

    // if (eName.HP < 0) {
    //     eName.classlist.add('dead');
    // }

    return div;
}

// export function renderEnemyName(hitEnemy){   //figure out function for getting enemy HP to zero
//     const button = document.createElement('button');
//     const li = document.createElement('li');
//     const div = document.createElement('div');

//    // li.textContent = `${eName.enemyNme} ${eName.HP}`;
//     //const div = document.createElement('div');
//     //button.textContent = 'attack!';
//     //let eName.HP = 0;
//     li.textContent = `${hitEnemy.HP}`;
//     button.click;
//     div.append(li, button);

//    // div.append(button);
//     return button;
// }