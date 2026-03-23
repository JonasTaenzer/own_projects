const kilometer = document.getElementById("kilometer");
const ergebnis = document.getElementById("ergebnis")

function myFunction() {
  const kiloMeter = parseFloat(kilometer.value) || 0;  
  const result = 3.9 + (kiloMeter * 2.3);  // Grundgebühr + Kilometer * Kilometerpreis
  ergebnis.innerHTML = result.toFixed(2) + ' €';
}
// ab dem 8. km 1,65€