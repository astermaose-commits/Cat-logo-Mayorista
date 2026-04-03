const fs = require('fs');
const path = require('path');

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

// Use a regex to find all imageUrl lines and replace single quotes with double quotes
content = content.replace(/imageUrl:\s*'([^']+)'/g, (match, p1) => {
    return `imageUrl: "${p1}"`;
});

// the previous regex only works if the string doesn't have internal quotes cutting it off!
// Wait - if the file is currently syntax erroring like:
// imageUrl: '162_Mujer_Issey_Miyake_L'eau_d'Issey.webp',
// Then the regex `'([^']+)'` will match `'162_Mujer_Issey_Miyake_L'` and leave `eau_d'Issey.webp',` alone!
// We need a better regex. The line in constants.ts always ends with `.webp',`
// We can match `imageUrl: '(.*\.webp)',` and then escape the single quotes inside the capture group, or use double quotes.

content = content.replace(/imageUrl:\s*'(.*\.webp)',/g, (match, p1) => {
    // If the captured group contains a double quote we shouldn't have an issue since we only had single quotes issue
    return `imageUrl: "${p1}",`;
});

fs.writeFileSync(constantsPath, content);
console.log('Fixed quotes in constants.ts');
