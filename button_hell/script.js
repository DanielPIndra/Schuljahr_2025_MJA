const farben = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "black", "white"];

function getRandomColor() {
    return farben[Math.floor(Math.random() * farben.length)];
}

function doubleButtons() {
    const container = document.getElementById('buttonContainer');
    const currentButtons = container.getElementsByTagName('button');
    const currentCount = currentButtons.length;

    for (let i = 0; i < currentCount; i++) {
        const newButton = document.createElement('button');
        newButton.textContent = 'Klicken, um zu verdoppeln';
        newButton.onclick = doubleButtons;
        newButton.style.backgroundColor = getRandomColor();
        container.appendChild(newButton);
    }

    document.getElementById('buttonCount').textContent = 'Anzahl der Buttons: ' + container.getElementsByTagName('button').length;
}

function deleteButton() {
    const container = document.getElementById('buttonContainer');
    const deleteCount = parseInt(document.getElementById('deleteCount').value, 10) || 0;
    let currentButtons = Array.from(container.getElementsByTagName('button'));

    if (deleteCount <= 0) return;

    const initialCount = currentButtons.length;

    for (let i = 0; i < deleteCount && currentButtons.length > 0; i++) {
        let buttonToRemove = currentButtons.pop();
        container.removeChild(buttonToRemove);
    }

    document.getElementById('buttonCount').textContent = 'Anzahl der Buttons: ' + Math.max(initialCount - deleteCount, 0);
}
