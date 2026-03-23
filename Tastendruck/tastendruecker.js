const robot = require("robotjs");

// 2 Sekunden warten, damit du Zeit hast, z. B. ein Textfeld zu fokussieren
setTimeout(() => {
    for (let i = 0; i < 1000000; i++) {
        robot.keyTap("a"); // hier kannst du auch z. B. "enter" oder "space" nehmen
    }
    console.log("Fertig: Taste 1000000x gedrückt.");
}, 2000);