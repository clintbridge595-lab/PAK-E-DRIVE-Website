const fs = require('fs');
const { execSync } = require('child_process');

const remaining = [
  'corolla_altis.jpg',
  'honda_civic.jpg',
  'honda_brv.jpg',
  'toyota_yaris.jpg',
  'suzuki_alto.jpg',
  'toyota_noah.jpg',
  'toyota_prado.jpg',
  'land_cruiser_v8.jpg',
  'copen_convertible.jpg',
  'bulletproof_v8_b6.jpg',
  'bulletproof_prado_b6.jpg',
  'bulletproof_revo_b6.jpg',
  'bulletproof_fortuner_b6.jpg',
  'hilux_revo.jpg'
];

for (const f of remaining) {
  console.log(`\n================== Checking: ${f} ==================`);
  // Try several PSM modes to find any plate characters
  for (const psm of [6, 7, 8, 11]) {
    try {
      const txt = execSync(`tesseract "public/cars_raw_pristine/${f}" stdout --psm ${psm} tsv 2>/dev/null`, { encoding: 'utf-8' });
      const lines = txt.split('\n');
      for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split('\t');
        if (parts.length >= 12) {
          const text = parts[11].trim();
          const conf = parseFloat(parts[10]);
          const left = parseInt(parts[6]);
          const top = parseInt(parts[7]);
          const width = parseInt(parts[8]);
          const height = parseInt(parts[9]);
          // Looking for numbers or uppercase plate letters
          if (/[0-9]/.test(text) || /^[A-Z]{2,4}/.test(text)) {
            if (top > 250 && top < 720 && width > 15 && width < 300 && height > 12 && height < 100) {
              console.log(`  [PSM ${psm}] "${text}" (conf: ${conf.toFixed(0)}) at [x:${left}, y:${top}, w:${width}, h:${height}]`);
            }
          }
        }
      }
    } catch (e) {}
  }
}
