

export function renderEnemyName(eName) {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const img = document.createElement('img');
    //const button = document.createElement('button');
    //const hit = document.getElementById('attack');
    li.textContent = `Name: ${eName.enemyNme}-Hit points: ${eName.HP}`;
    img.src = eName.icon;
    div.append(img, li);

    return div;
}


