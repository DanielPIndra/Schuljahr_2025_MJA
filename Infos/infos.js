// Wartet darauf, dass das Dokument vollständig geladen ist, bevor es das Skript ausführt
document.addEventListener('DOMContentLoaded', () => {
    // Holt den Button mit der ID 'colorButton' aus dem HTML-Dokument
    const button = document.getElementById('colorButton');

    // Funktion, um eine zufällige Farbe zu generieren
    function getRandomColor() {
        // Hexadezimale Zeichen (0-9, A-F) für die Farbwerte
        const letters = '0123456789ABCDEF';
        let color = '#'; // Ein Farbwert beginnt immer mit '#'
        
        // Schleife, um eine sechsstellige Hex-Farbe zu generieren
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]; // Zufällige Auswahl eines Buchstabens/Zahl
        }
        return color; // Gibt den generierten Farbwert zurück
    }

    // Fügt einen Event-Listener hinzu, der bei einem Klick auf den Button ausgeführt wird
    button.addEventListener('click', () => {
        // Ändert die Hintergrundfarbe der Seite zu einer zufälligen Farbe
        document.body.style.backgroundColor = getRandomColor();
        console.log('Color changed'); // Konsolenausgabe, um zu bestätigen, dass die Farbe geändert wurde
    });
});

// Funktion, um das Bild anzuzeigen
function showButton() {
    // Holt das Bild mit der ID 'bild' und setzt dessen Anzeige auf 'block', um es sichtbar zu machen
    document.getElementById('bild').style.display = 'block';
}

// Funktion, um das Bild zu verstecken
function hideButton() {
    // Holt das Bild mit der ID 'bild' und setzt dessen Anzeige auf 'none', um es zu verstecken
    document.getElementById('bild').style.display = 'none';
}

// Funktion, die einen Alert anzeigt, wenn sie aufgerufen wird
function showAlert() {
    // Zeigt eine Alert-Box mit einer Fehlermeldung an
    alert("Error 404: Page not found");
}

// Funktion, um den Text im Element mit der ID 'text' zu ändern
function changeText() {
    // Ändert den Textinhalt des Elements 'text' zu "Abfahrt"
    document.getElementById("text").innerText = "Abfahrt";
}
