const ergebnis = document.getElementById("ergebnis");

document.querySelectorAll(".numbers").forEach((element) => {
  element.addEventListener("click", () => {
    ergebnis.textContent += element.textContent;
  });
});

document.querySelectorAll(".operator").forEach((element) => {
  element.addEventListener("click", () => {
    ergebnis.textContent += element.textContent;
  });
});

document.getElementById("gleich").addEventListener("click", () => {
  try {
    const result = calculateExpression(ergebnis.textContent);
    ergebnis.textContent = result;
  } catch (error) {
    ergebnis.textContent = "Fehler";
  }
});

document.getElementById("delete").addEventListener("click", () => {
  ergebnis.textContent = "";
});

document.getElementById("backspace").addEventListener("click", () => {
  ergebnis.textContent = ergebnis.textContent.slice(0, -1);
});

document.getElementById("prozent").addEventListener("click", () => {
  try {
    const result = calculateExpression(ergebnis.textContent) * 0.01;
    ergebnis.textContent = result;
  } catch (error) {
    ergebnis.textContent = "Fehler";
  }
});

document.getElementById("quadrat").addEventListener("click", () => {
  try {
    const value = calculateExpression(ergebnis.textContent);
    if (isNaN(value) || ergebnis.textContent.trim() === "")
      throw new Error("Ungültige Eingabe");
    ergebnis.textContent = value ** 2;
  } catch (error) {
    ergebnis.textContent = "Fehler";
  }
});

document.getElementById("wurzel").addEventListener("click", () => {
  try {
    const value = calculateExpression(ergebnis.textContent);
    if (isNaN(value) || ergebnis.textContent.trim() === "")
      throw new Error("Ungültige Eingabe");
    if (value < 0) throw new Error("Keine reelle Lösung");
    ergebnis.textContent = Math.sqrt(value);
  } catch (error) {
    ergebnis.textContent = "Fehler";
  }
});

function calculateExpression(expression) {
  if (expression.split('')[0] === '/' || !/^[0-9+\-*/.() ]+$/.test(expression))
    throw new Error("Ungültige Zeichen");

  try {
    return new Function(`"use strict"; return (${expression})`)();
  } catch {
    throw new Error("Ungültiger Ausdruck");
  }
}

document.addEventListener("keyup", (event) => {
  const key = event.key;
  console.log(event);

  const button = document.querySelector(`button[data-key="${key}"]`);
  if (button) {
    button.classList.add("active");
    setTimeout(() => button.classList.remove("active"), 300);
    button.click();
    return;
  }

  if (key === "Enter") {
    document.getElementById("gleich").click();
  } else if (key === "Backspace") {
    ergebnis.textContent = ergebnis.textContent.slice(0, -1);
  } else if (key === "Escape") {
    ergebnis.textContent = "";
  }
});
