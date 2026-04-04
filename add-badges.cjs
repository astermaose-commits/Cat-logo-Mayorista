const fs = require('fs');
const path = require('path');

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const badges = {
  'Aventus': 'TOP VENTAS',
  'Baccarat Rouge 540': 'TENDENCIA TIKTOK',
  'Good Girl': 'TOP VENTAS',
  'Sauvage Elixir': 'NUEVO',
  'Yara': 'TENDENCIA TIKTOK',
  'Bianco Latte': 'NUEVO',
  'Eros Flame': 'TOP VENTAS',
  'Hawas': 'TENDENCIA TIKTOK',
  'Club de Nuit Intense Man': 'TOP VENTAS',
  '1 Million Elixir': 'TOP VENTAS',
  'La Vie Est Belle': 'TOP VENTAS',
  'Acqua di Gio Profondo': 'NUEVO',
  'Khamrah': 'TENDENCIA TIKTOK',
  'Asad': 'NUEVO'
};

const lines = content.split('\n');
let currentName = '';

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.match(/name:\s*['"`](.*)['"`],?/)) {
        currentName = line.match(/name:\s*['"`](.*)['"`],?/)[1];
    }
    
    // Add badge just before imageUrl if undefined
    if (line.includes('imageUrl:') && !line.includes('badge:')) {
        let badgeToAssign = null;
        for (const [key, badge] of Object.entries(badges)) {
            if (currentName.includes(key)) {
                badgeToAssign = badge;
                break;
            }
        }
        
        if (badgeToAssign) {
            lines[i] = `    badge: '${badgeToAssign}',\n` + lines[i];
        }
        currentName = '';
    }
}

fs.writeFileSync(constantsPath, lines.join('\n'));
console.log('Badges assigned successfully');
