const fs = require('fs');
const { execSync } = require('child_process');

const plateData = JSON.parse(fs.readFileSync('src/data/plateCoordinates.json', 'utf8'));

for (const [filename, box] of Object.entries(plateData)) {
  const sourcePath = `public/cars_backup/${filename}`;
  if (!fs.existsSync(sourcePath)) continue;

  const pad = 20;
  const cx = Math.max(0, box.x - pad);
  const cy = Math.max(0, box.y - pad);
  const cw = box.w + pad * 2;
  const ch = box.h + pad * 2;

  const raw = execSync(`convert "${sourcePath}" -crop ${cw}x${ch}+${cx}+${cy} -resize 40x12! -colorspace Gray gray:-`);
  const chars = ' .:-=+*#%@';
  console.log(`\n========================================`);
  console.log(`${filename} -> Box: x:${box.x}, y:${box.y}, w:${box.w}, h:${box.h}`);
  for (let r = 0; r < 12; r++) {
    let line = '';
    for (let c = 0; c < 40; c++) {
      const val = raw[r * 40 + c];
      const charIdx = Math.floor((val / 256) * chars.length);
      line += chars[Math.min(chars.length - 1, charIdx)];
    }
    console.log(line);
  }
}
