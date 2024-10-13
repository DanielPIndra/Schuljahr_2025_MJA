function ermittleAuszahlung() {
    // Wert des Eingabefeldes holen
    let inputfeld = document.getElementById("input");
    let wert = parseInt(inputfeld.value);        //parseInt wandelt den Wert in eine Ganzzahl um

    let ausgabe = "";

    
    switch (wert) {
        case 1:
            ausgabe = "100 € werden ausgezahlt.";
            break;
        case 2:
            ausgabe = "200 € werden ausgezahlt.";
            break;
        case 3:
            ausgabe = "300 € werden ausgezahlt.";
            break;
        default:
            if (wert >= 10 && wert <= 400 && wert % 10 === 0) {               //prüfen ob der Wert zwischen 10 und 400 liegt und ob er durch 10 teilbar ist
                ausgabe = `Es wird ein Betrag von ${wert} € ausgezahlt.`;
            } else {
                ausgabe = "Bitte geben Sie einen Betrag in 10 €-Schritten zwischen 10 € und 400 € ein.";
            }
    }

    
    document.getElementById("ausgabe").innerText = ausgabe;   //Ausgabe in das Ausgabefeld schreiben
}
