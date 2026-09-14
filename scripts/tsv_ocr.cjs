const fs = require('fs');
const { execSync } = require('child_process');

const files = fs.readdirSync('public/cars_raw_pristine').filter(f => f.endsWith('.jpg'));

for (const file of files) {
  try {
    const tsv = execSync(`tesseract "public/cars_raw_pristine/${file}" stdout tsv --psm 11 2>/dev/null`, { encoding: 'utf-8' });
    const lines = tsv.split('\n');
    const words = [];
    for (let i = 1; i < lines.length; i++) {
      const parts = lines[i].split('\t');
      if (parts.length >= 12) {
        const conf = parseInt(parts[10]);
        const text = parts[11].trim();
        const left = parseInt(parts[6]);
        const top = parseInt(parts[7]);
        const width = parseInt(parts[8]);
        const height = parseInt(parts[9]);
        if (text.length > 0 && conf > 20) {
          words.push({ text, conf, left, top, width, height });
        }
      }
    }
    if (words.length > 0) {
      console.log(`\n=== ${file} ===`);
      for (const w of words) {
        console.log(`  "${w.text}" (conf: ${w.conf}) at [${w.left}, ${w.top}, ${w.width}x${w.height}]`);
      }
    }
  } catch (e) {
    console.error(e);
  }
}
