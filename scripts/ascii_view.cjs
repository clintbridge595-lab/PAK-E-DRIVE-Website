const fs = require('fs');
const { execSync } = require('child_process');

function printAscii(imagePath, w = 60, h = 20) {
  const chars = ' .:-=+*#%@';
  const raw = execSync(`convert "${imagePath}" -resize ${w}x${h}! -colorspace Gray gray:-`);
  console.log(`\n=== ASCII: ${imagePath} (${w}x${h}) ===`);
  for (let r = 0; r < h; r++) {
    let line = '';
    for (let c = 0; c < w; c++) {
      const val = raw[r * w + c];
      const charIdx = Math.floor((val / 256) * chars.length);
      line += chars[Math.min(chars.length - 1, charIdx)];
    }
    console.log(line);
  }
}

const file = process.argv[2] || 'public/cars_backup/bulletproof_v8_b6.jpg';
const w = parseInt(process.argv[3]) || 80;
const h = parseInt(process.argv[4]) || 28;
printAscii(file, w, h);
