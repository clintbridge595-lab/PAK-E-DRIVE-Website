const fs = require('fs');
const { execSync } = require('child_process');

const files = fs.readdirSync('public/cars_raw_pristine').filter(f => f.endsWith('.jpg'));

console.log('Searching for text and license plate candidates across all images...');

for (const file of files) {
  try {
    const out = execSync(`tesseract "public/cars_raw_pristine/${file}" stdout --psm 11 tsv 2>/dev/null`, { encoding: 'utf-8' });
    const lines = out.split('\n');
    const hits = [];
    for (let i = 1; i < lines.length; i++) {
      const parts = lines[i].split('\t');
      if (parts.length >= 12) {
        const text = parts[11].trim();
        const conf = parseFloat(parts[10]);
        const left = parseInt(parts[6]);
        const top = parseInt(parts[7]);
        const width = parseInt(parts[8]);
        const height = parseInt(parts[9]);
        if (text.length > 1 && top > 200 && top < 700) {
          hits.push({ text, conf, left, top, width, height });
        }
      }
    }
    console.log(`\n=== ${file} ===`);
    for (const h of hits) {
      console.log(`  "${h.text}" conf:${h.conf.toFixed(1)} at [${h.left}, ${h.top}, ${h.width}x${h.height}]`);
    }
  } catch (err) {
    console.error(`Error on ${file}:`, err.message);
  }
}
