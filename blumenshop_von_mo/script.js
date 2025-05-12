window.onload = function(){
    selection();
}
let sum = 0;

function selection() {
    const productDropdown = document.getElementById("product");
    const productPrice = Number(productDropdown.value);
    document.getElementById("output").innerHTML = productPrice + "€";
}

function add() {
    const productDropdown = document.getElementById("product");
    const productName = productDropdown.options[productDropdown.selectedIndex].text;
    const productPrice = Number(productDropdown.value);

    const tabelle = document.getElementById("table");
    const reihe = tabelle.insertRow();
    const name = reihe.insertCell(0);
    const preis = reihe.insertCell(1);

    name.innerHTML = productName;
    preis.innerHTML = productPrice.toFixed(2) + "€";

    sum += productPrice; 
    document.getElementById("betrag").innerHTML = sum.toFixed(2) + "€";
}

function alertFunction(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;

    if (username === "") {
        alert("Bitte geben Sie ihren Namen ein!");
    } else if (email === "") {
        alert("Bitte geben Sie ihre Emailadresse ein!");
    } else if (sum === 0) {
        alert("Bitte fügen Sie etwas in ihren Warenkorb hinzu!");
    } else {
        alert("Ihre Bestellung " + username + " im Wert von " + sum.toFixed(2) + "€ " +
            "wurde erfolgreich aufgegeben. Die Rechnung wurde an die E-Mail-Adresse " + email + " gesendet.");
    }
}