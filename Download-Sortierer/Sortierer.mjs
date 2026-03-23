import fs from 'fs/promises';
import path from 'path';

let currentPath = 'C:/Users/jnstn/Downloads/';

async function dirRead() {
    try {
        const files = await fs.readdir(currentPath);
        console.log('Verzeichnis ausgelesen: ' + currentPath);
        console.log(files);
        for (const file of files) {
            await processFile(file);
        }
    } catch (err) {
        console.error('Fehler beim Lesen des Verzeichnisses:', err);
    }
}

async function processFile(file) {
    try {
        let extension = path.extname(file);
        console.log('Extension ist ' + extension);

        let targetDir = path.join(currentPath, extension);

        // Erstelle das Zielverzeichnis, falls es noch nicht existiert
        await fs.mkdir(targetDir, { recursive: true });
        console.log('Ordner wurde erstellt oder existiert bereits: ' + targetDir);

        let oldPath = path.join(currentPath, file);
        let newPath = path.join(targetDir, file);

        // Verschiebe die Datei
        await fs.rename(oldPath, newPath);
        console.log('Die Datei wurde erfolgreich verschoben: ' + file);
    } catch (err) {
        console.error('Fehler beim Verarbeiten der Datei:', err);
    }
}

dirRead();