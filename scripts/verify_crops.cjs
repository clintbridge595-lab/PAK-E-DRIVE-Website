const fs = require('fs');
const { execSync } = require('child_process');

function asciiCrop(file, x, y, w, h) {
  try {
    const raw = execSync(`convert "public/cars_raw_pristine/${file}" -crop ${w}x${h}+${x}+${y} -resize 40x10! -colorspace Gray gray:-`);
    const chars = ' .:-=+*#%@';
    console.log(`\n=== ${file} [${w}x${h}+${x}+${y}] ===`);
    for (let r = 0; r < 10; r++) {
      let line = '';
      for (let c = 0; c < 40; c++) {
        const val = raw[r * 40 + c];
        const charIdx = Math.floor((val / 256) * chars.length);
        line += chars[Math.min(chars.length - 1, charIdx)];
      }
      console.log(line);
    }
  } catch (e) {
    console.error(`Error on ${file}:`, e.message);
  }
}

const checks = [
  ['fortuner_legender.jpg', 260, 480, 130, 55],
  ['honda_civic.jpg', 390, 525, 110, 45],
  ['honda_brv.jpg', 345, 545, 110, 50],
  ['changan_karvaan.jpg', 990, 515, 110, 50],
  ['audi_wedding.jpg', 1010, 525, 110, 55],
  ['hiace_grand_cabin.jpg', 395, 540, 100, 45],
  ['oshan_x7.jpg', 305, 520, 100, 45],
  ['bulletproof_v8_b6.jpg', 495, 515, 120, 50],
  ['bulletproof_revo_b6.jpg', 655, 565, 120, 50],
  ['hilux_revo.jpg', 480, 375, 120, 50],
  ['copen_convertible.jpg', 280, 515, 100, 55],
  ['bulletproof_fortuner_b6.jpg', 715, 520, 100, 50],
  ['toyota_noah.jpg', 795, 390, 115, 55],
  ['toyota_prado.jpg', 820, 490, 105, 50],
  ['land_cruiser_v8.jpg', 505, 580, 105, 50]
];

for (const [f, x, y, w, h] of checks) {
  asciiCrop(f, x, y, w, h);
}
