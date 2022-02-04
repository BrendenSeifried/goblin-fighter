export function renderEnemyName(eName) {
    const li = document.createElement('li');
    li.textContent = `${eName.enemyNme}`;
    return li;
}