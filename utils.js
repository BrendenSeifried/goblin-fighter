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
    li.textContent = `Name: ${eName.enemyNme}-Hit points: ${eName.HP}`;
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
