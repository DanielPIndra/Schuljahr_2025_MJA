let gesamt  = 0;

function Preis (){
    const dropdown = document.getElementById("Dropdown");
    const priceDisplay = document.getElementById("priceDisplay");
    const price = dropdown.value;

      priceDisplay.textContent = price ? `Preis: ${price}€` : "Preis: -";
}
function Hinzufügen(){
    const tabelle = document.getElementById('table');
    const reihe = tabelle.insertRow(1);
    let zelle = reihe.insertCell(0);
    let zelle1 = reihe.insertCell(1);

    zelle.innerHTML = document.getElementById('Dropdown').selectedOptions[0].text;
    zelle1.innerHTML = document.getElementById('Dropdown').value + "€";                                          

    gesamt += parseFloat(document.getElementById('Dropdown').value);
    
    document.getElementById('Gesamtsumme').textContent = `Gesamtsumme: ${gesamt.toFixed(2)}€`;
}