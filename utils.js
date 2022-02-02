export function renderEnemyName(enemyNames) {
    const li = document.createElement('li');
    li.textContent = `${enemyNames}`;
    return li;
}