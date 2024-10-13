function addNumbers() {
    
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);

    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById('result').textContent = 'Bitte geben Sie nur ganze Zahlen ein.';
    } else {
        const result = input1 + input2;
        document.getElementById('result').textContent = result;
    }
}
