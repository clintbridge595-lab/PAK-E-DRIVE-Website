const fs = require('fs');
const { execSync } = require('child_process');

const files = fs.readdirSync('public/cars_raw_pristine').filter(f => f.endsWith('.jpg'));

console.log('Testing OCR on pristine images...');

for (const file of files) {
  try {
    const ocr = execSync(`tesseract "public/cars_raw_pristine/${file}" stdout --psm 11 2>/dev/null`, { encoding: 'utf-8' });
    const lines = ocr.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length > 0) {
      console.log(`\n=== ${file} ===`);
      console.log(lines.join(' | '));
    }
  } catch (e) {
    // ignore
  }
}
