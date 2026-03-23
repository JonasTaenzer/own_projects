function myFunction() {
  let id = "1234";
  let versuch = 0;
  let Kontostand = 1000;
  while (versuch < 3) {
    let passwort = prompt("Bitte geben sie ihr Passwort ein:");
    if (id === passwort) {
      // logik bankautomat
      document.getElementById("demo").innerHTML =
        "Kontostand: " + Kontostand + "€";
      document
        .getElementById("einzahlen")
        .addEventListener("click", function () {
          let einzahlung = document.getElementById('input');
          Kontostand = Kontostand + parseFloat(einzahlung.value);
          document.getElementById("demo").innerHTML =
            "Kontostand: " + Kontostand + "€";
        });
      document
        .getElementById("auszahlen")
        .addEventListener("click", function () {
          let auszahlung = document.getElementById('input');
          auszahlung = parseFloat(auszahlung.value);
          if (auszahlung > Kontostand) {
            alert(
              "Zu wenig Guthaben. Bitte wählen sie einen geringeren Betrag."
            );
          } else {
            Kontostand = Kontostand - auszahlung;
            document.getElementById("demo").innerHTML =
              "Kontostand: " + Kontostand + "€";
          }
        });

      break;
    } else if (versuch >= 2) {
      alert("Karte eingezogen! Wenden sie sich an einen Mitarbeiter.");
    }

    versuch++;
  }
}

function closeWin() {
  self.close();
}
