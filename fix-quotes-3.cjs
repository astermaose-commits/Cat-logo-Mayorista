const fs = require('fs');
const path = require('path');

const constantsPath = path.join(process.cwd(), 'constants.ts');
let lines = fs.readFileSync(constantsPath, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('imageUrl:')) {
        let str = lines[i];
        
        // Find the start of the filename (first quote or backtick)
        let firstQuote = -1;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === "'" || str[j] === '"' || str[j] === '`') {
                firstQuote = j;
                break;
            }
        }
        
        let endIdx = str.lastIndexOf('.webp');
        if (endIdx === -1) endIdx = str.lastIndexOf('.png');
        
        if (firstQuote !== -1 && endIdx !== -1) {
            let filename = str.substring(firstQuote, endIdx + 5);
            // strip ALL wrapping quotes
            filename = filename.replace(/^['"`]+|['"`]+$/g, '');
            
            // Wait, my first script replaced internal quotes! 
            // e.g. "186_Hombre_Issey_Miyake_L"eau_d'Issey_Pour_Homme.webp"
            // Let's replace any double quotes inside the string back to single quotes!
            filename = filename.replace(/"/g, "'");
            
            lines[i] = `    imageUrl: \`${filename}\`,`;
        }
    }
}
fs.writeFileSync(constantsPath, lines.join('\n'));
console.log('Fixed quotes completely using backticks');
