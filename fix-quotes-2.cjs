const fs = require('fs');
const path = require('path');

const constantsPath = path.join(process.cwd(), 'constants.ts');
let lines = fs.readFileSync(constantsPath, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('imageUrl:')) {
        // The line looks something like:
        // imageUrl: '105_Mujer_Victoria's_Secret_Pure_Seduction.webp',
        // Or: imageUrl: "162_Mujer_Issey_Miyake_L'eau_d'Issey.webp",
        
        // We can extract everything between the first quote (single or double) and `.webp` or `.png`
        let str = lines[i];
        let startIdx = str.indexOf("'");
        if (startIdx === -1 || (str.indexOf('"') !== -1 && str.indexOf('"') < startIdx)) {
            startIdx = str.indexOf('"');
        }
        
        let endIdx = str.lastIndexOf('.webp');
        if (endIdx === -1) endIdx = str.lastIndexOf('.png');
        
        if (startIdx !== -1 && endIdx !== -1) {
            let filename = str.substring(startIdx + 1, endIdx + 5);
            // sometimes it might have captured a quote if it was double quoted at the start and single at the end, clean it:
            if (filename.startsWith("'") || filename.startsWith('"')) filename = filename.substring(1);
            if (filename.endsWith("'") || filename.endsWith('"')) filename = filename.substring(0, filename.length - 1);
            
            lines[i] = `    imageUrl: "${filename}",`;
        }
    }
}
fs.writeFileSync(constantsPath, lines.join('\n'));
console.log('Fixed quotes robustly');
