document.getElementById('calculate-btn').addEventListener('click', calculateTip);

function calculateTip() {
  const billAmount = parseFloat(document.getElementById('bill').value);
  const tipPercentage = parseFloat(document.getElementById('tip').value);
  const numberOfPeople = parseInt(document.getElementById('people').value);

  if (isNaN(billAmount) || billAmount <= 0) {
    alert('Please enter a valid bill amount.');
    return;
  }

  if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
    alert('Please enter a valid number of people.');
    return;
  }

  const totalTip = billAmount * tipPercentage;
  const totalAmount = billAmount + totalTip;
  const totalPerPerson = totalAmount / numberOfPeople;

  document.getElementById('total-per-person').textContent = totalPerPerson.toFixed(3);
}
