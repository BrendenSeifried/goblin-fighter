export function renderEnemyName(eName) {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const img = document.createElement('img');
    li.textContent = `${eName.enemyNme} ${eName.HP}`;
    img.src = eName.icon;
    div.append(img, li);
    return div;
}